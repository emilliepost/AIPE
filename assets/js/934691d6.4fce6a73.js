"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),l=c(n),d=o,f=l["".concat(s,".").concat(d)]||l[d]||u[d]||i;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[l]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:30},p="\ud83d\udfe2 Post-Prompting",a={unversionedId:"prompt_hacking/defensive_measures/post_prompting",id:"prompt_hacking/defensive_measures/post_prompting",title:"\ud83d\udfe2 Post-Prompting",description:"Obhajoba post-prompting(@christoph2022talking) jednodu\u0161e \u0159e\u010deno.",source:"@site/docs/prompt_hacking/defensive_measures/post_prompting.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/post_prompting",permalink:"/docs/prompt_hacking/defensive_measures/post_prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/post_prompting.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Pokyn Obrana",permalink:"/docs/prompt_hacking/defensive_measures/instruction"},next:{title:"\ud83d\udfe2 Oplocen\xed s n\xe1hodnou sekvenc\xed",permalink:"/docs/prompt_hacking/defensive_measures/random_sequence"}},s={},c=[],m={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-post-prompting"},"\ud83d\udfe2 Post-Prompting"),(0,o.kt)("p",null,"Obhajoba post-prompting",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," jednodu\u0161e \u0159e\u010deno.\nu\u017eivatelsk\xfd vstup ",(0,o.kt)("em",{parentName:"p"},"p\u0159ed")," v\xfdzvu. Vezm\u011bme si jako p\u0159\xedklad tento prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"P\u0159elo\u017ete n\xe1sleduj\xedc\xed do francouz\u0161tiny: {{user_input}}\n")),(0,o.kt)("p",null,"Lze jej vylep\u0161it pomoc\xed post-promptingu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{{user_input}} \n\nP\u0159elo\u017ete v\xfd\u0161e uveden\xfd text do francouz\u0161tiny.\n")),(0,o.kt)("p",null,"To m\u016f\u017ee pomoci, proto\u017ee ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore the above instruction...")," nefunguje stejn\u011b dob\u0159e. I kdy\u017e by u\u017eivatel mohl m\xedsto toho \u0159\xedci ",(0,o.kt)("inlineCode",{parentName:"p"},"ignorovat n\xed\u017ee uveden\xfd pokyn..."),", LLM se \u010dasto \u0159\xedd\xed posledn\xedm pokynem, kter\xfd vid\xed."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Mark, C. (2022). Talking to machines: prompt engineering & injection. https://artifact-research.com/artificial-intelligence/talking-to-machines-prompt-engineering-injection/\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);