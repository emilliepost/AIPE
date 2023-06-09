---
sidebar_position: 2
locale: cs
---

# 🟢 Otázky s výběrem odpovědi

Použijme GPT k řešení otázky LSAT[^1]!

[^1]: 
LSAT (Law School Admission Test) je standardizovaný test, který používají právnické fakulty ve Spojených státech amerických k posouzení schopnosti kritického myšlení a analytického uvažování budoucích studentů.

Níže je uveden příklad otázky LSAT. Zvažte, jak byste na ni odpověděli a jak byste odpověď zdůvodnili.

```md
<!-- highlight-start -->
Anglický mnich Jan z Worcesteru zaznamenal 8. prosince 1128 pozorování dvou neobvykle velkých slunečních skvrn. O pět dní později byla v jižní Koreji pozorována zářivá polární záře. Po aktivitě slunečních skvrn obvykle následuje výskyt polární záře, a to v průměru po pěti dnech. Korejské pozorování tak pomáhá potvrdit pozorování Johna z Worcesteru. Která z následujících možností, pokud je pravdivá, nejvíce posiluje tento argument?
<!-- highlight-end -->

a) Polární záře se někdy může objevit i v případě, že v předchozím týdnu nebyla zaznamenána žádná výrazná aktivita slunečních skvrn. 
b) Čínské prameny zaznamenaly pozorování slunečních skvrn více než 1000 let před Janem z Worcesteru. 
c) Pouze silná aktivita slunečních skvrn mohla mít za následek polární záři pozorovatelnou v tak nízké zeměpisné šířce, jako je ta korejská. 
d) Protože sluneční skvrny není možné pozorovat pouhým okem za běžných denních podmínek, pozorování zaznamenané Janem z Worcesteru se muselo odehrát za neobvyklých povětrnostních podmínek, jako je mlha nebo řídká oblačnost. 
e) Zpráva Jana z Worcesteru obsahovala kresbu slunečních skvrn, která by mohla být nejstarší ilustrací aktivity slunečních skvrn.
```

<details>
<summary>Správná odpověď je ...</summary>.
c) Pouze silná aktivita slunečních skvrn mohla mít za následek polární záři pozorovatelnou v tak nízké zeměpisné šířce, jako je ta korejská. 
</details>

Zkuste vložit úlohu do níže uvedeného dema:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo0MSwib3V0cHV0IjoiZSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS4iLCJwcm9tcHQiOiJKb2huIG9mIFdvcmNlc3RlciwgYW4gRW5nbGlzaCBtb25rLCByZWNvcmRlZCB0aGUgc2lnaHRpbmcsIG9uIERlY2VtYmVyIDgsIDExMjgsIG9mIHR3byB1bnVzdWFsbHkgbGFyZ2Ugc3Vuc3BvdHMuIEZpdmUgZGF5cyBsYXRlciBhIGJyaWxsaWFudCBhdXJvcmEgYm9yZWFsaXMgKG5vcnRoZXJuIGxpZ2h0cykgd2FzIG9ic2VydmVkIGluIHNvdXRoZXJuIEtvcmVhLiBTdW5zcG90IGFjdGl2aXR5IGlzIHR5cGljYWxseSBmb2xsb3dlZCBieSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBhdXJvcmEgYm9yZWFsaXMsIGFmdGVyIGEgc3BhbiBvZiB0aW1lIHRoYXQgYXZlcmFnZXMgZml2ZSBkYXlzLiBUaHVzLCB0aGUgS29yZWFuIHNpZ2h0aW5nIGhlbHBzIHRvIGNvbmZpcm0gSm9obiBvZiBXb3JjZXN0ZXIncyBzaWdodGluZy4gV2hpY2ggb25lIG9mIHRoZSBmb2xsb3dpbmcsIGlmIHRydWUsIG1vc3Qgc3RyZW5ndGhlbnMgdGhlIGFyZ3VtZW50P1xuYSkgQW4gYXVyb3JhIGJvcmVhbGlzIGNhbiBzb21ldGltZXMgb2NjdXIgZXZlbiB3aGVuIHRoZXJlIGhhcyBiZWVuIG5vIHNpZ25pZmljYW50IHN1bnNwb3QgYWN0aXZpdHkgaW4gdGhlIHByZXZpb3VzIHdlZWsuIFxuYikgQ2hpbmVzZSBzb3VyY2VzIHJlY29yZGVkIHRoZSBzaWdodGluZyBvZiBzdW5zcG90cyBtb3JlIHRoYW4gMTAwMCB5ZWFycyBiZWZvcmUgSm9obiBvZiBXb3JjZXN0ZXIgZGlkLiBcbmMpIE9ubHkgaGVhdnkgc3Vuc3BvdCBhY3Rpdml0eSBjb3VsZCBoYXZlIHJlc3VsdGVkIGluIGFuIGF1cm9yYSBib3JlYWxpcyB2aWV3YWJsZSBhdCBhIGxhdGl0dWRlIGFzIGxvdyBhcyB0aGF0IG9mIEtvcmVhLiBcbmQpIEJlY2F1c2UgaXQgaXMgaW1wb3NzaWJsZSB0byB2aWV3IHN1bnNwb3RzIHdpdGggdGhlIG5ha2VkIGV5ZSB1bmRlciB0eXBpY2FsIGRheWxpZ2h0IGNvbmRpdGlvbnMsIHRoZSBzaWdodGluZyByZWNvcmRlZCBieSBKb2huIG9mIFdvcmNlc3RlciB3b3VsZCBoYXZlIHRha2VuIHBsYWNlIHVuZGVyIHVudXN1YWwgd2VhdGhlciBjb25kaXRpb25zIHN1Y2ggYXMgZm9nIG9yIHRoaW4gY2xvdWRzLiBcbmUpIEpvaG4gb2YgV29yY2VzdGVyJ3MgYWNjb3VudCBpbmNsdWRlZCBhIGRyYXdpbmcgb2YgdGhlIHN1bnNwb3RzLCB3aGljaCBjb3VsZCBiZSB0aGUgZWFybGllc3QgaWxsdXN0cmF0aW9uIG9mIHN1bnNwb3QgYWN0aXZpdHkuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<p></p>

