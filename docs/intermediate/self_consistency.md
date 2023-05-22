---
sidebar_position: 5
---

# 🟡 Soběstačnost

import SCImage from '@site/docs/assets/intermediate/self_consistency.png';

<div style={{textAlign: 'center'}}>
  <img src={SCImage} style={{width: "500px"}} />
</div>

Self-consistency(@wang2022selfconsistency) neboli Soběstačnost je přístup, který se jednoduše zeptá modelu na stejnou výzvu vícekrát a za konečnou odpověď považuje většinový výsledek. Navazuje na %%CoT|CoT prompting%% a je výkonnější, pokud se používá ve spojení s ním.

## Příklad

Uvažujme jednoduchý příklad analýzy e-mailů. Předpokládejme, že jste softwarová společnost a dostáváte stovky e-mailů denně. Chcete použít model pro klasifikaci e-mailů jako důležitých nebo nedůležitých, abyste mohli upřednostnit ty, které mohou mít zásadní dopad na vaši firmu.

Zde je příklad e-mailu, který můžete obdržet:

```text
Dobrý den,

Ve vašem systému jsem objevil závažnou bezpečnostní chybu. Ačkoli se nejedná o
snadné, je možné získat přístup ke všem datům vašich uživatelů. V příloze přikládám
ukázku konceptu. Prosím, opravte tento problém co nejdříve.

S pozdravem,

Donny
```

Pojďme to dát do výzvy:

```text
Dobrý den,

Objevil jsem ve vašem systému závažnou bezpečnostní chybu. Ačkoli to není
snadné, je možné získat přístup ke všem datům vašich uživatelů. V příloze přikládám
ukázku konceptu. Prosím, opravte tento problém co nejdříve.

S pozdravem,

Donny

Zařaďte výše uvedený e-mail do kategorie DŮLEŽITÉ nebo NEDŮLEŽITÉ, protože se týká softwarové společnosti. Přemýšlejme krok za krokem.
```

Nyní použijeme výše uvedenou výzvu k vytvoření několika samostatných dokončení/řetězců myšlenek. Zde je několik příkladů:

```text
<!-- highlight-start -->
Odesílatel objevil v systému závažnou bezpečnostní chybu. 
Je to důležité, protože by to mohlo vést k úniku dat. 
Tento e-mail bych klasifikoval jako DŮLEŽITÝ.
<!-- highlight-end -->
```

````text
<!-- highlight-start -->
Odesílatel objevil závažnou bezpečnostní chybu v systému, ale neposkytl žádný důkaz konceptu a není snadné ji použít. 
Tento e-mail bych klasifikoval jako NEDŮLEŽITÝ.
<!-- highlight-end -->
```

````text
<!-- highlight-start -->
Odesílatel je pravděpodobně hacker a může mít přístup do systému. 
To je důležité, protože by to mohlo vést k úniku dat. 
Tento e-mail bych klasifikoval jako DŮLEŽITÝ.
<!-- highlight-end -->
```

Vytvořením mnoha myšlenkových řetězců a vybráním nejčastěji se vyskytující odpovědi (`DŮLEŽITÉ`) můžeme z GPT-3 získat konzistentnější správnou odpověď.

## Výsledky

Bylo prokázáno, že sebekonzistence zlepšuje výsledky v aritmetických úlohách, úlohách zdravého rozumu a symbolického uvažování. Dokonce i v případech, kdy se běžná metoda CoT ukázala jako neefektivní(@ye2022nespolehlivost), sebedůslednost
stále dokázala zlepšit výsledky.

## Poznámky

- Wang et al. se zabývají složitější metodou výběru konečné odpovědi,
která se zabývá pravděpodobnostmi generovanými LLM pro každý myšlenkový řetězec. Nicméně se
tuto metodu ve svých experimentech nepoužívají a zdá se, že většinové hlasování se obvykle
má stejný nebo lepší výkon.