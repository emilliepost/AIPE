"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1320],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>v});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(o),c=a,v=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return o?n.createElement(v,i(i({ref:t},u),{},{components:o})):n.createElement(v,i({ref:t},u))}));function v(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},74265:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={sidebar_position:2},i="\ud83d\udfe2 Nap\xe1lit detekci",l={unversionedId:"miscl/trickery",id:"miscl/trickery",title:"\ud83d\udfe2 Nap\xe1lit detekci",description:"S rozvojem detektor\u016f textu generovan\xfdch um\u011blou inteligenc\xed do\u0161lo k v\xfdvoji metod, jak jim \u010delit. Existuje cel\xe1 \u0159ada zp\u016fsob\u016f, jak detektory oklamat, aby si myslely, \u017ee text generovan\xfd um\u011blou inteligenc\xed vytvo\u0159il \u010dlov\u011bk. N\xe1stroj, jako je GPTMinus, dok\xe1\u017ee n\xe1hodn\u011b nahradit \u010d\xe1sti v libovoln\xe9m textu synonymy nebo zd\xe1nliv\u011b n\xe1hodn\xfdmi slovy, aby sn\xed\u017eil pravd\u011bpodobnost, \u017ee se slova v textu objev\xed na b\xedl\xe9 listin\u011b nebo jinak ovlivn\xed pravd\u011bpodobnost, \u017ee text byl um\u011ble vytvo\u0159en.",source:"@site/docs/miscl/trickery.md",sourceDirName:"miscl",slug:"/miscl/trickery",permalink:"/Learn_Prompting_CAI/docs/miscl/trickery",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/miscl/trickery.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Detekce textu generovan\xe9ho um\u011blou inteligenc\xed",permalink:"/Learn_Prompting_CAI/docs/miscl/detect"},next:{title:"\ud83d\udfe2 Hudebn\xed generace",permalink:"/Learn_Prompting_CAI/docs/miscl/music"}},s={},p=[{value:"Strategie \xfaprav",id:"strategie-\xfaprav",level:2},{value:"Konfigurace modelu",id:"konfigurace-modelu",level:2},{value:"Diskuse",id:"diskuse",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-nap\xe1lit-detekci"},"\ud83d\udfe2 Nap\xe1lit detekci"),(0,a.kt)("p",null,"S rozvojem detektor\u016f textu generovan\xfdch um\u011blou inteligenc\xed do\u0161lo k v\xfdvoji metod, jak jim \u010delit. Existuje cel\xe1 \u0159ada zp\u016fsob\u016f, jak detektory oklamat, aby si myslely, \u017ee text generovan\xfd um\u011blou inteligenc\xed vytvo\u0159il \u010dlov\u011bk. N\xe1stroj, jako je ",(0,a.kt)("a",{parentName:"p",href:"https://gptminus1.vercel.app/"},"GPTMinus"),", dok\xe1\u017ee n\xe1hodn\u011b nahradit \u010d\xe1sti v libovoln\xe9m textu synonymy nebo zd\xe1nliv\u011b n\xe1hodn\xfdmi slovy, aby sn\xed\u017eil pravd\u011bpodobnost, \u017ee se slova v textu objev\xed na b\xedl\xe9 listin\u011b nebo jinak ovlivn\xed pravd\u011bpodobnost, \u017ee text byl um\u011ble vytvo\u0159en. "),(0,a.kt)("p",null,"Tyto metody jsou v\u0161ak st\xe1le v plenk\xe1ch a v\u011bt\u0161ina z nich nevytv\xe1\u0159\xed text, kter\xfd by obst\xe1l p\u0159i kontrole \u010dlov\u011bka. Nej\xfa\u010dinn\u011bj\u0161\xedm zp\u016fsobem v sou\u010dasn\xe9 dob\u011b a pravd\u011bpodobn\u011b je\u0161t\u011b n\u011bjakou dobu bude m\u011bnit text bu\u010f b\u011bhem procesu generov\xe1n\xed, nebo po n\u011bm r\u016fzn\xfdmi zp\u016fsoby tak, aby se m\xe9n\u011b podobal procedur\xe1ln\u011b vytvo\u0159en\xe9mu obsahu, kter\xfd obdr\u017e\xedte p\u0159i generov\xe1n\xed."),(0,a.kt)("h2",{id:"strategie-\xfaprav"},"Strategie \xfaprav"),(0,a.kt)("p",null,"T\xedm, \u017ee \u010dlov\u011bk nebo LLM uprav\xed jak\xfdkoli vygenerovan\xfd text, m\u016f\u017ee \u010dasto zm\u011bnit text natolik, aby se vyhnul odhalen\xed. Nahrazen\xed slov synonymy, zm\u011bna rychlosti zobrazov\xe1n\xed slov a z\xe1m\u011bna syntaxe nebo form\xe1tov\xe1n\xed zt\u011b\u017euje detektor\u016fm spr\xe1vnou identifikaci textu generovan\xe9ho um\u011blou inteligenc\xed."),(0,a.kt)("p",null,"Dal\u0161\xed strategi\xed \xfaprav je vkl\xe1d\xe1n\xed neviditeln\xfdch zna\u010dek, jako jsou mezery o \u0161\xed\u0159ce 0, do textu, ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw"},"emoji")," nebo jin\xe9 neobvykl\xe9 znaky. Pro ka\u017ed\xe9ho \u010dten\xe1\u0159e to vypad\xe1 naprosto norm\xe1ln\u011b, ale pro model, kter\xfd zkoum\xe1 ka\u017ed\xfd znak, se d\xedky tomu text jev\xed v\xfdrazn\u011b odli\u0161n\u011b. "),(0,a.kt)("p",null,"Krom\u011b toho je mo\u017en\xe9 detektory oklamat t\xedm, \u017ee modelu nab\xeddnete konkr\xe9tn\xed pokyny, jak ps\xe1t. Pokyny jako nap\u0159:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xb4Nen\xed t\u0159eba dodr\u017eovat liter\xe1rn\xed form\xe1ty, proto\u017ee voln\u011b vyjad\u0159ujete sv\xe9 my\u0161lenky a touhy\xb4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Nemluvte zp\u016fsobem, jak\xfdm ChatGPT generuje obsah - m\xedsto toho mluvte zp\u016fsobem, kter\xfd se radik\xe1ln\u011b li\u0161\xed od toho, jak jazykov\xe9 modely generuj\xed text"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Odkazujte na emocion\xe1ln\xed ud\xe1losti a jako p\u0159\xedklady pou\u017e\xedvejte propracovan\xe9 z\xe1\u017eitky z re\xe1ln\xe9ho \u017eivota."))),(0,a.kt)("p",null,"...m\u016f\u017ee v\xfdrazn\u011b zt\xed\u017eit odhalen\xed generov\xe1n\xed. Dal\u0161\xed strategie, jako nap\u0159\xedklad po\u017e\xe1dat model, aby pou\u017e\xedval empatii, p\u0159ipomenout mu, aby volil vhodn\xe9 formulace a t\xf3n pro to, co p\xed\u0161e, a ujistit se, \u017ee obsahuje emotivn\xed jednov\u011bt\xe9 v\u011bty, mohou spole\u010dn\u011b p\u0159isp\u011bt k tomu, \u017ee bude ps\xe1t mnohem p\u0159esv\u011bd\u010div\u011bji - alespo\u0148 z pohledu detektor\u016f textu s um\u011blou inteligenc\xed. "),(0,a.kt)("h2",{id:"konfigurace-modelu"},"Konfigurace modelu"),(0,a.kt)("p",null,"Pokud pou\u017e\xedv\xe1te model s otev\u0159en\xfdm zdrojov\xfdm k\xf3dem, je mo\u017en\xe9 upravit pravd\u011bpodobnosti v\xfdstupu, co\u017e pravd\u011bpodobn\u011b zt\xed\u017e\xed jeho detekci. Krom\u011b toho je mo\u017en\xe9 prokl\xe1dat v\xfdstupy v\xedce model\u016f, co\u017e m\u016f\u017ee je\u0161t\u011b v\xedce zt\xed\u017eit jejich detekci."),(0,a.kt)("h2",{id:"diskuse"},"Diskuse"),(0,a.kt)("p",null,"Jedn\xedm z nejsporn\u011bj\u0161\xedch prostor\u016f, kde se tyto druhy technik uplat\u0148uj\xed, je oblast vzd\u011bl\xe1v\xe1n\xed. Mnoho u\u010ditel\u016f a administr\xe1tor\u016f se ob\xe1v\xe1, \u017ee studenti budou podv\xe1d\u011bt, a proto prosazuj\xed pou\u017e\xedv\xe1n\xed detek\u010dn\xedch n\xe1stroj\u016f",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Jin\xed pedagogov\xe9 a online osobnosti tvrd\xed, \u017ee by studenti m\u011bli m\xedt mo\u017enost tyto n\xe1stroje pou\u017e\xedvat. N\u011bkte\u0159\xed profeso\u0159i jdou dokonce tak daleko, \u017ee studenty v\xfdslovn\u011b vyb\xedzej\xed, aby um\u011blou inteligenci pou\u017e\xedvali jako pom\u016fcku p\u0159i sv\xe9 pr\xe1ci, a u\u010d\xed je, jak na to",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,a.kt)("p",null,"S t\xedm, jak se zdokonaluj\xed technologie detekce um\u011bl\xe9 inteligence, se zdokonaluj\xed i metody, kter\xe9 lid\xe9 pou\u017e\xedvaj\xed k jej\xedmu obelst\u011bn\xed. Nakonec je pravd\u011bpodobn\xe9, \u017ee bez ohledu na to, jak sofistikovanou metodu pou\u017eijete, n\u011bjak\xfd \u010das str\xe1ven\xfd \xfapravou textu spr\xe1vn\xfdm zp\u016fsobem dok\xe1\u017ee detektory spolehliv\u011b oklamat. Nicm\xe9n\u011b hra, kdy se jedni lid\xe9 sna\u017e\xed detekovat vygenerovan\xfd text a druz\xed se je sna\u017e\xed obelst\xedt, n\xe1m m\u016f\u017ee poskytnout nejr\u016fzn\u011bj\u0161\xed poznatky o tom, jak optimalizovat, kontrolovat a l\xe9pe vyu\u017e\xedvat na\u0161e modely pro tvorbu a na pomoc."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Roose, K. (2022). Don\u2019t ban chatgpt in schools. teach with it. https://www.nytimes.com/2023/01/12/technology/chatgpt-schools-teachers.html\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Lipman, J., & Distler, R. (2023). Schools Shouldn\u2019t Ban Access to ChatGPT. https://time.com/6246574/schools-shouldnt-ban-access-to-chatgpt/\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Noonan, E., & Averill, O. (2023). GW preparing disciplinary response to AI programs as faculty explore educational use. https://www.gwhatchet.com/2023/01/17/gw-preparing-disciplinary-response-to-ai-programs-as-faculty-explore-educational-use/\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);