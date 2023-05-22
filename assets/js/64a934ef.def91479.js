"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1},i="\ud83d\udfe2 Detekce textu generovan\xe9ho um\u011blou inteligenc\xed",l={unversionedId:"miscl/detect",id:"miscl/detect",title:"\ud83d\udfe2 Detekce textu generovan\xe9ho um\u011blou inteligenc\xed",description:"Detekce textu generovan\xe9ho um\u011blou inteligenc\xed je pro v\xfdzkumn\xedky a pedagogy v oblasti bezpe\u010dnosti velk\xfdm probl\xe9mem,",source:"@site/docs/miscl/detect.md",sourceDirName:"miscl",slug:"/miscl/detect",permalink:"/Learn_Prompting_CAI/docs/miscl/detect",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/miscl/detect.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfb2 R\u016fzn\xe9",permalink:"/Learn_Prompting_CAI/docs/category/-r\u016fzn\xe9"},next:{title:"\ud83d\udfe2 Nap\xe1lit detekci",permalink:"/Learn_Prompting_CAI/docs/miscl/trickery"}},p={},m=[{value:"Klasifik\xe1tor textu OpenAI",id:"klasifik\xe1tor-textu-openai",level:2},{value:"Metoda vodoznaku",id:"metoda-vodoznaku",level:2},{value:"DetectGPT",id:"detectgpt",level:2},{value:"Pozn\xe1mka",id:"pozn\xe1mka",level:2}],u={toc:m},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-detekce-textu-generovan\xe9ho-um\u011blou-inteligenc\xed"},"\ud83d\udfe2 Detekce textu generovan\xe9ho um\u011blou inteligenc\xed"),(0,a.kt)("p",null,"Detekce textu generovan\xe9ho um\u011blou inteligenc\xed je pro v\xfdzkumn\xedky a pedagogy v oblasti bezpe\u010dnosti velk\xfdm probl\xe9mem,\nmimo jin\xe9. N\xe1stroje jako ",(0,a.kt)("a",{parentName:"p",href:"https://gptzero.me"},"GPTZero"),", ",(0,a.kt)("a",{parentName:"p",href:"https://openai-openai-detector.hf.space"},"GPT2 detector")," a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Hello-SimpleAI/chatgpt-comparison-detection"},"bilingvn\xed detektory")," zaznamenaly v\xfdznamn\xfd \xfasp\u011bch,\nLze je v\u0161ak ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/miscl/trickery"},"obelst\xedt"),". "),(0,a.kt)("p",null,"OpenAI a dal\u0161\xed v\xfdzkumn\xedci",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," pracuj\xed na zaveden\xed statistick\xe9ho vodoznaku do jimi generovan\xe9ho textu, ale i ten lze oklamat \xfapravou velk\xfdch \u010d\xe1st\xed textu. "),(0,a.kt)("p",null,"Probl\xe9m detekce textu um\u011blou inteligenc\xed bude pravd\u011bpodobn\u011b z\xe1vodem ve zbrojen\xed, proto\u017ee budou zav\xe1d\u011bny nov\xe9 modely a nov\xe9 metody detekce. Mnoho spole\u010dnost\xed ji\u017e za\u010dalo vytv\xe1\u0159et \u0159e\u0161en\xed, o kter\xfdch tvrd\xed, \u017ee jsou velmi \xfa\u010dinn\xe1, ale je obt\xed\u017en\xe9 to prok\xe1zat, zejm\xe9na proto, \u017ee se modely v pr\u016fb\u011bhu \u010dasu m\u011bn\xed. "),(0,a.kt)("p",null,"Tento \u010dl\xe1nek se bude zab\xfdvat n\u011bkter\xfdmi sou\u010dasn\xfdmi metodami detekce textu generovan\xe9ho um\u011blou inteligenc\xed a v dal\u0161\xedm se budeme v\u011bnovat n\u011bkolika zp\u016fsob\u016fm, kter\xe9 lid\xe9 na\u0161li, aby je oklamali. "),(0,a.kt)("h2",{id:"klasifik\xe1tor-textu-openai"},"Klasifik\xe1tor textu OpenAI"),(0,a.kt)("p",null,"Klasifik\xe1tor ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/ai-text-classifier"},"OpenAI Text Classifier")," je pom\u011brn\u011b dobr\xfd pokus o univerz\xe1ln\xed detektor textu vytvo\u0159en\xe9ho um\u011blou inteligenc\xed.\nNa z\xe1klad\u011b tr\xe9nov\xe1n\xed modelu na velk\xe9m mno\u017estv\xed dat vytvo\u0159en\xfdch um\u011blou inteligenc\xed a lidmi napsan\xfdch text\u016f podobn\xe9 kvality je detektor schopen vypo\u010d\xedtat pravd\u011bpodobnost, \u017ee dan\xfd text byl vytvo\u0159en um\u011blou inteligenc\xed. "),(0,a.kt)("p",null,"M\xe1 \u0159adu omezen\xed - nep\u0159ij\xedm\xe1 \u017e\xe1dn\xe9 p\u0159\xedsp\u011bvky o d\xe9lce pod 1000 slov, text lze snadno upravit, \u010d\xedm\u017e lze naru\u0161it v\xfdpo\u010dty pravd\u011bpodobnosti, a vzhledem k tr\xe9ninkov\xe9 sad\u011b zam\u011b\u0159en\xe9 na profesion\xe1ly m\xe1 v\u011bt\u0161\xed probl\xe9my s texty vytvo\u0159en\xfdmi d\u011btmi nebo neangli\u010dtin\xe1\u0159i. "),(0,a.kt)("p",null,"V sou\u010dasn\xe9 dob\u011b ozna\u010duje lidsk\xfd text jako vytvo\u0159en\xfd um\u011blou inteligenc\xed pouze v 9 % p\u0159\xedpad\u016f a spr\xe1vn\u011b identifikuje text vytvo\u0159en\xfd um\u011blou inteligenc\xed v ~26 % p\u0159\xedpad\u016f. S rostouc\xedm v\xfdkonem a rozsahem modelu se tato \u010d\xedsla budou zlep\u0161ovat, ale m\u016f\u017ee se st\xe1t, \u017ee k adekv\xe1tn\xedmu posouzen\xed, zda je text generov\xe1n, \u010di nikoliv, bude zapot\u0159eb\xed specifi\u010dt\u011bj\u0161\xedch detektor\u016f. "),(0,a.kt)("h2",{id:"metoda-vodoznaku"},"Metoda vodoznaku"),(0,a.kt)("p",null,'Jedna z metod detekce textu generovan\xe9ho um\u011blou inteligenc\xed vy\u017eaduje zaveden\xed statistick\xe9ho vodoznaku p\u0159i generov\xe1n\xed textu. Tyto techniky mohou pou\u017e\xedvat "whitelist" LLM, co\u017e je metoda ur\u010den\xed, zda byl text vygenerov\xe1n konkr\xe9tn\xedm modelem UI. Vodoznak funguje tak, \u017ee se p\u0159ed generov\xe1n\xedm slova vybere n\xe1hodn\xe1 sada "zelen\xfdch" token\u016f a n\xe1sledn\u011b se p\u0159i vzorkov\xe1n\xed m\u011bkce podpo\u0159\xed pou\u017eit\xed vybran\xfdch token\u016f. Tyto v\xe1\u017een\xe9 hodnoty maj\xed minim\xe1ln\xed vliv na kvalitu generov\xe1n\xed, ale lze je algoritmicky detekovat pomoc\xed jin\xe9ho LLM',(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,a.kt)("p",null,"To je zaj\xedmav\xe1 my\u0161lenka, ale vy\u017eaduje, aby tv\u016frci modelu implementovali tento r\xe1mec do sv\xe9ho LLM. Pokud model nem\xe1 vodoznak zabudovan\xfd, tato metoda nebude fungovat. "),(0,a.kt)("h2",{id:"detectgpt"},"DetectGPT"),(0,a.kt)("p",null,"Metoda ",(0,a.kt)("a",{parentName:"p",href:"https://detectgpt.ericmitchell.ai/"},"DetectGPT"),(0,a.kt)("sup",{parentName:"p",id:"fnref-4"},(0,a.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),' dok\xe1\u017ee detekovat text generovan\xfd um\u011blou inteligenc\xed s men\u0161\xedm mno\u017estv\xedm nastaven\xed ne\u017e p\u0159edchoz\xed koncepty. V\xfdzkumn\xedci zjistili, \u017ee generace text\u016f LLM maj\xed tendenci "obsazovat oblasti se z\xe1pornou k\u0159ivost\xed logaritmick\xe9 pravd\u011bpodobnostn\xed funkce modelu". Z tohoto d\u016fvodu je mo\u017en\xe9 vytvo\u0159it syst\xe9m zalo\u017een\xfd na k\u0159ivosti pro ur\u010den\xed, zda byl blok textu generov\xe1n procedur\xe1ln\u011b. '),(0,a.kt)("p",null,"Funguje to tak, \u017ee se vypo\u010d\xedtaj\xed logaritmick\xe9 pravd\u011bpodobnosti z modelu, o kter\xe9m se p\u0159edpokl\xe1d\xe1, \u017ee text vygeneroval, a porovnaj\xed se s n\xe1hodn\xfdmi zm\u011bnami textu z jin\xe9ho, p\u0159edem natr\xe9novan\xe9ho obecn\xe9ho jazykov\xe9ho modelu. T\xedmto zp\u016fsobem je DetectGPT schopen ur\u010dit pravd\u011bpodobnost vygenerov\xe1n\xed \xfaryvku pouze pomoc\xed pravd\u011bpodobnostn\xedch k\u0159ivek!"),(0,a.kt)("h2",{id:"pozn\xe1mka"},"Pozn\xe1mka"),(0,a.kt)("p",null,"Dal\u0161\xed diskusi na t\xe9ma detektor\u016f a toho, jak je lid\xe9 obelh\xe1vaj\xed, najdete v ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/miscl/trickery"},"tomto \u010dl\xe1nku"),"."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Bansal, A., yeh Ping-Chiang, Curry, M., Jain, R., Wigington, C., Manjunatha, V., Dickerson, J. P., & Goldstein, T. (2022). Certified Neural Network Watermarks with Randomized Smoothing.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Gu, C., Huang, C., Zheng, X., Chang, K.-W., & Hsieh, C.-J. (2022). Watermarking Pre-trained Language Models with Backdooring.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Kirchenbauer, J., Geiping, J., Wen, Y., Katz, J., Miers, I., & Goldstein, T. (2023). A Watermark for Large Language Models. https://arxiv.org/abs/2301.10226\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-4"},"Mitchell, E., Lee, Y., Khazatsky, A., Manning, C., & Finn, C. (2023). DetectGPT: Zero-Shot Machine-Generated Text Detection using Probability Curvature. https://doi.org/10.48550/arXiv.2301.11305\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}s.isMDXComponent=!0}}]);