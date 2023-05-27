---
sidebar_position: 4
---

# 🟢 Zero Shot Chain of Thought


Zero Shot Chain of Thought (Zero-shot-CoT) je prompt (@kojima2022large), který navazuje na %%CoT prompting|Chain of Thought Prompting%% (@wei2022chain), který zavádí neuvěřitelný simple zero shot prompt. Zjistí, že přidáním slov "**Přemýšlejme krok za krokem.**" na konec otázky, jsou %%LLM|LLM%% schopni generovat řetězec, který odpovídá na otázku. Na základě tohoto myšlenkového řetězce jsou schopni získat přesnější odpovědi.

import ZSImage from '@site/docs/assets/zero_shot.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Zero Shot CoT (Kojima et al.)
</div>

Technicky vzato zahrnuje celý proces Zero-shot-CoT dvě samostatné výzvy/doplnění. Na následujícím obrázku horní bublina vlevo generuje řetězec myšlenek, zatímco horní bublina vpravo přebírá výstup z prvního promptu (včetně samotného prvního promptu), a z tohoto řetězce myšlenek získá odpověď. Tento druhý prompt je _sama o sobě rozšířený (self augmented)_ prompt.

import ZSProcessImage from '@site/docs/assets/zero_shot_example.png';

<div style={{textAlign: 'center'}}>
  <img src={ZSProcessImage} style={{width: "500px"}} />
</div>

<div style={{textAlign: 'center'}}>
Celý Zero Shot CoT Proces (Kojima et al.)
</div>

## Příklad

Zde je několik ukázek (které provádějí pouze extrakci odůvodnění). Tento první ukázka ukazuje, jak GPT-3 (davinci-003) selhává při řešení jednoduché matematické otázky, zatímco druhá ukázka využívá Zero-shot-CoT a úspěšně vyřeší problém. Neváhejte a zadejte své
OpenAI API klíč (klikněte na tlačítko Generovat) a pohrajte si s ukázkami. Všimněte si, o kolik jednodušší je prompt Zero-shot-CoT než prompt CoT.

#### Nesprávné

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


#### Správně

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Výsledky
Zero-shot-CoT byl také účinný při zlepšování výsledků v aritmetice, zdravém rozumu a symbolickém uvažování. Nepřekvapivě však většinou nebyl stejně účinnější než %%CoT prompting|Chain of Thought Prompting%%. Důležitým případem použití Zero-shot-CoT je když získání několik příkladů pro Chain of Thought prompting je obtížné. 

## Odebrírání zájmu

Kojima a kol. experimentují s řadou různých Zero-shot-CoT výzev (např. "Vyřešíme tento problém tak, že ho rozdělíme na jednotlivé kroky." nebo "Přemýšlejme o tom logicky."), ale zjistili, že "Přemýšlejme krok za krokem" je nejefektivnější pro jejich vybrané úlohy.

## Poznámky

Krok extrakce musí být často specifický pro konkrétní úlohu, což činí Zero-Shot-CoT méně zobecnitelný, než se na první pohled zdá.

Anekdoticky jsem zjistil, že Zero-Shot-CoT prompty jsou někdy účinné při zlepšování délky dokončení generativních úloh. Vezměme si například standardní prompt `Napsat příběh o žábě a houbě, které se spřátelí`. Přidání slov `Přemýšlejme krok za krokem.` na konec této výzvy vede k mnohem delšímu dokončení.
