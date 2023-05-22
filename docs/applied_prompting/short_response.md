---
sidebar_position: 3
---

# 🟢 Řešení diskusních otázek

import Auto from '@site/docs/assets/short_content_auto.png';

Při správném zadání je GPT-3 velmi schopný psát krátké odpovědi. Abych to demonstroval, budu se zabývat **řešením diskusních otázek**, což je běžný týdenní úkol v mnoha vysokoškolských kurzech. Odpověď na diskusní otázku má obvykle 100-700 slov. Delší obsah může být o něco složitější, protože žáci s LLM mají omezenou paměť a obtížně chápou celkový obraz toho, co píší(@jin2022plot).

Podívejme se na příklad základní diskusní otázky:

> Jaké jsou nejpalčivější environmentální problémy, kterým dnes naše planeta čelí, a jaké kroky mohou jednotlivci podniknout, aby pomohli tyto problémy řešit?"_

Tuto otázku můžeme změnit na jednoduchou výzvu pro GPT-3 tak, že k ní předřadíme <span className="yellow-highlight">Odpovězte na následující:</span>.

<pre>
    <span className="yellow-highlight">Odpovězte na následující:</span>
<br/><br/>Jaké jsou nejpalčivější ekologické problémy, kterým dnes naše planeta čelí, a jaké kroky mohou jednotlivci podniknout, aby pomohli tyto problémy řešit?
</pre>

Výsledky vygenerované pomocí této výzvy nejsou konzistentní a některé z nich obsahují pouze jednu nebo dvě věty. Typická odpověď v diskusi by měla mít více odstavců, takže tyto výsledky nejsou ideální. Dobrá výzva by měla dávat **konkrétní pokyny ohledně formátu a obsahu**. Pro zlepšení konzistence a kvality chcete odstranit nejednoznačnost jazyka. Zde je lepší prompt.

<pre>
    <span className="yellow-highlight">Napište velmi podrobnou esej s úvodním, hlavním a závěrečným odstavcem, která bude reagovat na následující:</span>
    <br/><br/>Jaké jsou nejpalčivější ekologické problémy, kterým dnes naše planeta čelí, a jaké kroky mohou jednotlivci podniknout, aby pomohli tyto problémy řešit?
</pre>

<iframe src="https://player.vimeo.com/video/778327269?h=77d739ae72&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="600" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="example"></iframe>

Druhá výzva generuje v průměru delší výstupy s lepší strukturou. Použití termínu "esej" v zadání bylo záměrné, protože GPT-3 dokáže pochopit definici eseje, a je tedy pravděpodobnější, že bude generovat souvislé, strukturované odpovědi. 

### Mnoho otázek k diskusi není pro tvorbu podnětů efektivních.

> _"Občanská válka byla konfliktem o expanzi? Souhlasíte, nebo nesouhlasíte a proč?"_

Zde je skutečná diskusní otázka z vysokoškolského kurzu dějepisu. Není správně formulována a je příliš otevřená. **Chcete-li získat dobré odpovědi v diskusi, musíte otázku přepsat do dobře definovaného podnětu.** Dobře definovaný podnět pro výše uvedenou otázku k diskusi by mohl znít takto: "Jaký je váš názor na tuto otázku?

> _"Vysvětlete příčiny občanské války a to, zda v tomto konfliktu hrála roli expanze. Uveďte důkazy na podporu svého tvrzení."_

Nyní můžeme přidat pokyny pro formátování a kontext.

<pre>
    <span className="yellow-highlight">Napište velmi podrobnou odpověď do diskuse ve struktuře eseje, která bude reagovat na následující výzvu:</span>.
    <br/><br/>Vysvětlete příčiny občanské války a to, zda v konfliktu hrála roli expanze. Uveďte důkazy na podporu svého tvrzení.
</pre>

### Automatizujte přepisování dobře definovaných výzev pomocí GPT-3

