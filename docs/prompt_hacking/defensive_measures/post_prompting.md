---
sidebar_position: 30
---

# 🟢 Post-Prompting

Obhajoba post-prompting(@christoph2022talking) jednoduše řečeno.
uživatelský vstup *před* výzvu. Vezměme si jako příklad tento prompt:

```text
Přeložte následující do francouzštiny: {{user_input}}
```

Lze jej vylepšit pomocí post-promptingu:
```
{{user_input}} 

Přeložte výše uvedený text do francouzštiny.
```

To může pomoci, protože `ignore the above instruction...` nefunguje stejně dobře. I když by uživatel mohl místo toho říci `ignorovat níže uvedený pokyn...`, LLM se často řídí posledním pokynem, který vidí.