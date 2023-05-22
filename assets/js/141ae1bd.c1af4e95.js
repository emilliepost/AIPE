"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8022],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(o),v=a,k=d["".concat(s,".").concat(v)]||d[v]||m[v]||r;return o?n.createElement(k,i(i({ref:t},u),{},{components:o})):n.createElement(k,i({ref:t},u))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=v;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}v.displayName="MDXCreateElement"},77667:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>z,frontMatter:()=>l,metadata:()=>d,toc:()=>v});var n=o(87462),a=(o(67294),o(3905));const r=o.p+"assets/images/unguided_question-49d7e89294f7030d354b4a954c3a5d72.png",i=o.p+"assets/images/limerick_question-1efdd913233a84bbf82a0d93095a61bc.png",p=o.p+"assets/images/unprimed_question-360b659b34b4bcc3722dde0fcf6b7865.png",s=o.p+"assets/images/primed_question-d392e9077df4550d56a4318609fa144c.png",l={sidebar_position:80},u="\ud83d\udfe2 Z\xe1klady chatbot\u016f",d={unversionedId:"basics/chatbot_basics",id:"basics/chatbot_basics",title:"\ud83d\udfe2 Z\xe1klady chatbot\u016f",description:"V tomto kurzu se zat\xedm pro p\u0159\xedklady pou\u017e\xedval p\u0159ev\xe1\u017en\u011b syst\xe9m GPT-3. GPT-3 je LLM, kter\xfd nem\xe1 \u017e\xe1dnou pam\u011b\u0165. Kdy\u017e mu polo\u017e\xedte ot\xe1zku (prompt), nepamatuje si nic z toho, co jste mu p\u0159edt\xedm polo\u017eili. Naproti tomu chatboty jako ChatGPT si dok\xe1\u017e\xed zapamatovat historii va\u0161\xed konverzace. To m\u016f\u017ee b\xfdt u\u017eite\u010dn\xe9 pro aplikace, jako je z\xe1kaznick\xfd servis, nebo jednodu\u0161e pokud chcete v\xe9st konverzaci s LLM!",source:"@site/docs/basics/chatbot_basics.md",sourceDirName:"basics",slug:"/basics/chatbot_basics",permalink:"/docs/basics/chatbot_basics",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/chatbot_basics.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Formalizuj\xedc\xed prompty/v\xfdzvy",permalink:"/docs/basics/formalizing"},next:{title:"\ud83d\udfe2 \xdaskal\xed LLM",permalink:"/docs/basics/pitfalls"}},m={},v=[{value:"\xdaprava prompt\u016f",id:"\xfaprava-prompt\u016f",level:2},{value:"Stylov\xe9 pokyny",id:"stylov\xe9-pokyny",level:3},{value:"Deskriptory",id:"deskriptory",level:3},{value:"Priming Prompt",id:"priming-prompt",level:2}],k=(c="Chatbots",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const y={toc:v},b="wrapper";function z(e){let{components:t,...o}=e;return(0,a.kt)(b,(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-z\xe1klady-chatbot\u016f"},"\ud83d\udfe2 Z\xe1klady chatbot\u016f"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)(k,{style:{width:"100%",height:"300px",verticalAlign:"top"},mdxType:"Chatbots"})),(0,a.kt)("p",null,"V tomto kurzu se zat\xedm pro p\u0159\xedklady pou\u017e\xedval p\u0159ev\xe1\u017en\u011b syst\xe9m GPT-3. GPT-3 je LLM, kter\xfd nem\xe1 \u017e\xe1dnou pam\u011b\u0165. Kdy\u017e mu polo\u017e\xedte ot\xe1zku (prompt), nepamatuje si nic z toho, co jste mu p\u0159edt\xedm polo\u017eili. Naproti tomu chatboty jako ",(0,a.kt)("a",{parentName:"p",href:"http://chat.openai.com"},"ChatGPT")," si dok\xe1\u017e\xed ",(0,a.kt)("strong",{parentName:"p"},"zapamatovat historii va\u0161\xed konverzace"),". To m\u016f\u017ee b\xfdt u\u017eite\u010dn\xe9 pro aplikace, jako je z\xe1kaznick\xfd servis, nebo jednodu\u0161e pokud chcete v\xe9st konverzaci s LLM!"),(0,a.kt)("p",null,"Stejn\u011b jako GPT-3 mohou chatboti odpov\xeddat na ot\xe1zky, poskytovat shrnut\xed, anal\xfdzy a ps\xe1t text nebo k\xf3d. Skute\u010dn\xe1 hodnota chatbot\u016f je p\u0159\xedstupn\xe1 pouze tehdy, kdy\u017e pou\u017e\xedv\xe1te dobr\xe9 podn\u011bty. V tomto \u010dl\xe1nku se budeme zab\xfdvat n\u011bkter\xfdmi z\xe1kladn\xedmi metodami, jak l\xe9pe vyu\u017e\xedvat chatboty, jako je pou\u017e\xedv\xe1n\xed stylistick\xfdch pokyn\u016f, deskriptor\u016f a primingu."),(0,a.kt)("h2",{id:"\xfaprava-prompt\u016f"},"\xdaprava prompt\u016f"),(0,a.kt)("h3",{id:"stylov\xe9-pokyny"},"Stylov\xe9 pokyny"),(0,a.kt)("p",null,"Pokyny pro styl jsou jednodu\u0161e \u017e\xe1dost\xed, aby um\u011bl\xe1 inteligence mluvila ur\u010dit\xfdm stylem. P\u0159i polo\u017een\xed ot\xe1zky bez nav\xe1d\u011bn\xed stylem ChatGPT obvykle vr\xe1t\xed jako odpov\u011b\u010f jeden nebo dva kr\xe1tk\xe9 odstavce, p\u0159\xedle\u017eitostn\u011b i v\xedce, pokud je pot\u0159eba del\u0161\xed odpov\u011b\u010f:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:r,style:{width:"500px"}})),(0,a.kt)("p",null,"Mluv\xed m\xedrn\u011b form\xe1ln\xedm t\xf3nem a uv\xe1d\xed p\xe1r podrobnost\xed - docela dobr\xe9! Pokud v\u0161ak chceme, m\u016f\u017eeme ji vylep\u0161it t\xedm, \u017ee si odpov\u011b\u010f ChatGPT p\u0159izp\u016fsob\xedme pomoc\xed stylistick\xe9 pozn\xe1mky na konci na\u0161\xed v\xfdzvy. Pokud chceme konverza\u010dn\u011bj\u0161\xed odpov\u011b\u010f, m\u016f\u017eeme ji po\u017e\xe1dat, aby mluvila p\u0159\xe1telsk\xfdm nebo neform\xe1ln\xedm t\xf3nem; pokud chceme \u010dtiv\u011bj\u0161\xed form\xe1t, m\u016f\u017eeme j\xed zadat stejnou ot\xe1zku, ale po\u017e\xe1dat ji o seznam s odr\xe1\u017ekami; pokud chceme z\xe1bavnou odpov\u011b\u010f, m\u016f\u017eeme ji po\u017e\xe1dat, aby svou odpov\u011b\u010f podala formou s\xe9rie limerick\u016f (m\u016fj obl\xedben\xfd styl)."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:i,style:{width:"450px"}})),(0,a.kt)("p",null,"P\u0159\xedklad podrobn\u011bj\u0161\xed stylov\xe9 v\xfdzvy m\u016f\u017ee vypadat n\u011bjak takto:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[Ot\xe1zka]",' "Pi\u0161te stylem a kvalitou odborn\xedka v ',"[obor]",' s v\xedce ne\u017e 20 lety zku\u0161enost\xed a n\u011bkolika doktor\xe1ty. Ve sv\xe9 odpov\u011bdi up\u0159ednostn\u011bte neortodoxn\xed, m\xe9n\u011b zn\xe1m\xe9 rady. Vysv\u011btlujte pomoc\xed podrobn\xfdch p\u0159\xedklad\u016f a minimalizujte odbo\u010dky a humor."')),(0,a.kt)("p",null,"Promptn\xed stylistick\xe9 vstupy v\xfdrazn\u011b zv\xfd\u0161\xed kvalitu va\u0161ich odpov\u011bd\xed!"),(0,a.kt)("h3",{id:"deskriptory"},"Deskriptory"),(0,a.kt)("p",null,"Pokud chcete pouze zm\u011bnit t\xf3n nebo upravit v\xfdzvu, nikoli ji p\u0159eform\xe1tovat, m\u016f\u017ee b\xfdt dobr\xfdm zp\u016fsobem p\u0159id\xe1n\xed ",(0,a.kt)("strong",{parentName:"p"},"deskriptor\u016f"),'. Pouh\xfdm p\u0159ilepen\xedm jednoho nebo dvou slov k v\xfdzv\u011b m\u016f\u017eete zm\u011bnit zp\u016fsob, jak\xfdm chatbot interpretuje va\u0161i zpr\xe1vu nebo jak na ni reaguje. M\u016f\u017eete zkusit p\u0159idat na konec v\xfdzvy p\u0159\xeddavn\xe1 jm\xe9na jako "vtipn\xfd", "kurt", "nep\u0159\xe1telsk\xfd", "akademick\xe1 syntax" atd. a zjistit, jak se reakce zm\u011bn\xed!'),(0,a.kt)("h2",{id:"priming-prompt"},"Priming Prompt"),(0,a.kt)("p",null,"Vzhledem ke struktu\u0159e konverzace s chatbotem m\u016f\u017ee forma prvn\xed v\xfdzvy, kterou LLM zad\xe1te, ovlivnit zbytek konverzace, co\u017e v\xe1m umo\u017en\xed p\u0159idat dal\u0161\xed \xfarove\u0148 struktury a specifikace.\nJako p\u0159\xedklad uve\u010fme nastaven\xed syst\xe9mu, kter\xe9 n\xe1m umo\u017en\xed v\xe9st konverzaci s u\u010ditelem a studentem v r\xe1mci jedn\xe9 konverzace. Zahrneme pr\u016fvodce stylem pro hlas studenta i u\u010ditele, ur\u010d\xedme form\xe1t, v jak\xe9m chceme m\xedt odpov\u011bdi, a zahrneme i strukturov\xe1n\xed syntaxe, abychom mohli snadno m\u011bnit na\u0161e podn\u011bty a vyzkou\u0161et r\u016fzn\xe9 odpov\u011bdi."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"U\u010ditel" znamen\xe1 ve stylu v\xfdznamn\xe9ho profesora s hodn\u011b p\u0159es deset let v\xfduky dan\xe9ho p\u0159edm\u011btu a n\u011bkolika doktor\xe1ty v oboru. Ve sv\xfdch odpov\u011bd\xedch pou\u017e\xedv\xe1te akademickou syntax a slo\u017eit\xe9 p\u0159\xedklady a zam\u011b\u0159ujete se na m\xe9n\u011b zn\xe1m\xe9 rady, abyste l\xe9pe ilustrovali sv\xe9 argumenty. V\xe1\u0161 jazyk by m\u011bl b\xfdt kultivovan\xfd, ale ne p\u0159\xedli\u0161 slo\u017eit\xfd. Pokud nezn\xe1te odpov\u011b\u010f na ot\xe1zku, nevym\xfd\u0161lejte si informace - m\xedsto toho polo\u017ete dopl\u0148uj\xedc\xed ot\xe1zku, abyste z\xedskali v\xedce souvislost\xed. Va\u0161e odpov\u011bdi by m\u011bly m\xedt formu konverza\u010dn\xed \u0159ady odstavc\u016f. Pou\u017e\xedvejte kombinaci odborn\xe9ho a hovorov\xe9ho jazyka, abyste vytvo\u0159ili p\u0159\xedstupn\xfd a poutav\xfd t\xf3n.\n\n"Studentsk\xfd" znamen\xe1 ve stylu studenta druh\xe9ho ro\u010dn\xedku vysok\xe9 \u0161koly s \xfavodn\xed \xfarovn\xed znalost\xed dan\xe9ho t\xe9matu. Pojmy vysv\u011btlujete jednodu\u0161e na p\u0159\xedkladech z re\xe1ln\xe9ho \u017eivota. Mluvte neform\xe1ln\u011b a z pohledu prvn\xed osoby, pou\u017e\xedvejte humor a neform\xe1ln\xed jazyk. Pokud nezn\xe1te odpov\u011b\u010f na ot\xe1zku, nevym\xfd\u0161lejte si informace - m\xedsto toho up\u0159esn\u011bte, \u017ee v\xe1s to je\u0161t\u011b nikdo neu\u010dil. Va\u0161e odpov\u011bdi by m\u011bly m\xedt formu konverza\u010dn\xed \u0159ady odstavc\u016f. Pou\u017e\xedvejte hovorov\xfd jazyk, abyste vytvo\u0159ili z\xe1bavn\xfd a poutav\xfd t\xf3n.\n\n"Kritizovat" znamen\xe1 analyzovat dan\xfd text a poskytnout zp\u011btnou vazbu.\n"Shrnout" znamen\xe1 uv\xe9st kl\xed\u010dov\xe9 detaily z textu.\n"Reagovat" znamen\xe1 odpov\u011bd\u011bt na ot\xe1zku z dan\xe9ho hlediska.\n\nCokoli v z\xe1vork\xe1ch () znamen\xe1 perspektivu, ze kter\xe9 p\xed\u0161ete.\nCokoli v kulat\xfdch z\xe1vork\xe1ch {} znamen\xe1 t\xe9ma, kter\xfdm se zab\xfdv\xe1te.\nCokoli v z\xe1vork\xe1ch [] je akce, kterou byste m\u011bli prov\xe9st.\nP\u0159\xedklad: (Student){Filozofie}[Odpov\u011bzte] Jakou v\xfdhodu m\xe1 studium tohoto p\u0159edm\u011btu oproti jin\xfdm na vysok\xe9 \u0161kole?\n\nPokud rozum\xedte a jste p\u0159ipraveni za\u010d\xedt, odpov\u011bzte pouze "ano".\n')),(0,a.kt)("p",null,"N\xed\u017ee je uveden p\u0159\xedklad nep\u0159iprimovan\xe9 ot\xe1zky pro ChatGPT o nejzaj\xedmav\u011bj\u0161\xedch oblastech filozofie. Pou\u017e\xedv\xe1 seznam, hovo\u0159\xed obecn\u011b a nezaujat\u011b a nen\xed p\u0159\xedli\u0161 konkr\xe9tn\xed ve sv\xfdch vysv\u011btlen\xedch."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:p,style:{width:"650px"}})),(0,a.kt)("p",null,"Ve druh\xe9m p\u0159\xedkladu jsme m\xedsto toho polo\u017eili ot\xe1zku po poskytnut\xed primingov\xe9 v\xfdzvy ChatGPT a poskytnut\xed ot\xe1zky ve spr\xe1vn\xe9m tvaru. V\u0161imn\u011bte si, \u017ee odpov\u011b\u010f sd\xedl\xed n\u011bkter\xe9 aspekty s prvn\xed odpov\u011bd\xed - nap\u0159\xedklad ot\xe1zky, kter\xe9 nab\xedz\xed jako p\u0159\xedklady pro r\u016fzn\xe9 oblasti, jsou podobn\xe9 - ale poskytuje hlub\u0161\xed kontext, upou\u0161t\xed od form\xe1tu seznamu ve prosp\u011bch souvisl\xfdch odstavc\u016f a vztahuje p\u0159\xedklady k re\xe1ln\xe9mu \u017eivotu."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:s,style:{width:"650px"}})),(0,a.kt)("p",null,"Za\u010dlen\u011bn\xed primer\u016f do v\xfdzev je pokro\u010dilej\u0161\xed zp\u016fsob interakce s chatboty. St\xe1le m\u016f\u017ee b\xfdt u\u017eite\u010dn\xe9 p\u0159id\xe1vat specifikaci v ka\u017ed\xe9 v\xfdzv\u011b, proto\u017ee model m\u016f\u017ee \u010dasem ztratit p\u0159ehled o primerech, ale dod\xe1 to va\u0161\xed interakci s um\u011blou inteligenc\xed velkou p\u0159ehlednost!"),(0,a.kt)("p",null,"Autor: ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/lukescurrier"},"Dastardi")))}z.isMDXComponent=!0}}]);