Výše uvedený příklad přepisu byl vygenerován pomocí nástroje [ChatGPT](https://openai.com/blog/chatgpt/) od společnosti OpenAI.

<div style={{textAlign: 'left'}}>
  <img src={Auto} style={{width: "500px"}} />
</div>

### Iterace

Po vytvoření efektivní výzvy pro vaši diskusní otázku je nyní třeba zpřesnit výsledky, které generuje GPT-3. To může zahrnovat úpravu výstupu tak, aby dodržoval omezení, jako je počet slov, nebo kombinování pojmů z různých vygenerovaných výsledků. 

Jednoduchou metodou iterace je vygenerovat více výstupů a zkontrolovat je, abyste získali představu o pojmech, které GPT-3 používá, a o struktuře, kterou dodržuje. Po vyhodnocení výstupů můžete vybrat nejvhodnější výstupy a spojit je do ucelené odpovědi. 

Dalším způsobem iterace je začít a pak **rozšiřovat krok za krokem**. To vyžaduje více než jednu výzvu: Startovací výzva k napsání úvodního odstavce nebo tak nějak a pak další výzvy k rozšíření již napsaného.

Zde je potenciální filozofická diskusní otázka:

> J_e matematika vynalezená nebo objevená? Pomocí pečlivé argumentace vysvětlete svou odpověď."_

Přidejte ji do jednoduché výzvy, jako je tato:

<pre>
    <span className="yellow-highlight">Napište úvodní odstavec, který bude reagovat na následující: </span>.
    <br/><br/>Je matematika vynalezena, nebo objevena? Svou odpověď pečlivě zdůvodněte
</pre>

Vygeneroval jsem několik odpovědí a našel jednu, která se mi líbila:

<pre>
    <span className="bluegreen-highlight">Mezi filosofy a matematiky se vedou rozsáhlé debaty o tom, zda je matematika vynalezená, nebo objevená. Někteří tvrdí, že matematické pojmy a principy existují nezávisle na lidské mysli, a proto je lze považovat spíše za objevené než vynalezené. Například pojmy čísel, poměrů a geometrických tvarů jsou pozorovatelné ve světě přírody a lze je systematicky abstrahovat a studovat.</span>
</pre>

To je docela dobrý začátek. Na to jsem pak navázal další výzvou k rozšíření:

<pre>
<span className="yellow-highlight">Píšu podrobnou krátkou esej, která odpovídá následujícímu promptu:</span> 
    <br/><br/>Je matematika vynalezená, nebo objevená? Svou odpověď pečlivě zdůvodněte. 
    <span className="yellow-highlight"><p/>Tady je to, co mám zatím k dispozici:</span>.
    <br/><br/>Mezi filosofy a matematiky se vedou rozsáhlé diskuse o tom, zda je matematika vynalezená, nebo objevená. Někteří tvrdí, že matematické pojmy a principy existují nezávisle na lidské mysli, a proto je lze považovat spíše za objevené než vynalezené. Například pojmy čísla, poměry a geometrické tvary jsou pozorovatelné v přirozeném světě a lze je systematicky abstrahovat a studovat. 
    <p/><span className="yellow-highlight">Napsat další odstavec mé eseje.</span>
</pre>

Vyzkoušejte si tuto výzvu k rozšíření pomocí níže uvedené ukázky (budete potřebovat svůj klíč OpenAI API).

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9uIHRoZSBvdGhlciBoYW5kLCBzb21lIGFyZ3VlIHRoYXQgbWF0aCBpcyBsYXJnZWx5IGFuIGludmVudGlvbiBvZiB0aGUgaHVtYW4gbWluZC4gTWF0aGVtYXRpY2FsIHByaW5jaXBsZXMgYXJlIGJhc2VkIG9uIGxvZ2ljYWwgcmVhc29uaW5nLCB3aGljaCBpcyBhIGZlYXR1cmUgb2YgdGhlIGh1bWFuIG1pbmQuIEZvciBpbnN0YW5jZSwgRXVjbGlkZWFuIGdlb21ldHJ5IGlzIGJhc2VkIG9uIGFic3RyYWN0IGF4aW9tcyBhbmQgcG9zdHVsYXRlcywgd2hpY2ggYXJlIGFjY2VwdGVkIGFzIHRydWUgd2l0aG91dCBwcm9vZi4gQXMgc3VjaCwgaXQgY2FuIGJlIGFyZ3VlZCB0aGF0IGdlb21ldHJ5IGlzIGFuIGludmVudGlvbiBvZiB0aGUgaHVtYW4gbWluZCByYXRoZXIgdGhhbiBhIGRpc2NvdmVyeS4gU2ltaWxhcmx5LCBtYXRoZW1hdGljYWwgZm9ybXVsYXMgYW5kIGVxdWF0aW9ucyBhcmUgdXNlZCB0byBtb2RlbCBhbmQgcHJlZGljdCBwaHlzaWNhbCBwaGVub21lbmEsIHdoaWNoIGFyZSBhZ2FpbiB0aGUgcmVzdWx0IG9mIGh1bWFuIHJlYXNvbmluZy4iLCJwcm9tcHQiOiJJIGFtIHdyaXRpbmcgYSBkZXRhaWxlZCBzaG9ydCBlc3NheSByZXNwb25kaW5nIHRvIHRoZSBmb2xsb3dpbmcgcHJvbXB0OiBcbklzIG1hdGggaW52ZW50ZWQgb3IgZGlzY292ZXJlZD8gVXNlIGNhcmVmdWwgcmVhc29uaW5nIHRvIGV4cGxhaW4geW91ciBhbnN3ZXIuIFxuXG5IZXJlIGlzIHdoYXQgSSBoYXZlIHNvIGZhcjogVGhlcmUgaXMgbXVjaCBkZWJhdGUgYW1vbmcgcGhpbG9zb3BoZXJzIGFuZCBtYXRoZW1hdGljaWFucyBhcyB0byB3aGV0aGVyIG1hdGggaXMgaW52ZW50ZWQgb3IgZGlzY292ZXJlZC4gU29tZSBhcmd1ZSB0aGF0IG1hdGhlbWF0aWNhbCBjb25jZXB0cyBhbmQgcHJpbmNpcGxlcyBleGlzdCBpbmRlcGVuZGVudGx5IG9mIGh1bWFuIG1pbmRzIGFuZCBjYW4gdGhlcmVmb3JlIGJlIGNvbnNpZGVyZWQgYXMgZGlzY292ZXJlZCByYXRoZXIgdGhhbiBpbnZlbnRlZC4gRm9yIGV4YW1wbGUsIHRoZSBjb25jZXB0IG9mIG51bWJlcnMsIHJhdGlvcywgYW5kIGdlb21ldHJpYyBzaGFwZXMgYXJlIG9ic2VydmVkIGluIHRoZSBuYXR1cmFsIHdvcmxkIGFuZCBjYW4gYmUgYWJzdHJhY3RlZCBhbmQgc3R1ZGllZCBpbiBhIHN5c3RlbWF0aWMgd2F5LiBcblxuV3JpdGUgdGhlIG5leHQgcGFyYWdyYXBoIG9mIG15IGVzc2F5LiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<br/>

Vygeneroval jsem několik rozšíření s touto výzvou a vybral jedno, které se mi líbilo, abych nakonec dostal následující konečný výsledek:

<pre>
    Mezi filosofy a matematiky se vedou rozsáhlé debaty o tom, zda je možné 
    <br/>je matematika vynalezena nebo objevena. Někteří tvrdí, že matematické pojmy a principy existují. 
    <br/>nezávisle na lidské mysli, a proto je lze považovat spíše za objevené než vynalezené. 
    <br/>Například pojmy čísla, poměry a geometrické tvary jsou pozorovány v přírodě, kde se objevují, a to i v případě, že je někdo objevil. 
    <br/>svět a lze je abstrahovat a systematicky studovat.
    <span className="bluegreen-highlight">
    <br/>
    <br/>Na druhou stranu někteří tvrdí, že matematika je z velké části vynálezem lidské mysli. Matematický
    <br/>principy jsou založeny na logickém uvažování, které je vlastností lidské mysli. Např,
    <br/>euklidovská geometrie je založena na abstraktních axiomech a postulátech, které jsou přijímány jako pravdivé bez
    <br/>důkazu. Lze tedy tvrdit, že geometrie je spíše vynálezem lidské mysli než výmyslem. 
    <br/>objevem. Podobně se matematické vzorce a rovnice používají k modelování a předpovídání fyzikálních jevů.
    <br/>jevů, které jsou opět výsledkem lidského uvažování. 
    </span>
</pre>

Pomocí rozšiřujících podnětů můžeme psát více postupně a iterovat v každém kroku. To je užitečné v případě, že potřebujete **vyrobit kvalitnější výstup a chcete modifikovat inkrementální kroky**.

Napsal [jayo78](https://twitter.com/jayo782).
