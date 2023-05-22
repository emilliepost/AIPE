---
sidebar_position: 1
---

# 🟢 Úvod

Zjistit nejlepší výzvu k vytvoření dokonalého snímku je obzvlášť náročné.
Výzkum metod, jak toho dosáhnout, není tak rozvinutý jako v případě textových podnětů. Tento
může být způsobeno inherentními problémy při vytváření objektů, které jsou v zásadě subjektivní.
a často chybí dobré metriky přesnosti. Nemusíte se však bát, protože prompty k obrázkům 
komunita(@parsons2022dalleprompt) učinila velké objevy o tom, jak napovídat různým obrazovým modelům(@rombach2021highresolution)(@ramesh2022hierarchical).

Tento průvodce se zabývá základními technikami podněcování obrázků a velmi doporučujeme 
abyste se podívali na skvělé zdroje na konci kapitoly.
Níže navíc uvádíme příklad komplexního procesu vyvolávání obrázků.


## Příklad

Zde projdu příklad, jak jsem vytvořil obrázky pro titulní stránku tohoto kurzu. 
Experimentoval jsem se stylem low poly pro hluboké posilování učení.
projektu neuronového zářivého pole. Styl low poly se mi líbil a chtěl jsem ho použít 
pro obrázky tohoto kurzu. 

Pro obrázky na titulní stránce jsem chtěl astronauta, raketu a počítač.

Na stránkách [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) jsem si prozkoumal, jak vytvářet nízkopolymerové obrázky.
a dalších stránkách, ale nic moc užitečného jsem nenašel.

Rozhodl jsem se prostě začít s DALLE a zadáním `Nízkopolymerová bílá a modrá raketa střílející k Měsíci před řídkou zelenou loukou` a uvidíme, co se stane.

import rockets1 from '@site/docs/assets/rockets_dalle_1.png';
import rockets2 from '@site/docs/assets/rockets_dalle_2.png';
import computer_1 from '@site/docs/assets/computer_dalle_1.png';
import astronaut_1 from '@site/docs/assets/astronaut_dalle_1.png';
import astronaut_2 from '@site/docs/assets/astronaut_sd_1.png';
import rocket_sd_1 from '@site/docs/assets/rocket_sd_1.png';
import rocket_final from '../../static/img/rocket.png';
import laptop_sd_1 from '@site/docs/assets/laptop_sd_1.png';
import gemstone_sd_1 from '@site/docs/assets/gemstone_sd_1.png';
import gemstone_sd_2 from '@site/docs/assets/gemstone_sd_2.png';
import gemstone_sd_3 from '@site/docs/assets/gemstone_sd_3.png';
import focus_final from '../../static/img/computer.png';
import astronaut_final from '../../static/img/astronaut.png';

<div style={{textAlign: 'center'}}>
  <img src={rockets1} style={{width: "750px"}} />
</div>


<div style={{textAlign: 'center'}}>
  <img src={rockets2} style={{width: "750px"}} />
</div>

Myslím, že tyto výsledky byly na první pokus docela slušné; obzvlášť se mi líbily
levá dolní raketa.

Dále jsem chtěl počítač ve stejném stylu: `Nízkopolymerový bílo-modrý počítač sedící na řídké zelené louce`.

<div style={{textAlign: 'center'}}>
  <img src={computer_1} style={{width: "750px"}} />
</div>

Konečně jsem potřeboval astronauta! Zdálo se, že `Nízkopolymerový bílo-modrý astronaut sedící na řídké zelené louce s nízkopolymerovými horami v pozadí` je to pravé.

<div style={{textAlign: 'center'}}>
  <img src={astronaut_1} style={{width: "750px"}} />
</div>

Ten druhý mi přišel slušný.

Teď jsem měl astronauta, raketu a počítač. Byl jsem s nimi spokojený,
tak jsem je umístil na titulní stránku. Po několika dnech a příspěvcích mých přátel jsem
uvědomil, že styl prostě není konzistentní 😔.


