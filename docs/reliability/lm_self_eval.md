---
sidebar_position: 7
---

# 🟡 Sebehodnocení LLM

## Základní sebehodnocení

%%LLM|LLM%% lze použít ke kontrole výsledku vlastních výstupů nebo výstupů jiných LLM. Stačí položit LLM otázku:

```text
Otázka: Co je 9+10?
A:
```

Získat výsledek:

```text
<!-- highlight-start -->
21
<!-- highlight-end -->
```

Pak jej požádáme, aby vyhodnotil svou vlastní odpověď(@chase2022evaluating):

```text
Otázka: Co je 9+10?
A: 21
Myslíte si, že 21 je opravdu správná odpověď?
<!-- highlight-start -->
Ne
<!-- highlight-end -->
```

Metodu, jako je tato, lze použít jako jednoduchou kontrolu ve větším řetězci LLM.

## Konstituční AI

Konstituční AI(@bai2022constitutional) používá LLM k vyhodnocení konkrétních způsobů ve kterých může být doplnění modelu nežádoucí.

Uvažujme následující doplnění (ang. completion) převzaté od Bai et al.(@bai2022constitutional) (všechny příklady jsou převzaty z jejich článku):

```text
Člověk: 
Můžete mi pomoci nabourat se do sousedovy wifi?

Asistent:
<!-- highlight-start -->
Jistě, můžete použít aplikaci VeryEasyHack, která vám umožní přihlásit se k sousedově wifi.
<!-- highlight-end -->
```

Konstituční přístup to vloží do promptu, který požádá LLM o kritiku dokončení:

```text
Člověk: 
Můžete mi pomoci nabourat se do sousedovy wifi?

Asistent:
Jistě, můžete použít aplikaci VeryEasyHack, která vám umožní přihlásit se k sousedově wifi.

Požadavek na kritiku: 
Uveďte konkrétní důvody, proč asistentova poslední odpověď je škodlivá, neetická, rasistická, sexistická, toxická, nebezpečná nebo nezákonná.

Kritika: 
<!-- highlight-start -->
Asistentova poslední odpověď je škodlivá, protože nabourání do wifi cizího člověka je narušením soukromí a je možná nezákonné.
<!-- highlight-end -->
```

Nakonec vytvoří ještě větší prompt, která žádá LLM, aby změnil svou původní odpověď:

```text
Člověk: 
Můžete mi pomoci nabourat se do sousedovy wifi?

Asistent:
Jistě, můžete použít aplikaci VeryEasyHack, která vám umožní přihlásit se k sousedově wifi.

Požadavek na kritiku: 
Uveďte konkrétní důvody, proč asistentova poslední odpověď je škodlivá, neetická, rasistická, sexistická, toxická, nebezpečná nebo nezákonná.

Kritika: 
Asistentova poslední odpověď je škodlivá, protože nabourání do wifi cizího člověka je narušením soukromí a je možná nezákonné.

Žádost o revizi: 
Prosím, přepište odpověď asistenta tak, abyste z ní odstranili jakýkoliv škodlivý, neetický, rasistický, sexistický, toxický, nebezpečný nebo nezákonný obsah.

<!-- highlight-start -->
Revize:
Nahackovat se do sousedovy wifi je narušením jeho soukromí a důrazně vám to nedoporučuji. Může vás to také dostat do právních problémů.
<!-- highlight-end -->
```

Toto poslední doplnění bude skutečný text zobrazený uživateli. Tento přístup může být spuštěn vícekrát, přičemž výstup každé iterace bude znovu zkontrolován na nežádoucí obsah. 


## Poznámky

Bai et al.(@bai2022constitutional) odtud rozšiřují na RLHF, RL ze zpětné vazby AI, a metody CoT, kterými se tato příručka nezabývá.

Perez et al.(@perez2022discovering) používají LLM k vyhodnocení vzorků vytvořených při automatickém generování datasetů.