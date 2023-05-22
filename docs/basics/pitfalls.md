---
sidebar_position: 90
---

# 🟢 Úskalí LLM

import Pitfalls from '@site/docs/assets/pitfalls.svg';

<div style={{textAlign: 'center'}}>
  <Pitfalls style={{width: "100%",height: "300px",verticalAlign: "top"}}/>
</div>


Systémy LLM jsou nesmírně výkonné, ale v žádném případě nejsou dokonalé. Existuje mnoho úskalí, kterých byste si při jejich používání měli být vědomi.

## Uvádění zdrojů

LLM většinou **neumí přesně citovat zdroje**. Je to proto, že nemají přístup k internetu a nepamatují si přesně, odkud jejich informace pocházejí. Často vytvoří zdroje, které vypadají dobře, ale jsou zcela nepřesné.

::::poznámka
Strategie, jako jsou LLM s rozšířeným vyhledáváním (LLM, které mohou vyhledávat na internetu a v dalších zdrojích), mohou tento problém často vyřešit.
:::

## Předpojatost

Modely LLM jsou často zkreslené směrem ke generování stereotypních odpovědí. Dokonce i při zavedení bezpečných ochranných prvků někdy říkají sexistické/rasistické/homofobní věci. Buďte opatrní při používání LLM v aplikacích zaměřených na spotřebitele a také při jejich používání ve výzkumu (mohou generovat neobjektivní výsledky).

## Halucinace

LLM budou často generovat nepravdy, když jim bude položena otázka, na kterou neznají odpověď. Někdy uvedou, že odpověď neznají, ale ve většině případů sebevědomě uvedou špatnou odpověď.

## Matematika

Studenti LLM jsou často špatní v matematice. Mají potíže s řešením jednoduchých matematických úloh a často nejsou schopni řešit složitější matematické úlohy.

::::pozn.
Tento problém lze do jisté míry vyřešit použitím [nástroje rozšířeného o LLM](https://learnprompting.org/docs/advanced_applications/mrkl).
:::

## Hackování promptů

Uživatelé mohou často obelstít LLM, aby generoval libovolný obsah. Více se o tom dočtete [zde](https://learnprompting.org/docs/category/-prompt-hacking).