Udělal jsem další průzkum na [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) a našel jsem lidi, kteří používají slovo izometrický. Rozhodl jsem se to vyzkoušet a místo DALLE použít Stable Diffusion.
Také jsem si uvědomil, že musím do své výzvy přidat další modifikátory.
aby se styl omezil. Vyzkoušel jsem tuto výzvu:
Svět v nízkém poly s astronautem v bílém obleku a modrým hledím sedícím na řídké zelené louce s horami v nízkém poly v pozadí. Vysoce detailní, izometrický, 4K`.

<div style={{textAlign: 'center'}}>
  <img src={astronaut_2} style={{width: "250px"}} />
</div>

Tyhle nebyly nic moc, tak jsem se rozhodl začít raději s raketou.

`Svět v nízkém rozlišení s bílou a modrou raketou, která startuje z řídké zelené louky s horami v nízkém rozlišení v pozadí. Vysoce detailní, izometrický, 4K`.

<div style={{textAlign: 'center'}}>
  <img src={rocket_sd_1} style={{width: "250px"}} />
</div>

Tyhle nejsou nijak zvlášť dobré, ale po troše iterací jsem zde skončil u 

<div style={{textAlign: 'center'}}>
  <img src={rocket_final} style={{width: "250px"}} />
</div>

Teď jsem potřeboval lepší notebook

`Svět s nízkou úrovní poly, s bílým a modrým notebookem sedícím na řídké zelené louce s horami s nízkou úrovní poly v pozadí. Obrazovka je zcela modrá. Vysoce detailní, izometrický, 4K`.

<div style={{textAlign: 'center'}}>
  <img src={laptop_sd_1} style={{width: "250px"}} />
</div>

Dostal jsem rozporuplné výsledky; líbí se mi ten vpravo dole, ale rozhodl jsem se jít jiným směrem.

`Svět v nízkém poly, se zářícím bílým a modrým drahokamem, který sedí na řídké zelené louce s nízkými poly horami v pozadí. Vysoce detailní, izometrický, 4K`.

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_1} style={{width: "250px"}} />
</div>

Tohle nebylo úplně v pořádku. Zkusíme něco kouzelného a zářivého.

`Svět v nízkém rozlišení se zářícím bílým a modrým drahokamem, který se kouzelně vznáší uprostřed obrazovky nad řídkou zelenou loukou s nízkými horami v pozadí. Vysoce detailní, izometrický, 4K`

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_2} style={{width: "250px"}} />
</div>

Tyhle se mi líbily, ale chtěl jsem ten kámen uprostřed obrazovky.

`Svět v nízkém rozlišení, se zářícím modrým drahokamem magicky se vznášejícím uprostřed obrazovky nad řídkou zelenou loukou s horami v nízkém rozlišení v pozadí. Vysoce detailní, izometrický, 4K`.

<div style={{textAlign: 'center'}}>
  <img src={gemstone_sd_3} style={{width: "250px"}} />
</div>

Někde tady jsem využil možnosti SD, aby předchozí obrázek poskytoval určitý vliv pro budoucí obrázky.
A tak jsem dospěl k následujícímu:

<div style={{textAlign: 'center'}}>
  <img src={focus_final} style={{width: "250px"}} />
</div>

Konečně jsem se dostal ke kosmonautovi.

`Svět ve stylu umění mála úhelníků s astronautem v bílé kombinéze a modrým hledím sedí na řídké zelené louce s nízkými poly horami v pozadí. Vysoce detailní, izometrický, 4K`.

<div style={{textAlign: 'center'}}>
  <img src={astronaut_final} style={{width: "250px"}} />
</div>

V tuto chvíli jsem byl dostatečně spokojen s konzistencí stylu svých tří obrázků, abych je mohl použít
na webových stránkách. Hlavním poznatkem pro mě bylo, že se jednalo o velmi iterativní a výzkumný proces,
a že jsem musel upravovat svá očekávání a představy, když jsem experimentoval s různými podněty a modely.