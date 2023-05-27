---
sidebar_position: 0
---



# 🟢 Úvod

import Lock from '@site/static/img/lock.png';

<div style={{textAlign: 'center'}}>
  <img src={Lock} style={{width:"30%"}}/>

</div>


Prompt hacking je termín používaný k popisu typu útoku, který zneužívá zranitelnosti %%LLM|LLM%% manipulací s jejich vstupy nebo prompty. Na rozdíl od tradičního hackingu, který obvykle zneužívá zranitelnosti softwaru, se prompt hacking spoléhá na pečlivě vytvořené prompty, aby oklamal LLM a přiměl ho k provedení nezamýšlených akcí.

Budeme se zabývat třemi typy hackování pomocí promptů: prompt injection, prompt leaking a jailbreaking. Injekce promptu zahrnuje přidání škodlivého nebo nezamýšleného obsahu do promptu, aby se "zmocnil" výstup jazykového modelu. Prompt leaking a jailbreaking jsou vlastně jejich podmnožiny: Prompt leaking zahrnuje extrakci citlivých nebo důvěrných informací z odpovědí LLM, zatímco jailbreaking zahrnuje obcházení bezpečnostních a moderačních funkcí. Probereme také konkrétní útočné i obranné techniky.

K ochraně před prompt hackingem je třeba přijmout obranná opatření. Ta zahrnují implementaci obranných opatření založených na promptech, pravidelné sledování chování a výstupů LLM z hlediska neobvyklých aktivit a používání jemného ladění nebo jiných technik. Celkově lze říci, že promptní hacking představuje rostoucí problém pro bezpečnost LLM a je nezbytné zůstat ostražitý a přijmout proaktivní opatření na ochranu před těmito typy útoků.