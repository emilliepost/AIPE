---
sidebar_position: 4
---

# 🟢 Sestavit ChatGPT z GPT-3

import Skippy from '@site/docs/assets/skippy_chatbot.png'    
import SkippyHeader from '@site/docs/assets/skippy_chatbot_header.png'    
import Therapy from '@site/docs/assets/therapy_chatbot.gif'
import ChatGPT from '@site/docs/assets/chatgpt_ui_diagram.png'

<div style={{textAlign: 'left'}}>
  <img src={SkippyHeader} style={{width: "700px"}} />
</div>

## Úvod

[ChatGPT](https://chat.openai.com/chat) vyletěl do povětří a za pouhý týden získal milion uživatelů. Překvapivé je, že základní model, GPT-3, debutoval v roce 2020 a byl přístupněn pro širokou veřejnost <a href="https://openai.com/blog/api-no-waitlist/">před více než rokem!</a>.   

Pro ty, kteří to nevědí, ChatGPT je jazykový model od OpenAI, který byl vyladěn z GPT-3 tak, aby byl optimalizován pro konverzaci (@chatgpt2022). Má uživatelsky přívětivé rozhraní chatu, kde můžete zadávat vstupy a dostávat odpovědi od asistenta AI. Podívejte se na něj na [chat.openai.com](https://chat.openai.com/chat). 

Rané verze GPT-3 sice nebyly tak pokročilé jako současná řada GPT-3.5, ale i tak byly působivé. Tyto modely byly k dispozici prostřednictvím API a <a href="https://beta.openai.com/playground">playgroundu s UI rozhraním</a>, které umožňuje vyladit některé konfigurační hyperparametry a testovací prompty. GPT-3 si získal značnou oblibu, ale viralitě ChatGPT se nepřiblížil. 

To, co činí ChatGPT tak úspěšným, ve srovnání s GPT-3, je jeho přístupnost jako přímočarého asistenta umělé inteligence pro běžného člověka bez ohledu na jeho znalosti datascience, jazykových modelů nebo umělé inteligence.  

V tomto článku podávám přehled o tom, jak lze chatboty, jako je ChatGPT, implementovat pomocí velkého jazykového modelu, jako je GPT-3.

## Motivace
Tento článek byl částečně napsán kvůli tweetu <a href="https://twitter.com/goodside">Riley Goodside</a> o tom, jak by mohl být ChatGPT implementován.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How to make your own knock-off ChatGPT using GPT‑3 (text‑davinci‑003) — where you can customize the rules to your needs, and access the resulting chatbot over an API. <a href="https://t.co/9jHrs91VHW">pic.twitter.com/9jHrs91VHW</a></p>&mdash; Riley Goodside (@goodside) <a href="https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw">December 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Stejně jako ostatní modely řady GPT-3.5 byl ChatGPT vycvičen pomocí [RLHF](https://huggingface.co/blog/rlhf), ale jeho účinnost z velké části vychází z použití **dobrého promptu**.

## Prompt

<div style={{textAlign: 'left'}}>
  <img src={Skippy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Celý prompt chatbota Skippy z nadpisu článku</p>
</div>

<a href="/Learn_Prompting_CAI/docs/basics/prompting">Prompting je proces zadávání pokynů umělé inteligenci, aby něco udělala. </a> Jak jste pravděpodobně viděli v příkladech ChatGPT na internetu, můžete jej pobídnout k téměř čemukoli. Mezi běžné případy použití patří shrnutí textu, psaní obsahu na základě popisu nebo vytváření věcí, jako jsou básně, recepty a mnoho dalších. 

<p></p>

ChatGPT je jazykový model i uživatelské rozhraní. Prompt zadaný uživatelem do rozhraní je ve skutečnosti vložen do většího promptu, který obsahuje celou konverzaci mezi uživatelem a ChatGPT. To umožňuje jazykovému modelu pochopit kontext konverzace a vhodně reagovat.

<div style={{textAlign: 'left'}}>
  <img src={ChatGPT} style={{width: "600px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Příklad vložení promptu uživatele před odesláním modelu</p>
</div>

Jazykový model doplní prompt tak, že na základě pravděpodobností, které se naučil během předtrénování, zjistí, jaká slova budou následovat(@jurafsky2009).

<p></p>

GPT-3 se dokáže "učit" z jednoduchého pokynu nebo několika příkladů v promptu. Ten poslední se nazývá několikanásobné nebo kontextové učení (@brown2020language). Ve výše uvedeném promptu vytvořím fiktivního chatbota jménem Skippy a dám mu pokyn, aby uživatelům poskytoval odpovědi. GPT-3 zachytí formát zpětného dotazu: `USER: {vstup uživatele}` a `SKIPPY: {výstup skippy}`. GPT-3 chápe, že Skippy je chatbot a předchozí výměny jsou konverzací, takže když zadáme další uživatelský vstup, "Skippy" odpoví.

### Zapamatování

Předchozí výměny mezi Skippy a uživatelem se připojí k dalšímu promptu. Pokaždé, když zadáme další uživatelský vstup a získáme další výstup chatbota, prompt se rozšíří o tuto novou výměnu. Tímto způsobem si chatboti jako Skippy a ChatGPT mohou **zapamatovat předchozí vstupy.** Existuje však omezení, kolik si toho chatbot GPT-3 může zapamatovat.

Prompty mohou být po několika výměnách masivní, zejména pokud chatbota používáme k vytváření dlouhých odpovědí, jako jsou například příspěvky na blogu. Prompty zaslané do systému GPT-3 se převádějí na tokeny, což jsou jednotlivá slova nebo jejich části. Pro modely GPT-3, včetně ChatGPT, je stanoven limit <a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">4097 tokenů (přibližně 3000 slov v angličtině)</a> pro součet tokenů v promptu a generované odpovědi. 

### Několik příkladů

Existuje mnoho různých případů použití promptů chatbotů, které ukládají předchozí konverzace. ChatGPT má být univerzálním obecným asistentem a podle mých zkušeností se jen zřídka ptá na follow-upy.

#### Terapeutický chatbot, který se ptá na váš den.

Může být užitečné mít chatbota, který se aktivně ptá a získává zpětnou vazbu od uživatele. Níže je uveden příklad výzvy terapeutického chatbota, který bude klást otázky a navazovat na ně, aby uživateli pomohl přemýšlet o jeho dni.

<div style={{textAlign: 'left'}}>
  <img src={Therapy} style={{width: "700px"}} />
  <p style={{color: "gray", fontSize: "12px", fontStyle: "italic"}}>Prompt terapeutického chatbota</p>
</div>

#### Promluvte si se svým mladším já pomocí starých záznamů v deníku.

<a href="https://twitter.com/michellehuang42">Michelle Huang</a> použila GPT-3 k rozhovoru se svým mladším já. Prompt využívá určitý kontext, v tomto případě staré deníkové záznamy, ve spojení s formátem chatbota tam a zpět. GPT-3 dokáže na základě těchto záznamů napodobit osobnost. 

<p></p>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my &quot;inner child&quot;<br/><br/>some reflections below:</p>&mdash; michelle huang (@michellehuang42) <a href="https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw">November 27, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Prompt z Tweetu:
```markdown
Následuje rozhovor s přítomnou Michelle (věk [redigováno]) a mladou Michelle (věk 14 let).

Mladá Michelle napsala následující záznamy do deníku:
[deníkové záznamy zde].

Současná Michelle: [sem napište své otázky]
```

Autorka upozorňuje, že deníkové záznamy mohou dosáhnout limitu tokenů. V tomto případě byste mohli vybrat několik vybraných záznamů nebo se pokusit shrnout několik záznamů.

## Implementace

Provedu vás kódováním jednoduchého chatbota s podporou GPT-3 v jazyce Python. Začlenění GPT-3 do vytvářené aplikace je pomocí rozhraní API OpenAI neuvěřitelně snadné. Budete si muset vytvořit účet na OpenAI a získat klíč API. Podívejte se na jejich dokumentaci <a href="https://beta.openai.com/docs/introduction">zde.</a>.

Přehled toho, co potřebujeme udělat:

1. Formátovat vstup uživatele do promptu chatbota pro GPT-3
2. Získat odpověď chatbota jako dokončení (completion) z GPT-3
3. Aktualizovat prompt se vstupem uživatele a s odpovědí chatbota.
4. Udělat smyčku

Zde je prompt, který budu používat. Pomocí pythonu můžeme nahradit <conversation history\> a <user input\> jejich skutečnými hodnotami.

```python
chatbot_prompt = """
    Jako pokročilý chatbot je vaším hlavním cílem pomáhat uživatelům, jak nejlépe umíte. To může zahrnovat zodpovídání otázek, poskytování užitečných informací nebo plnění úkolů na základě uživatelských vstupů. Abyste mohli uživatelům účinně pomáhat, je důležité, abyste byli ve svých odpovědích podrobní a důkladní. Používejte příklady a důkazy, abyste podpořili své body a odůvodnili svá doporučení nebo řešení.

    <conversation history>

    Uživatel: <user input>
    Chatbot:"""
```

Sleduji další vstup uživatele i předchozí konverzaci. Nový vstup/výstup mezi chatbotem a uživatelem se připojuje v každé smyčce.
```python
import openai

openai.api_key = "VÁŠ API KLÍČ"
model_engine = "text-davinci-003"
chatbot_prompt = """
Jako pokročilý chatbot je vaším hlavním cílem pomáhat uživatelům, jak nejlépe umíte. To může zahrnovat zodpovídání otázek, poskytování užitečných informací nebo plnění úkolů na základě uživatelských vstupů. Abyste mohli uživatelům účinně pomáhat, je důležité, aby vaše odpovědi byly podrobné a důkladné. Používejte příklady a důkazy, abyste podpořili své body a odůvodnili svá doporučení nebo řešení.

<conversation history>

User: <user input>
Chatbot:"""


def get_response(conversation_history, user_input):
    prompt = chatbot_prompt.replace(
        "<conversation history>", conversation_history).replace("<user input>", user_input)

    # Get the response from GPT-3
    response = openai.Completion.create(
        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)

    # Extract the response from the response object
    response_text = response["choices"][0]["text"]

    chatbot_response = response_text.strip()

    return chatbot_response


def main():
    conversation_history = ""

    while True:
        user_input = input("> ")
        if user_input == "exit":
            break
        chatbot_response = get_response(conversation_history, user_input)
        print(f"Chatbot: {chatbot_response}")
        conversation_history += f"User: {user_input}\nChatbot: {chatbot_response}\n"

main()
```


<a href="https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d">Tady je odkaz</a> na celý kód jednoduchého chatbota.

<p></p>

Teď už zbývá jen vytvořit pěkný front-end, se kterým budou moci uživatelé komunikovat!

Napsal uživatel [jayo78](https://twitter.com/jayo782).