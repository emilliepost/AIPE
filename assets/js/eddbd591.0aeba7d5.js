"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),c=r,d=m["".concat(s,".").concat(c)]||m[c]||k[c]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},i="\ud83d\udd34 Interpretovateln\xe9 m\u011bkk\xe9 prompty/v\xfdzvy",p={unversionedId:"trainable/discretized",id:"trainable/discretized",title:"\ud83d\udd34 Interpretovateln\xe9 m\u011bkk\xe9 prompty/v\xfdzvy",description:"M\u011bkk\xe9 prompty jsou posloupnost\xed vektor\u016f, kter\xe9",source:"@site/docs/trainable/discretized.md",sourceDirName:"trainable",slug:"/trainable/discretized",permalink:"/docs/trainable/discretized",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/discretized.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 M\u011bkk\xe9 prompty/v\xfdzvy",permalink:"/docs/trainable/soft_prompting"},next:{title:"\ud83c\udfb2 R\u016fzn\xe9",permalink:"/docs/category/-r\u016fzn\xe9"}},s={},l=[{value:"Hypot\xe9za necestovosti",id:"hypot\xe9za-necestovosti",level:2},{value:"Rizika interpretovatelnosti",id:"rizika-interpretovatelnosti",level:2}],u={toc:l},m="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-interpretovateln\xe9-m\u011bkk\xe9-promptyv\xfdzvy"},"\ud83d\udd34 Interpretovateln\xe9 m\u011bkk\xe9 prompty/v\xfdzvy"),(0,r.kt)("p",null,"M\u011bkk\xe9 prompty jsou posloupnost\xed vektor\u016f, kter\xe9\nneodpov\xeddaj\xed \u017e\xe1dn\xfdm skute\u010dn\xfdm token\u016fm ve slovn\xedku. To zt\u011b\u017euje\ninterpretovat v\xfdzvu. P\u0159esto se o to m\u016f\u017eeme pokusit\nmapov\xe1n\xedm vektor\u016f na nejbli\u017e\u0161\xed tokeny ve slovn\xedku. Prom\xedtnut\xed\nm\u011bkk\xe9 podn\u011bty jsou \u010dasto zcestn\xe9; mohou \u0159e\u0161it\n\xfalohy dob\u0159e, ale prom\xedtaj\xed se na libovoln\xe9 tokeny ve slovn\xedku",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,"Pokud nap\u0159\xedklad tr\xe9nujeme na matematick\xfdch ot\xe1zk\xe1ch typu GSM8K",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),",\nm\u016f\u017eeme za\u010d\xedt v\xfdzvou ",(0,r.kt)("inlineCode",{parentName:"p"},"Jste matematik. Vy\u0159e\u0161te tuto ot\xe1zku:"),".\nPokud na n\xed provedeme lad\u011bn\xed prompt\u016f a pak ji prom\xedtneme zp\u011bt do prostoru token\u016f, mohli bychom\nz\u016fstat n\u011bco nesmysln\xe9ho jako ",(0,r.kt)("inlineCode",{parentName:"p"},"Autobus je autobus. Ud\u011blejte v\u011bc zde:"),". \u010casto je to\n\u017ee m\u011bkk\xe1 v\xfdzva, kter\xe1 se mapuje na tuto nesmyslnou v\xfdzvu, m\u016f\u017ee poskytnout lep\u0161\xed v\xfdkon v \xfaloze!"),(0,r.kt)("h2",{id:"hypot\xe9za-necestovosti"},"Hypot\xe9za necestovosti"),(0,r.kt)("p",null,"Khashabi a dal\u0161\xed",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," navrhuj\xed tuto neuv\u011b\u0159itelnou hypot\xe9zu. \u0158\xedk\xe1\n\u017ee p\u0159i zad\xe1n\xed \xfalohy existuje pro jakoukoli diskr\xe9tn\xed c\xedlovou v\xfdzvu\nspojit\xe1 v\xfdzva, kter\xe1 se do n\xed prom\xedt\xe1, a p\u0159itom v \xfaloze dob\u0159e funguje."),(0,r.kt)("p",null,"To znamen\xe1, \u017ee p\u0159i zad\xe1n\xed 1000 r\u016fzn\xfdch \xfaloh existuje 1000 r\u016fzn\xfdch\nv\xfdkonn\xfdch m\u011bkk\xfdch podn\u011bt\u016f (pro ka\u017ed\xfd \xfakol jeden), kter\xe9 se vztahuj\xed ke stejn\xe9mu diskr\xe9tn\xedmu podn\u011btu."),(0,r.kt)("h2",{id:"rizika-interpretovatelnosti"},"Rizika interpretovatelnosti"),(0,r.kt)("p",null,"Pomoc\xed hypot\xe9zy sm\u011brodatnosti upozor\u0148uj\xed na \u0159adu rizik, kter\xe1 vznikaj\xed\np\u0159i interpretaci m\u011bkk\xfdch v\xfdzev. Konkr\xe9tn\u011b m\u016f\u017ee b\xfdt m\u011bkk\xe1 v\xfdzva prom\xedtnuta do\ndiskr\xe9tn\xed v\xfdzvu, kter\xe1 poskytuje zav\xe1d\u011bj\xedc\xed z\xe1m\u011br."),(0,r.kt)("p",null,"Uva\u017eujme m\u011bkkou v\xfdzvu k hodnocen\xed \u017eivotopis\u016f. Kdy\u017e se prom\xedtne do prostoru token\u016f, m\u016f\u017ee se st\xe1t, \u017ee\n",(0,r.kt)("inlineCode",{parentName:"p"},"Vy vedouc\xed n\xe1boru. Se\u0159a\u010fte dobr\xe9 \u017eivotopisy:"),". To se zd\xe1 b\xfdt slu\u0161n\xe9, mo\u017en\xe1 trochu nedostate\u010dn\xe9\ngramaticky. Nicm\xe9n\u011b token ",(0,r.kt)("inlineCode",{parentName:"p"},"dobr\xfd")," by mohl m\xedt podobnou projekci jako token pro ",(0,r.kt)("inlineCode",{parentName:"p"},"b\xedl\xfd")," a tam\nm\u016f\u017ee v t\xe9to v\xfdzv\u011b existovat implicitn\xed p\u0159edpojatost. Pou\u017eit\xed trochu jin\xe9 metody projekce,\nbychom mohli skon\u010dit u ",(0,r.kt)("inlineCode",{parentName:"p"},"Vy vedouc\xed n\xe1boru. Se\u0159a\u010fte b\xedl\xe9 \u017eivotopisy:"),". To je samoz\u0159ejm\u011b docela\nodli\u0161n\xe9 a mohlo by to m\xedt v\xfdznamn\xe9 d\u016fsledky."),(0,r.kt)("p",null,"Podobn\u011b jako p\u0159i interpretaci b\u011b\u017en\xe9 diskr\xe9tn\xed v\xfdzvy bychom m\u011bli b\xfdt extr\xe9mn\u011b\nuv\u011bdomit si p\u0159edsudky, kter\xe9 by mohly b\xfdt v dotazu p\u0159\xedtomny. Mus\xedme b\xfdt obzvl\xe1\u0161t\u011b\nopatrn\xed u m\u011bkk\xfdch v\xfdzev, proto\u017ee jejich interpretace je obt\xed\u017en\u011bj\u0161\xed."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);