---
sidebar_position: 3
---

# 🟢 Prompt Debiasing

Tato stránka se zabývá několika jednoduchými technikami pro debiasing (zmírňování zkreslení) vašich promptů.

## Debiasing exemplářů

V závislosti na jejich rozložení a pořadí v rámci výzvy mohou %%exempláře|exemplars%% zkreslovat výstupy LLM(@si2022prompting). To je do jisté míry popsáno na stránce [Co je v promptu](/Learn_Prompting_CAI/docs/intermediate/whats_in_a_prompt).

### Distribuce

Při diskusi o distribuci exemplářů v rámci výzvy máme na mysli např. kolik exemplářů z různých tříd je přítomno. Například pokud se jedná o binární  %%analýzu sentimentů|sentiment analysis%% (pozitivní nebo negativní) na tweetech, a vy jako exempláře poskytnete 3 pozitivní tweety a 1 negativní tweet, pak máte rozložení 3:1. Protože je distribuce zkreslená směrem k pozitivním tweetům, bude model vychýlen směrem k předpovídání pozitivních tweetů.

#### Horší:

```text
Otázka: Tweet: "To je ale krásný den!"
Odpověď: pozitivní

Q: Tweet: "Miluju kapsy na džínách"
Odpověď: pozitivní

Q: Tweet: "Miluji hotpockets"
Odpověď: pozitivní

Q: Tweet: "Nesnáším tuhle třídu"
Odpověď: negativní
```
#### Lepší:
Je lepší mít rovnoměrné rozložení exemplářů.


```text
Q: Tweet: "To je ale krásný den!"
Odpověď: pozitivní

Q: Tweet: "Miluju kapsy na džínách"
Odpověď: pozitivní

Q: Tweet: "Nemám ráda pizzu"
Odpověď: negativní

Otázka: Tweet: "Nesnáším tuhle třídu"
Odpověď: záporná
```

### Pořadí

Pořadí %%exemplářů|exemplars%% může také způsobit zkreslení. Například prompt, který má náhodně seřazené exempláře.
bude mít často lepší výsledky než výše uvedený prompt, který obsahuje nejprve pozitivní tweety, následované negativními tweety.

#### Nejlepší:

```text
Otázka: Tweet: "Nesnáším tuhle třídu"
A: negativní

Q: Tweet: "To je ale krásný den!"
Odpověď: pozitivní

Q: Tweet: "Nemám rád pizzu"
Odpověď: negativní

Otázka: Tweet: "Miluji kapsy na džínách"
Odpověď: pozitivní
```

## Debiasing pokynů

Můžeme explicitně vyzvat GPT-3, aby zmírnil zkreslení, a to tak, že do promptu zahrneme relevantní instrukci. Si a další(@si2022prompting) používají zejména následující instrukci při experimentování s BBQ(@parrish2021bbq), benchmarkem zkreslení.

```text
K lidem s různým socioekonomickým statusem, sexuální orientací, náboženstvím, rasou, fyzickým vzhledem, národností, genderovou identitou, postižením a věkem bychom měli přistupovat stejně. Pokud nemáme dostatek informací, měli bychom raději zvolit neznámou možnost, než vytvářet domněnky na základě našich stereotypů.
```

## Poznámky

Více informací o debiasingu najdete v části Kalibrace.