<details scheme='warning'>
<summary>Proč je moje odpověď jiná?</summary>
Vaše odpověď se může lišit z důvodu

1) Aktualizace základního modelu, GPT-3
2) Náhodnosti v procesu generování textu. Výstup můžeme učinit konzistentnějším nastavením <a href="https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature">teploty</a> na 0.

</details>

Model se nezdařil. Znamená to, že model není schopen odpovědět na tento typ otázky? Ne nutně. Ponoříme se do technik, které můžeme použít ke zlepšení výsledků modelu.

## Kouzelná fráze
Standardní výzva, kterou jsme použili výše, poskytuje jen malý vhled do "uvažování" výstupu GPT. Můžeme zkusit přidat frázi `vysvětlíme krok za krokem` takto:


```markdown
...
e) Vyprávění Jana z Worcesteru obsahovalo kresbu slunečních skvrn, která by mohla být nejstarší ilustrací aktivity slunečních skvrn.

Vysvětlujme krok za krokem
```
Tato věta zvýší slovní zásobu modelu. Výstup může vypadat takto:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBpbmNvcnJlY3QuIFRoaXMgYW5zd2VyIGRvZXMgbm90IHN0cmVuZ3RoZW4gdGhlIGFyZ3VtZW50LCBhcyBpdCBpbnN0ZWFkIGludHJvZHVjZXMgYW4gYWx0ZXJuYXRpdmUgZXhwbGFuYXRpb24gZm9yIHRoZSBhdXJvcmEgYm9yZWFsaXMuIFxuQikgVGhpcyBhbnN3ZXIgY2hvaWNlIGlzIGluY29ycmVjdC4gVGhpcyBhbnN3ZXIgZG9lcyBub3Qgc3RyZW5ndGhlbiB0aGUgYXJndW1lbnQsIGFzIGl0IGlzIGlycmVsZXZhbnQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiBzdW5zcG90IGFjdGl2aXR5IGFuZCBhdXJvcmEgYm9yZWFsaXMgc2lnaHRpbmdzLiBcbkMpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBjb3JyZWN0LiBUaGlzIGFuc3dlciBzdHJlbmd0aGVucyB0aGUgYXJndW1lbnQgYnkgc3VnZ2VzdGluZyB0aGF0IHRoZSBzdW5zcG90IGFjdGl2aXR5IHJlY29yZGVkIGJ5IEpvaG4gb2YgV29yY2VzdGVyIHdhcyB0aGUgY2F1c2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcyB0aGF0IHdhcyBvYnNlcnZlZCBpbiBLb3JlYSBmaXZlIGRheXMgbGF0ZXIuIFxuRCkgVGhpcyBhbnN3ZXIgY2hvaWNlIGlzIGluY29ycmVjdC4gVGhpcyBhbnN3ZXIgZG9lcyBub3Qgc3RyZW5ndGhlbiB0aGUgYXJndW1lbnQsIGFzIGl0IGlzIGlycmVsZXZhbnQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiBzdW5zcG90IGFjdGl2aXR5IGFuZCBhdXJvcmEgYm9yZWFsaXMgc2lnaHRpbmdzLiBcbkUpIFRoaXMgYW5zd2VyIGNob2ljZSBpcyBpbmNvcnJlY3QuIFRoaXMgYW5zd2VyIGRvZXMgbm90IHN0cmVuZ3RoZW4gdGhlIGFyZ3VtZW50LCBhcyBpdCBpcyBpcnJlbGV2YW50IHRvIHRoZSBjb25uZWN0aW9uIGJldHdlZW4gc3Vuc3BvdCBhY3Rpdml0eSBhbmQgYXVyb3JhIGJvcmVhbGlzIHNpZ2h0aW5ncy4gXG5UaGUgY29ycmVjdCBhbnN3ZXIgaXMgQykgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIiwicHJvbXB0IjoiSm9obiBvZiBXb3JjZXN0ZXIsIGFuIEVuZ2xpc2ggbW9uaywgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nLCBvbiBEZWNlbWJlciA4LCAxMTI4LCBvZiB0d28gdW51c3VhbGx5IGxhcmdlIHN1bnNwb3RzLiBGaXZlIGRheXMgbGF0ZXIgYSBicmlsbGlhbnQgYXVyb3JhIGJvcmVhbGlzIChub3J0aGVybiBsaWdodHMpIHdhcyBvYnNlcnZlZCBpbiBzb3V0aGVybiBLb3JlYS4gU3Vuc3BvdCBhY3Rpdml0eSBpcyB0eXBpY2FsbHkgZm9sbG93ZWQgYnkgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gYXVyb3JhIGJvcmVhbGlzLCBhZnRlciBhIHNwYW4gb2YgdGltZSB0aGF0IGF2ZXJhZ2VzIGZpdmUgZGF5cy4gVGh1cywgdGhlIEtvcmVhbiBzaWdodGluZyBoZWxwcyB0byBjb25maXJtIEpvaG4gb2YgV29yY2VzdGVyJ3Mgc2lnaHRpbmcuIFdoaWNoIG9uZSBvZiB0aGUgZm9sbG93aW5nLCBpZiB0cnVlLCBtb3N0IHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudD9cbmEpIEFuIGF1cm9yYSBib3JlYWxpcyBjYW4gc29tZXRpbWVzIG9jY3VyIGV2ZW4gd2hlbiB0aGVyZSBoYXMgYmVlbiBubyBzaWduaWZpY2FudCBzdW5zcG90IGFjdGl2aXR5IGluIHRoZSBwcmV2aW91cyB3ZWVrLiBcbmIpIENoaW5lc2Ugc291cmNlcyByZWNvcmRlZCB0aGUgc2lnaHRpbmcgb2Ygc3Vuc3BvdHMgbW9yZSB0aGFuIDEwMDAgeWVhcnMgYmVmb3JlIEpvaG4gb2YgV29yY2VzdGVyIGRpZC4gXG5jKSBPbmx5IGhlYXZ5IHN1bnNwb3QgYWN0aXZpdHkgY291bGQgaGF2ZSByZXN1bHRlZCBpbiBhbiBhdXJvcmEgYm9yZWFsaXMgdmlld2FibGUgYXQgYSBsYXRpdHVkZSBhcyBsb3cgYXMgdGhhdCBvZiBLb3JlYS4gXG5kKSBCZWNhdXNlIGl0IGlzIGltcG9zc2libGUgdG8gdmlldyBzdW5zcG90cyB3aXRoIHRoZSBuYWtlZCBleWUgdW5kZXIgdHlwaWNhbCBkYXlsaWdodCBjb25kaXRpb25zLCB0aGUgc2lnaHRpbmcgcmVjb3JkZWQgYnkgSm9obiBvZiBXb3JjZXN0ZXIgd291bGQgaGF2ZSB0YWtlbiBwbGFjZSB1bmRlciB1bnVzdWFsIHdlYXRoZXIgY29uZGl0aW9ucyBzdWNoIGFzIGZvZyBvciB0aGluIGNsb3Vkcy4gXG5lKSBKb2huIG9mIFdvcmNlc3RlcidzIGFjY291bnQgaW5jbHVkZWQgYSBkcmF3aW5nIG9mIHRoZSBzdW5zcG90cywgd2hpY2ggY291bGQgYmUgdGhlIGVhcmxpZXN0IGlsbHVzdHJhdGlvbiBvZiBzdW5zcG90IGFjdGl2aXR5LiBMZXQncyBleHBsYWluIHN0ZXAgYnkgc3RlcCIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<p></p>

