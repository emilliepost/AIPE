"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1068],{90842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>r});var o=t(87462),a=(t(67294),t(3905));const s=t.p+"assets/images/self_consistency-8bc2facea3d45222d85d4d1c352bfb7d.png";var i=t(39145);const l={sidebar_position:5},d="\ud83d\udfe1 Sob\u011bsta\u010dnost",p={unversionedId:"intermediate/self_consistency",id:"intermediate/self_consistency",title:"\ud83d\udfe1 Sob\u011bsta\u010dnost",description:"Self-consistency(@wang2022selfconsistency) neboli Sob\u011bsta\u010dnost je p\u0159\xedstup, kter\xfd se jednodu\u0161e zept\xe1 modelu na stejnou v\xfdzvu v\xedcekr\xe1t a za kone\u010dnou odpov\u011b\u010f pova\u017euje v\u011bt\u0161inov\xfd v\xfdsledek. Navazuje na %%CoT|CoT prompting%% a je v\xfdkonn\u011bj\u0161\xed, pokud se pou\u017e\xedv\xe1 ve spojen\xed s n\xedm.",source:"@site/docs/intermediate/self_consistency.md",sourceDirName:"intermediate",slug:"/intermediate/self_consistency",permalink:"/docs/intermediate/self_consistency",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/self_consistency.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 My\u0161lenkov\xfd \u0159et\u011bzec s nulov\xfdm po\u010dtem v\xfdst\u0159el\u016f",permalink:"/docs/intermediate/zero_shot_cot"},next:{title:"\ud83d\udfe1 Generovan\xe9 znalosti",permalink:"/docs/intermediate/generated_knowledge"}},k={},r=[{value:"P\u0159\xedklad",id:"p\u0159\xedklad",level:2}],m={toc:r},v="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(v,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-sob\u011bsta\u010dnost"},"\ud83d\udfe1 Sob\u011bsta\u010dnost"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:s,style:{width:"500px"}})),(0,a.kt)("p",null,"Self-consistency",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," neboli Sob\u011bsta\u010dnost je p\u0159\xedstup, kter\xfd se jednodu\u0161e zept\xe1 modelu na stejnou v\xfdzvu v\xedcekr\xe1t a za kone\u010dnou odpov\u011b\u010f pova\u017euje v\u011bt\u0161inov\xfd v\xfdsledek. Navazuje na ",(0,a.kt)("a",{parentName:"p",id:"CoT prompting_2_154_1684777144677","data-tooltip-html":"Hlavn\xed my\u0161lenka CoT spo\u010d\xedv\xe1 v tom, \u017ee t\xedm, \u017ee LLM uk\xe1\u017ee n\u011bkolik exempl\xe1\u0159\u016f sn\xedmk\u016f, kde je vysv\u011btlen proces uva\u017eov\xe1n\xed v exempl\xe1\u0159\xedch, LLM tak\xe9 uk\xe1\u017ee proces uva\u017eov\xe1n\xed p\u0159i odpov\xedd\xe1n\xed na v\xfdzvu.","data-tooltip-place":"top"},"CoT"),(0,a.kt)(i.u,{anchorId:"CoT prompting_2_154_1684777144677",clickable:!0,mdxType:"Tooltip"})," a je v\xfdkonn\u011bj\u0161\xed, pokud se pou\u017e\xedv\xe1 ve spojen\xed s n\xedm."),(0,a.kt)("h2",{id:"p\u0159\xedklad"},"P\u0159\xedklad"),(0,a.kt)("p",null,"Uva\u017eujme jednoduch\xfd p\u0159\xedklad anal\xfdzy e-mail\u016f. P\u0159edpokl\xe1dejme, \u017ee jste softwarov\xe1 spole\u010dnost a dost\xe1v\xe1te stovky e-mail\u016f denn\u011b. Chcete pou\u017e\xedt model pro klasifikaci e-mail\u016f jako d\u016fle\u017eit\xfdch nebo ned\u016fle\u017eit\xfdch, abyste mohli up\u0159ednostnit ty, kter\xe9 mohou m\xedt z\xe1sadn\xed dopad na va\u0161i firmu."),(0,a.kt)("p",null,"Zde je p\u0159\xedklad e-mailu, kter\xfd m\u016f\u017eete obdr\u017eet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Dobr\xfd den,\n\nVe va\u0161em syst\xe9mu jsem objevil z\xe1va\u017enou bezpe\u010dnostn\xed chybu. A\u010dkoli se nejedn\xe1 o\nsnadn\xe9, je mo\u017en\xe9 z\xedskat p\u0159\xedstup ke v\u0161em dat\u016fm va\u0161ich u\u017eivatel\u016f. V p\u0159\xedloze p\u0159ikl\xe1d\xe1m\nuk\xe1zku konceptu. Pros\xedm, opravte tento probl\xe9m co nejd\u0159\xedve.\n\nS pozdravem,\n\nDonny\n")),(0,a.kt)("p",null,"Poj\u010fme to d\xe1t do v\xfdzvy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Dobr\xfd den,\n\nObjevil jsem ve va\u0161em syst\xe9mu z\xe1va\u017enou bezpe\u010dnostn\xed chybu. A\u010dkoli to nen\xed\nsnadn\xe9, je mo\u017en\xe9 z\xedskat p\u0159\xedstup ke v\u0161em dat\u016fm va\u0161ich u\u017eivatel\u016f. V p\u0159\xedloze p\u0159ikl\xe1d\xe1m\nuk\xe1zku konceptu. Pros\xedm, opravte tento probl\xe9m co nejd\u0159\xedve.\n\nS pozdravem,\n\nDonny\n\nZa\u0159a\u010fte v\xfd\u0161e uveden\xfd e-mail do kategorie D\u016eLE\u017dIT\xc9 nebo NED\u016eLE\u017dIT\xc9, proto\u017ee se t\xfdk\xe1 softwarov\xe9 spole\u010dnosti. P\u0159em\xfd\u0161lejme krok za krokem.\n")),(0,a.kt)("p",null,"Nyn\xed pou\u017eijeme v\xfd\u0161e uvedenou v\xfdzvu k vytvo\u0159en\xed n\u011bkolika samostatn\xfdch dokon\u010den\xed/\u0159et\u011bzc\u016f my\u0161lenek. Zde je n\u011bkolik p\u0159\xedklad\u016f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nOdes\xedlatel objevil v syst\xe9mu z\xe1va\u017enou bezpe\u010dnostn\xed chybu. \nJe to d\u016fle\u017eit\xe9, proto\u017ee by to mohlo v\xe9st k \xfaniku dat. \nTento e-mail bych klasifikoval jako D\u016eLE\u017dIT\xdd.\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nOdes\xedlatel objevil z\xe1va\u017enou bezpe\u010dnostn\xed chybu v syst\xe9mu, ale neposkytl \u017e\xe1dn\xfd d\u016fkaz konceptu a nen\xed snadn\xe9 ji pou\u017e\xedt. \nTento e-mail bych klasifikoval jako NED\u016eLE\u017dIT\xdd.\n\x3c!-- highlight-end --\x3e\n```\n\n````text\n\x3c!-- highlight-start --\x3e\nOdes\xedlatel je pravd\u011bpodobn\u011b hacker a m\u016f\u017ee m\xedt p\u0159\xedstup do syst\xe9mu. \nTo je d\u016fle\u017eit\xe9, proto\u017ee by to mohlo v\xe9st k \xfaniku dat. \nTento e-mail bych klasifikoval jako D\u016eLE\u017dIT\xdd.\n\x3c!-- highlight-end --\x3e\n```\n\nVytvo\u0159en\xedm mnoha my\u0161lenkov\xfdch \u0159et\u011bzc\u016f a vybr\xe1n\xedm nej\u010dast\u011bji se vyskytuj\xedc\xed odpov\u011bdi (`D\u016eLE\u017dIT\xc9`) m\u016f\u017eeme z GPT-3 z\xedskat konzistentn\u011bj\u0161\xed spr\xe1vnou odpov\u011b\u010f.\n\n## V\xfdsledky\n\nBylo prok\xe1z\xe1no, \u017ee sebekonzistence zlep\u0161uje v\xfdsledky v aritmetick\xfdch \xfaloh\xe1ch, \xfaloh\xe1ch zdrav\xe9ho rozumu a symbolick\xe9ho uva\u017eov\xe1n\xed. Dokonce i v p\u0159\xedpadech, kdy se b\u011b\u017en\xe1 metoda CoT uk\xe1zala jako neefektivn\xed(@ye2022nespolehlivost), sebed\u016fslednost\nst\xe1le dok\xe1zala zlep\u0161it v\xfdsledky.\n\n## Pozn\xe1mky\n\n- Wang et al. se zab\xfdvaj\xed slo\u017eit\u011bj\u0161\xed metodou v\xfdb\u011bru kone\u010dn\xe9 odpov\u011bdi,\nkter\xe1 se zab\xfdv\xe1 pravd\u011bpodobnostmi generovan\xfdmi LLM pro ka\u017ed\xfd my\u0161lenkov\xfd \u0159et\u011bzec. Nicm\xe9n\u011b se\ntuto metodu ve sv\xfdch experimentech nepou\u017e\xedvaj\xed a zd\xe1 se, \u017ee v\u011bt\u0161inov\xe9 hlasov\xe1n\xed se obvykle\nm\xe1 stejn\xfd nebo lep\u0161\xed v\xfdkon.\n")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);