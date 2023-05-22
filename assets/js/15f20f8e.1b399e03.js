"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,v=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?o.createElement(v,l(l({ref:t},d),{},{components:n})):o.createElement(v,l({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r=n.p+"assets/images/chain_of_thought_example-37c925a2720c9c4bb4c823d237bc72c8.png",l=n.p+"assets/images/prompted_palm-20fba06418ed8569b51f0dd376c03b41.png",i={sidebar_position:3,locale:"cs-CZ",styl:"chicago"},p="\ud83d\udfe2 My\u0161lenkov\xfd \u0159et\u011bzec Prompting",s={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 My\u0161lenkov\xfd \u0159et\u011bzec Prompting",description:"Chain of Thought (CoT) prompting (@wei2022chain) je ned\xe1vno vyvinut\xfd prompting",source:"@site/docs/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"cs-CZ",styl:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f St\u0159edn\u011b pokro\u010dil\xfd",permalink:"/docs/category/\ufe0f-st\u0159edn\u011b-pokro\u010dil\xfd"},next:{title:"\ud83d\udfe2 My\u0161lenkov\xfd \u0159et\u011bzec s nulov\xfdm po\u010dtem v\xfdst\u0159el\u016f",permalink:"/docs/intermediate/zero_shot_cot"}},d={},c=[{value:"P\u0159\xedklad",id:"p\u0159\xedklad",level:2},{value:"Nespr\xe1vn\u011b",id:"nespr\xe1vn\u011b",level:4},{value:"Spr\xe1vn\u011b",id:"spr\xe1vn\u011b",level:4},{value:"V\xfdsledky",id:"v\xfdsledky",level:2},{value:"Omezen\xed",id:"omezen\xed",level:2},{value:"Pozn\xe1mky",id:"pozn\xe1mky",level:2}],m={toc:c},u="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-my\u0161lenkov\xfd-\u0159et\u011bzec-prompting"},"\ud83d\udfe2 My\u0161lenkov\xfd \u0159et\u011bzec Prompting"),(0,a.kt)("p",null,"Chain of Thought (CoT) prompting",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," je ned\xe1vno vyvinut\xfd prompting\nmetoda, kter\xe1 vyb\xedz\xed \u017e\xe1ka s LLM k vysv\u011btlen\xed jeho uva\u017eov\xe1n\xed. N\xed\u017ee uveden\xfd obr\xe1zek",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\nukazuje standardn\xed v\xfdzvu s %%n\u011bkolika sn\xedmky|standardn\xed v\xfdzvu s%n\u011bkolika sn\xedmky%% (vlevo) v porovn\xe1n\xed s v\xfdzvou my\u0161lenkov\xe9ho \u0159et\u011bzce (vpravo)."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:r,style:{width:"750px"}})),(0,a.kt)("div",{style:{textAlign:"center"}},"lasick\xfd prompting vs CoT (Wei et al.)"),(0,a.kt)("p",null,"Hlavn\xed my\u0161lenka CoT spo\u010d\xedv\xe1 v tom, \u017ee uk\xe1z\xe1n\xedm n\u011bkolika m\xe1lo z\xe1b\u011br\u016f %%exempl\xe1\u0159\u016f|exempl\xe1\u0159\u016f%%, kde se argumentace\nje proces uva\u017eov\xe1n\xed vysv\u011btlen v exempl\xe1\u0159\xedch, LLM tak\xe9 uk\xe1\u017ee proces uva\u017eov\xe1n\xed v exempl\xe1\u0159\xedch\np\u0159i odpov\xedd\xe1n\xed na v\xfdzvu. Toto vysv\u011btlen\xed uva\u017eov\xe1n\xed \u010dasto vede k p\u0159esn\u011bj\u0161\xedmu\nv\xfdsledk\u016fm."),(0,a.kt)("h2",{id:"p\u0159\xedklad"},"P\u0159\xedklad"),(0,a.kt)("p",null,"Zde je n\u011bkolik uk\xe1zek. Prvn\xed ukazuje GPT-3 (davinci-003)\nkter\xfd nedok\xe1\u017ee vy\u0159e\u0161it jednoduchou slovn\xed \xfalohu. Druh\xe1 ukazuje, jak GPT-3 (davinci-003) \xfasp\u011b\u0161n\u011b \u0159e\u0161\xed stejnou \xfalohu pomoc\xed v\xfdzvy CoT."),(0,a.kt)("h4",{id:"nespr\xe1vn\u011b"},"Nespr\xe1vn\u011b"),(0,a.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yay4iLCJwcm9tcHQiOiJXaGljaCBpcyBhIGZhc3RlciB3YXkgdG8gZ2V0IHRvIHdvcms%2FXG5PcHRpb24gMTogVGFrZSBhIDEwMDAgbWludXRlIGJ1cywgdGhlbiBhIGhhbGYgaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYmlrZSByaWRlLlxuT3B0aW9uIDI6IFRha2UgYW4gODAwIG1pbnV0ZSBidXMsIHRoZW4gYW4gaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAzMCBtaW51dGUgYmlrZSByaWRlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("h4",{id:"spr\xe1vn\u011b"},"Spr\xe1vn\u011b"),(0,a.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIHdpbGwgdGFrZSAxMDAwKzMwKzEwID0gMTA0MCBtaW51dGVzLlxuT3B0aW9uIDIgd2lsbCB0YWtlIDgwMCs2MCszMCA9IDg5MCBtaW51dGVzLlxuU2luY2UgT3B0aW9uIDIgdGFrZXMgODkwIG1pbnV0ZXMgYW5kIE9wdGlvbiAxIHRha2VzIDEwNDAgbWludXRlcywgT3B0aW9uIDIgaXMgZmFzdGVyLiIsInByb21wdCI6IldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgaG9tZT9cbk9wdGlvbiAxOiBUYWtlIGFuIDEwIG1pbnV0ZXMgYnVzLCB0aGVuIGFuIDQwIG1pbnV0ZSBidXMsIGFuZCBmaW5hbGx5IGEgMTAgbWludXRlIHRyYWluLlxuT3B0aW9uIDI6IFRha2UgYSA5MCBtaW51dGVzIHRyYWluLCB0aGVuIGEgNDUgbWludXRlIGJpa2UgcmlkZSwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYnVzLlxuT3B0aW9uIDEgd2lsbCB0YWtlIDEwKzQwKzEwID0gNjAgbWludXRlcy5cbk9wdGlvbiAyIHdpbGwgdGFrZSA5MCs0NSsxMD0xNDUgbWludXRlcy5cblNpbmNlIE9wdGlvbiAxIHRha2VzIDYwIG1pbnV0ZXMgYW5kIE9wdGlvbiAyIHRha2VzIDE0NSBtaW51dGVzLCBPcHRpb24gMSBpcyBmYXN0ZXIuXG5cbldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yaz9cbk9wdGlvbiAxOiBUYWtlIGEgMTAwMCBtaW51dGUgYnVzLCB0aGVuIGEgaGFsZiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDEwIG1pbnV0ZSBiaWtlIHJpZGUuXG5PcHRpb24gMjogVGFrZSBhbiA4MDAgbWludXRlIGJ1cywgdGhlbiBhbiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDMwIG1pbnV0ZSBiaWtlIHJpZGUuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("h2",{id:"v\xfdsledky"},"V\xfdsledky"),(0,a.kt)("p",null,"Uk\xe1zalo se, \u017ee technologie CoT je \xfa\u010dinn\xe1 p\u0159i zlep\u0161ov\xe1n\xed v\xfdsledk\u016f v \xfaloh\xe1ch, jako je nap\u0159.\naritmetick\xfdch \xfaloh\xe1ch, \xfaloh\xe1ch zdrav\xe9ho rozumu a symbolick\xe9ho uva\u017eov\xe1n\xed",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nZejm\xe9na pohotov\xe1 PaLM 540B",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," dosahuje 57 % \u0159e\u0161en\xed\np\u0159esnosti v \xfaloze GSM8K",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," (v t\xe9 dob\u011b SOTA)."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:l,style:{width:"300px"}})),(0,a.kt)("div",{style:{textAlign:"center"}},"Comparison of models on the GSM8K benchmark (Wei et al.)"),(0,a.kt)("h2",{id:"omezen\xed"},"Omezen\xed"),(0,a.kt)("p",null,'D\u016fle\u017eit\xe9 je, \u017ee podle Wei et al. "CoT p\u0159in\xe1\u0161\xed zv\xfd\u0161en\xed v\xfdkonu pouze p\u0159i pou\u017eit\xed model\u016f s parametry \u223c100B". Men\u0161\xed modely zapisovaly nelogick\xe9 my\u0161lenkov\xe9 \u0159et\u011bzce, co\u017e vedlo k hor\u0161\xed p\u0159esnosti ne\u017e standardn\xed napov\xedd\xe1n\xed. Modely obvykle z\xedsk\xe1vaj\xed n\xe1r\u016fst v\xfdkonu d\xedky podn\u011bt\u016fm CoT zp\u016fsobem \xfam\u011brn\xfdm velikosti modelu.'),(0,a.kt)("h2",{id:"pozn\xe1mky"},"Pozn\xe1mky"),(0,a.kt)("p",null,"P\u0159i psan\xed t\xe9to kapitoly nebyly ",(0,a.kt)("del",{parentName:"p"},"po\u0161kozeny")," \u017e\xe1dn\xe9 jazykov\xe9 modely, kter\xe9 by byly fin\xe1ln\u011b vylad\u011bny \ud83d\ude0a."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}v.isMDXComponent=!0}}]);