"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:50},i="\ud83d\udfe2 Sendvi\u010dov\xe1 obrana",s={unversionedId:"prompt_hacking/defensive_measures/sandwich_defense",id:"prompt_hacking/defensive_measures/sandwich_defense",title:"\ud83d\udfe2 Sendvi\u010dov\xe1 obrana",description:"Sendvi\u010dov\xe1 obrana zahrnuje vlo\u017een\xed u\u017eivatelsk\xe9ho vstupu mezi",source:"@site/docs/prompt_hacking/defensive_measures/sandwich_defense.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/sandwich_defense",permalink:"/Learn_Prompting_CAI/docs/prompt_hacking/defensive_measures/sandwich_defense",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/sandwich_defense.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Oplocen\xed s n\xe1hodnou sekvenc\xed",permalink:"/Learn_Prompting_CAI/docs/prompt_hacking/defensive_measures/random_sequence"},next:{title:"\ud83d\udfe2 XML Tagging",permalink:"/Learn_Prompting_CAI/docs/prompt_hacking/defensive_measures/xml_tagging"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-sendvi\u010dov\xe1-obrana"},"\ud83d\udfe2 Sendvi\u010dov\xe1 obrana"),(0,a.kt)("p",null,"Sendvi\u010dov\xe1 obrana",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," zahrnuje vlo\u017een\xed u\u017eivatelsk\xe9ho vstupu mezi\ndv\u011bma v\xfdzvami. Jako p\u0159\xedklad si vezm\u011bme n\xe1sleduj\xedc\xed v\xfdzvu:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"P\u0159elo\u017ete n\xe1sleduj\xedc\xed do francouz\u0161tiny: {{u\u017eivatelsk\xfd_vstup}}\n")),(0,a.kt)("p",null,"Lze ji vylep\u0161it pomoc\xed sendvi\u010dov\xe9 obrany:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"P\u0159elo\u017ete n\xe1sleduj\xedc\xed do francouz\u0161tiny:\n\n{{user_input}}\n\nNezapome\u0148te, \u017ee v\xfd\u0161e uveden\xfd text p\u0159ekl\xe1d\xe1te do francouz\u0161tiny.\n")),(0,a.kt)("p",null,"Tato obrana by m\u011bla b\xfdt bezpe\u010dn\u011bj\u0161\xed ne\u017e post-prompting, ale je zn\xe1mo, \u017ee je zraniteln\xe1 definovan\xfdm slovn\xedkov\xfdm \xfatokem. V\xedce informac\xed naleznete v dokumentu ",(0,a.kt)("a",{parentName:"p",href:"/docs/prompt_hacking/offensive_measures/defined_dictionary"},"defined dictionary attack"),"."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"V sou\u010dasn\xe9 dob\u011b p\u0159ipisujeme objev t\xe9to techniky ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/altryne?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"},"Altryne"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);