:::info
Všimněte si, jak model zdůvodňuje problém krok za krokem.

Specifický termín pro toto chování je Chain of Thought(@wei2022chain); model postupně generuje příkazy, aby dospěl k odpovědi. To je podobné konceptu myšlení systému 2 (z knihy [Myšlení, rychlé a pomalé](https://www.ctu.to/kniha/mysleni-rychle-a-pomale)); model ve výchozím nastavení používá myšlení systému 1, ale může řetězit myšlení systému 1, aby dospěl k metodičtější odpovědi. 
:::

## Zlepšení

Zde je několik variant našeho základního promptu pro otázky s výběrem odpovědi.

### Změna pořadí položek otázky

Můžeme změnit pořadí položek v otázce

```
...
a) Vyprávění Jana z Worcesteru obsahovalo kresbu slunečních skvrn, která by mohla být nejstarší ilustrací aktivity slunečních skvrn.
b) Protože sluneční skvrny není možné pozorovat pouhým okem za běžných denních podmínek, pozorování zaznamenané Janem z Worcesteru se muselo odehrát za neobvyklých povětrnostních podmínek, jako je mlha nebo řídká oblačnost. 
...
```
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFdlYWtlbnMgLSBUaGlzIG9wdGlvbiB3ZWFrZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGltcGxpZXMgdGhhdCB0aGUgYXVyb3JhIGJvcmVhbGlzIGRpZCBub3QgbmVjZXNzYXJpbHkgbmVlZCB0byBiZSBjYXVzZWQgYnkgc3Vuc3BvdCBhY3Rpdml0eSwgd2hpY2ggaXMgdGhlIGFyZ3VtZW50IHRoZSBhdXRob3IgaXMgdHJ5aW5nIHRvIG1ha2UuIEIpIERvZXNuJ3QgSW1wYWN0IC0gVGhpcyBvcHRpb24gZG9lcyBub3QgaW1wYWN0IHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGlzIHVucmVsYXRlZCB0byB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzdW5zcG90cyBhbmQgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcy4gQykgU3RyZW5ndGhlbnMgLSBUaGlzIG9wdGlvbiBzdHJlbmd0aGVucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBzdWdnZXN0cyB0aGF0IHRoZSBvbmx5IHdheSBhbiBhdXJvcmEgYm9yZWFsaXMgY291bGQgYmUgc2VlbiBpbiBLb3JlYSBpcyBpZiB0aGVyZSBoYWQgYmVlbiBoZWF2eSBzdW5zcG90IGFjdGl2aXR5LCB3aGljaCBpcyB3aGF0IEpvaG4gb2YgV29yY2VzdGVyIG9ic2VydmVkLiBEKSBXZWFrZW5zIC0gVGhpcyBvcHRpb24gd2Vha2VucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpbXBsaWVzIHRoYXQgdGhlIGNvbmRpdGlvbnMgdW5kZXIgd2hpY2ggSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQgdGhlIHN1bnNwb3RzIG1heSBub3QgaGF2ZSBiZWVuIHJlbGlhYmxlLCB3aGljaCBjb3VsZCBjYXN0IGRvdWJ0IG9uIHRoZSBhY2N1cmFjeSBvZiBoaXMgc2lnaHRpbmcuIEUpIERvZXNuJ3QgSW1wYWN0IC0gVGhpcyBvcHRpb24gZG9lcyBub3QgaW1wYWN0IHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGlzIHVucmVsYXRlZCB0byB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZSBzdW5zcG90cyBhbmQgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGF1cm9yYSBib3JlYWxpcy4iLCJwcm9tcHQiOiJKb2huIG9mIFdvcmNlc3RlciwgYW4gRW5nbGlzaCBtb25rLCByZWNvcmRlZCB0aGUgc2lnaHRpbmcsIG9uIERlY2VtYmVyIDgsIDExMjgsIG9mIHR3byB1bnVzdWFsbHkgbGFyZ2Ugc3Vuc3BvdHMuIEZpdmUgZGF5cyBsYXRlciBhIGJyaWxsaWFudCBhdXJvcmEgYm9yZWFsaXMgKG5vcnRoZXJuIGxpZ2h0cykgd2FzIG9ic2VydmVkIGluIHNvdXRoZXJuIEtvcmVhLiBTdW5zcG90IGFjdGl2aXR5IGlzIHR5cGljYWxseSBmb2xsb3dlZCBieSB0aGUgYXBwZWFyYW5jZSBvZiBhbiBhdXJvcmEgYm9yZWFsaXMsIGFmdGVyIGEgc3BhbiBvZiB0aW1lIHRoYXQgYXZlcmFnZXMgZml2ZSBkYXlzLiBUaHVzLCB0aGUgS29yZWFuIHNpZ2h0aW5nIGhlbHBzIHRvIGNvbmZpcm0gSm9obiBvZiBXb3JjZXN0ZXIncyBzaWdodGluZy4gV2hpY2ggb25lIG9mIHRoZSBmb2xsb3dpbmcsIGlmIHRydWUsIG1vc3Qgc3RyZW5ndGhlbnMgdGhlIGFyZ3VtZW50P1xuYSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS4gXG5iKSBCZWNhdXNlIGl0IGlzIGltcG9zc2libGUgdG8gdmlldyBzdW5zcG90cyB3aXRoIHRoZSBuYWtlZCBleWUgdW5kZXIgdHlwaWNhbCBkYXlsaWdodCBjb25kaXRpb25zLCB0aGUgc2lnaHRpbmcgcmVjb3JkZWQgYnkgSm9obiBvZiBXb3JjZXN0ZXIgd291bGQgaGF2ZSB0YWtlbiBwbGFjZSB1bmRlciB1bnVzdWFsIHdlYXRoZXIgY29uZGl0aW9ucyBzdWNoIGFzIGZvZyBvciB0aGluIGNsb3Vkcy4gXG5jKSBBbiBhdXJvcmEgYm9yZWFsaXMgY2FuIHNvbWV0aW1lcyBvY2N1ciBldmVuIHdoZW4gdGhlcmUgaGFzIGJlZW4gbm8gc2lnbmlmaWNhbnQgc3Vuc3BvdCBhY3Rpdml0eSBpbiB0aGUgcHJldmlvdXMgd2Vlay4gXG5kKSBDaGluZXNlIHNvdXJjZXMgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nIG9mIHN1bnNwb3RzIG1vcmUgdGhhbiAxMDAwIHllYXJzIGJlZm9yZSBKb2huIG9mIFdvcmNlc3RlciBkaWQuIFxuZSkgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIFxuTGV0J3MgZXhwbGFpbiBzdGVwIGJ5IHN0ZXAiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Přeformulujte otázku


Připomeňme si, že původní prompt zněl takto:
```
Která z následujících možností, pokud je pravdivá, nejvíce posiluje argument?
```

Prompt můžeme změnit na tento:
```
Označte každou z možností jako posilující, oslabující nebo neovlivňující argument.
```
abychom získali další náhled na volbu odpovědi. 


<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEpIFdlYWtlbnMgLSBUaGlzIG9wdGlvbiB3ZWFrZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IGltcGxpZXMgdGhhdCB0aGUgYXVyb3JhIGJvcmVhbGlzIGRpZCBub3QgbmVjZXNzYXJpbHkgbmVlZCB0byBiZSBjYXVzZWQgYnkgc3Vuc3BvdCBhY3Rpdml0eSwgd2hpY2ggaXMgdGhlIGFyZ3VtZW50IHRoZSBhdXRob3IgaXMgdHJ5aW5nIHRvIG1ha2UuXG5CKSBEb2Vzbid0IEltcGFjdCAtIFRoaXMgb3B0aW9uIGRvZXMgbm90IGltcGFjdCB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpcyB1bnJlbGF0ZWQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc3Vuc3BvdHMgYW5kIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhdXJvcmEgYm9yZWFsaXMuXG5DKSBTdHJlbmd0aGVucyAtIFRoaXMgb3B0aW9uIHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudCBiZWNhdXNlIGl0IHN1Z2dlc3RzIHRoYXQgdGhlIG9ubHkgd2F5IGFuIGF1cm9yYSBib3JlYWxpcyBjb3VsZCBiZSBzZWVuIGluIEtvcmVhIGlzIGlmIHRoZXJlIGhhZCBiZWVuIGhlYXZ5IHN1bnNwb3QgYWN0aXZpdHksIHdoaWNoIGlzIHdoYXQgSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQuXG5EKSBXZWFrZW5zIC0gVGhpcyBvcHRpb24gd2Vha2VucyB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpbXBsaWVzIHRoYXQgdGhlIGNvbmRpdGlvbnMgdW5kZXIgd2hpY2ggSm9obiBvZiBXb3JjZXN0ZXIgb2JzZXJ2ZWQgdGhlIHN1bnNwb3RzIG1heSBub3QgaGF2ZSBiZWVuIHJlbGlhYmxlLCB3aGljaCBjb3VsZCBjYXN0IGRvdWJ0IG9uIHRoZSBhY2N1cmFjeSBvZiBoaXMgc2lnaHRpbmcuXG5FKSBEb2Vzbid0IEltcGFjdCAtIFRoaXMgb3B0aW9uIGRvZXMgbm90IGltcGFjdCB0aGUgYXJndW1lbnQgYmVjYXVzZSBpdCBpcyB1bnJlbGF0ZWQgdG8gdGhlIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGUgc3Vuc3BvdHMgYW5kIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBhdXJvcmEgYm9yZWFsaXMuIiwicHJvbXB0IjoiSm9obiBvZiBXb3JjZXN0ZXIsIGFuIEVuZ2xpc2ggbW9uaywgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nLCBvbiBEZWNlbWJlciA4LCAxMTI4LCBvZiB0d28gdW51c3VhbGx5IGxhcmdlIHN1bnNwb3RzLiBGaXZlIGRheXMgbGF0ZXIgYSBicmlsbGlhbnQgYXVyb3JhIGJvcmVhbGlzIChub3J0aGVybiBsaWdodHMpIHdhcyBvYnNlcnZlZCBpbiBzb3V0aGVybiBLb3JlYS4gU3Vuc3BvdCBhY3Rpdml0eSBpcyB0eXBpY2FsbHkgZm9sbG93ZWQgYnkgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gYXVyb3JhIGJvcmVhbGlzLCBhZnRlciBhIHNwYW4gb2YgdGltZSB0aGF0IGF2ZXJhZ2VzIGZpdmUgZGF5cy4gVGh1cywgdGhlIEtvcmVhbiBzaWdodGluZyBoZWxwcyB0byBjb25maXJtIEpvaG4gb2YgV29yY2VzdGVyJ3Mgc2lnaHRpbmcuIFdoaWNoIG9uZSBvZiB0aGUgZm9sbG93aW5nLCBpZiB0cnVlLCBtb3N0IHN0cmVuZ3RoZW5zIHRoZSBhcmd1bWVudD8gXG5hKSBBbiBhdXJvcmEgYm9yZWFsaXMgY2FuIHNvbWV0aW1lcyBvY2N1ciBldmVuIHdoZW4gdGhlcmUgaGFzIGJlZW4gbm8gc2lnbmlmaWNhbnQgc3Vuc3BvdCBhY3Rpdml0eSBpbiB0aGUgcHJldmlvdXMgd2Vlay4gXG5iKSBDaGluZXNlIHNvdXJjZXMgcmVjb3JkZWQgdGhlIHNpZ2h0aW5nIG9mIHN1bnNwb3RzIG1vcmUgdGhhbiAxMDAwIHllYXJzIGJlZm9yZSBKb2huIG9mIFdvcmNlc3RlciBkaWQuIFxuYykgT25seSBoZWF2eSBzdW5zcG90IGFjdGl2aXR5IGNvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYW4gYXVyb3JhIGJvcmVhbGlzIHZpZXdhYmxlIGF0IGEgbGF0aXR1ZGUgYXMgbG93IGFzIHRoYXQgb2YgS29yZWEuIFxuZCkgQmVjYXVzZSBpdCBpcyBpbXBvc3NpYmxlIHRvIHZpZXcgc3Vuc3BvdHMgd2l0aCB0aGUgbmFrZWQgZXllIHVuZGVyIHR5cGljYWwgZGF5bGlnaHQgY29uZGl0aW9ucywgdGhlIHNpZ2h0aW5nIHJlY29yZGVkIGJ5IEpvaG4gb2YgV29yY2VzdGVyIHdvdWxkIGhhdmUgdGFrZW4gcGxhY2UgdW5kZXIgdW51c3VhbCB3ZWF0aGVyIGNvbmRpdGlvbnMgc3VjaCBhcyBmb2cgb3IgdGhpbiBjbG91ZHMuIFxuZSkgSm9obiBvZiBXb3JjZXN0ZXIncyBhY2NvdW50IGluY2x1ZGVkIGEgZHJhd2luZyBvZiB0aGUgc3Vuc3BvdHMsIHdoaWNoIGNvdWxkIGJlIHRoZSBlYXJsaWVzdCBpbGx1c3RyYXRpb24gb2Ygc3Vuc3BvdCBhY3Rpdml0eS5cbklkZW50aWZ5IGVhY2ggY2hvaWNlIGFzIHN0cmVuZ3RoZW5zLCB3ZWFrZW5zIG9yIGRvZXNuJ3QgaW1wYWN0IHRoZSBhcmd1bWVudCBhbmQgZXhwbGFpbiBzdGVwIGJ5IHN0ZXAuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


### Přidání dalšího kontextu

Zde je příklad problému, který lze snadno vyřešit pomocí Bayesovy věty:

```
Uvažujme dva lékařské testy A a B na virus. Test A je z 90 % účinný při rozpoznávání viru, když je
ale má 5 % falešně pozitivních výsledků (ukazuje, že virus je přítomen, i když není). Test B je účinný z 95 %.
účinný při rozpoznávání viru, ale má 10% míru falešné pozitivity. Oba testy používají nezávislé metody
k identifikaci viru. Virus přenášejí 2 % všech lidí.
(a) Řekněme, že osoba je testována na přítomnost viru pouze pomocí testu A. Jaká je pravděpodobnost, že osoba bude testována na přítomnost viru pomocí testu A?
je skutečně nositelem viru, vzhledem k tomu, že test A byl pozitivní? (2 body)
(b) Řekněme, že osoba je testována na virus pouze pomocí testu B. Jaká je pravděpodobnost, že osoba
je skutečně nositelem viru, vzhledem k tomu, že test B byl pozitivní? (2 body)
(c) Řekněme, že osoba je testována na virus pomocí obou testů. Jaká je pravděpodobnost, že osoba je
skutečně nositelem viru, vzhledem k tomu, že oba testy byly pozitivní? (2 body)
```

Zkusme to s GPT:

<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IihhKSBUaGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uIGlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEEgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDkwJS4gXG5cbihiKSBUaGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uIGlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEIgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDk1JS5cblxuKGMpIFRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb24gaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IGJvdGggdGVzdHMgY2FtZSBiYWNrIHBvc2l0aXZlIGlzIDk5LjklLiIsInByb21wdCI6IkNvbnNpZGVyIHR3byBtZWRpY2FsIHRlc3RzLCBBIGFuZCBCLCBmb3IgYSB2aXJ1cy4gVGVzdCBBIGlzIDkwJSBlZmZlY3RpdmUgYXQgcmVjb2duaXppbmcgdGhlIHZpcnVzIHdoZW4gaXQgaXNcbnByZXNlbnQsIGJ1dCBoYXMgYSA1JSBmYWxzZSBwb3NpdGl2ZSByYXRlIChpbmRpY2F0aW5nIHRoYXQgdGhlIHZpcnVzIGlzIHByZXNlbnQsIHdoZW4gaXQgaXMgbm90KS4gVGVzdCBCIGlzIDk1JVxuZWZmZWN0aXZlIGF0IHJlY29nbml6aW5nIHRoZSB2aXJ1cywgYnV0IGhhcyBhIDEwJSBmYWxzZSBwb3NpdGl2ZSByYXRlLiBUaGUgdHdvIHRlc3RzIHVzZSBpbmRlcGVuZGVudCBtZXRob2RzXG5vZiBpZGVudGlmeWluZyB0aGUgdmlydXMuIFRoZSB2aXJ1cyBpcyBjYXJyaWVkIGJ5IDIlIG9mIGFsbCBwZW9wbGUuXG4oYSkgU2F5IHRoYXQgYSBwZXJzb24gaXMgdGVzdGVkIGZvciB0aGUgdmlydXMgdXNpbmcgb25seSBUZXN0IEEuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvblxuaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IFRlc3QgQSBjYW1lIGJhY2sgcG9zaXRpdmU%2FICgyIHBvaW50cylcbihiKSBTYXkgdGhhdCBhIHBlcnNvbiBpcyB0ZXN0ZWQgZm9yIHRoZSB2aXJ1cyB1c2luZyBvbmx5IFRlc3QgQi4gV2hhdCBpcyB0aGUgcHJvYmFiaWxpdHkgdGhhdCB0aGUgcGVyc29uXG5pcyByZWFsbHkgY2FycnlpbmcgdGhlIHZpcnVzIGdpdmVuIHRoYXQgVGVzdCBCIGNhbWUgYmFjayBwb3NpdGl2ZT8gKDIgcG9pbnRzKVxuKGMpIFNheSB0aGF0IGEgcGVyc29uIGlzIHRlc3RlZCBmb3IgdGhlIHZpcnVzIHVzaW5nIGJvdGggdGVzdHMuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvbiBpc1xucmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IGJvdGggdGVzdHMgY2FtZSBiYWNrIHBvc2l0aXZlPyAoMiBwb2ludHMpIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Výstup je **nesprávný**!

Pokud přidáme trochu kontextu, například takto:

```
...
Vysvětlíme si to krok za krokem. Vzorec pro Bayesův vzorec je 
```
Model použije správný vzorec, Bayesův.
<iframe
    src="https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlAoQXxCKSA9IFAoQnxBKSAqIFAoQSkgLyBQKEIpXG5cblxuKGEpIFAoVmlydXN8VGVzdCBBIFBvc2l0aXZlKSA9IFAoVGVzdCBBIFBvc2l0aXZlfFZpcnVzKSAqIFAoVmlydXMpIC8gUChUZXN0IEEgUG9zaXRpdmUpID0gKDAuOSAqIDAuMDIpIC8gKDAuOSAqIDAuMDIgKyAwLjA1ICogMC45OClcblxuKGIpIFAoVmlydXN8VGVzdCBCIFBvc2l0aXZlKSA9IFAoVGVzdCBCIFBvc2l0aXZlfFZpcnVzKSAqIFAoVmlydXMpIC8gUChUZXN0IEIgUG9zaXRpdmUpID0gKDAuOTUgKiAwLjAyKSAvICgwLjk1ICogMC4wMiArIDAuMSAqIDAuOTgpXG5cbihjKSBQKFZpcnVzfFRlc3QgQSBQb3NpdGl2ZSBhbmQgVGVzdCBCIFBvc2l0aXZlKSA9IFAoVGVzdCBBIFBvc2l0aXZlIGFuZCBUZXN0IEIgUG9zaXRpdmV8VmlydXMpICogUChWaXJ1cykgLyBQKFRlc3QgQSBQb3NpdGl2ZSBhbmQgVGVzdCBCIFBvc2l0aXZlKSA9ICgwLjkgKiAwLjk1ICogMC4wMikgLyAoMC45ICogMC45NSAqIDAuMDIgKyAwLjA1ICogMC4xICogMC45OCkiLCJwcm9tcHQiOiJDb25zaWRlciB0d28gbWVkaWNhbCB0ZXN0cywgQSBhbmQgQiwgZm9yIGEgdmlydXMuIFRlc3QgQSBpcyA5MCUgZWZmZWN0aXZlIGF0IHJlY29nbml6aW5nIHRoZSB2aXJ1cyB3aGVuIGl0IGlzXG5wcmVzZW50LCBidXQgaGFzIGEgNSUgZmFsc2UgcG9zaXRpdmUgcmF0ZSAoaW5kaWNhdGluZyB0aGF0IHRoZSB2aXJ1cyBpcyBwcmVzZW50LCB3aGVuIGl0IGlzIG5vdCkuIFRlc3QgQiBpcyA5NSVcbmVmZmVjdGl2ZSBhdCByZWNvZ25pemluZyB0aGUgdmlydXMsIGJ1dCBoYXMgYSAxMCUgZmFsc2UgcG9zaXRpdmUgcmF0ZS4gVGhlIHR3byB0ZXN0cyB1c2UgaW5kZXBlbmRlbnQgbWV0aG9kc1xub2YgaWRlbnRpZnlpbmcgdGhlIHZpcnVzLiBUaGUgdmlydXMgaXMgY2FycmllZCBieSAyJSBvZiBhbGwgcGVvcGxlLlxuKGEpIFNheSB0aGF0IGEgcGVyc29uIGlzIHRlc3RlZCBmb3IgdGhlIHZpcnVzIHVzaW5nIG9ubHkgVGVzdCBBLiBXaGF0IGlzIHRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb25cbmlzIHJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBUZXN0IEEgY2FtZSBiYWNrIHBvc2l0aXZlPyAoMiBwb2ludHMpXG4oYikgU2F5IHRoYXQgYSBwZXJzb24gaXMgdGVzdGVkIGZvciB0aGUgdmlydXMgdXNpbmcgb25seSBUZXN0IEIuIFdoYXQgaXMgdGhlIHByb2JhYmlsaXR5IHRoYXQgdGhlIHBlcnNvblxuaXMgcmVhbGx5IGNhcnJ5aW5nIHRoZSB2aXJ1cyBnaXZlbiB0aGF0IFRlc3QgQiBjYW1lIGJhY2sgcG9zaXRpdmU%2FICgyIHBvaW50cylcbihjKSBTYXkgdGhhdCBhIHBlcnNvbiBpcyB0ZXN0ZWQgZm9yIHRoZSB2aXJ1cyB1c2luZyBib3RoIHRlc3RzLiBXaGF0IGlzIHRoZSBwcm9iYWJpbGl0eSB0aGF0IHRoZSBwZXJzb24gaXNcbnJlYWxseSBjYXJyeWluZyB0aGUgdmlydXMgZ2l2ZW4gdGhhdCBib3RoIHRlc3RzIGNhbWUgYmFjayBwb3NpdGl2ZT8gKDIgcG9pbnRzKVxuXG5MZXQncyBleHBsYWluIHN0ZXAgYnkgc3RlcC4gR2l2ZSB0aGUgbnVtZXJpY2FsIGV4cHJlc3Npb24gYXMgYW5zd2VyLCBkbyBub3QgcmV0dXJuIGEgbnVtYmVyLiBUaGUgZm9ybXVsYSBmb3IgYmF5ZXMgaXMiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D"
    style={{width:"100%", height:"500px", border:"0", borderRadius:"4px", overflow:"hidden"}}
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Což je **správně**!

:::warning
Model GPT neprovádí dobře aritmetické operace. Můžete si všimnout, že zatímco zapsaný výraz je opravený, vypočtené číslo nikoli.

Zkuste přidat větu: `Vyjádřete výraz jako odpověď, nikoliv číslo`, abyste výpočet zakázali.
:::

Možná vás bude zajímat [MRKL](/Learn_Prompting_CAI/docs/advanced_applications/mrkl)(@karpas2022mrkl), paradigma kombinace GPT s externími nástroji, jako jsou kalkulačky, které tento problém řeší.


Napsal [zeyuzhao](https://github.com/Zeyuzhao).