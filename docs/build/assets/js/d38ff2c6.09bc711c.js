"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1853],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),k=r,s=c["".concat(d,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7834:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},d="Teclas de M\xeddia",p={unversionedId:"ptBR/media_keys",id:"ptBR/media_keys",title:"Teclas de M\xeddia",description:"A extens\xe3o de teclas de m\xeddia acrescenta teclas para controles comuns de",source:"@site/docs/ptBR/media_keys.md",sourceDirName:"ptBR",slug:"/ptBR/media_keys",permalink:"/docs/ptBR/media_keys",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/ptBR/media_keys.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LED (Luz de Fundo Monocor)",permalink:"/docs/ptBR/led"},next:{title:"Keycodes ModTap",permalink:"/docs/ptBR/modtap"}},m={},u=[{value:"Keycodes",id:"keycodes",level:2}],c={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"teclas-de-m\xeddia"},"Teclas de M\xeddia"),(0,l.kt)("p",null,"A extens\xe3o de teclas de m\xeddia acrescenta teclas para controles comuns de\nm\xeddia. Ela pode ser adicionada \xe0 lista de extens\xf5es."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.media_keys import MediaKeys\nkeyboard.extensions.append(MediaKeys())\n")),(0,l.kt)("h2",{id:"keycodes"},"Keycodes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Tecla"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternativa"),(0,l.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_MUTE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MUTE")),(0,l.kt)("td",{parentName:"tr",align:null},"Mudo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_VOL_UP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.VOLU")),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta o Volume")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.AUDIO_VOL_DOWN")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.VOLD")),(0,l.kt)("td",{parentName:"tr",align:null},"Aumenta o Volume")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.BRIGHTESS_UP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.BRIU")),(0,l.kt)("td",{parentName:"tr",align:null},"Aumentar o brilho")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.BRIGHTNESS_DOWN")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.BRID")),(0,l.kt)("td",{parentName:"tr",align:null},"Diminuir o brilho")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_NEXT_TRACK")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MNXT")),(0,l.kt)("td",{parentName:"tr",align:null},"Faixa Seguinte (Windows)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_PREV_TRACK")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MPRV")),(0,l.kt)("td",{parentName:"tr",align:null},"Faixa Anterior (Windows)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_STOP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MSTP")),(0,l.kt)("td",{parentName:"tr",align:null},"Stop Faixa (Windows)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_PLAY_PAUSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MPLY")),(0,l.kt)("td",{parentName:"tr",align:null},"Tocar/Pausar Faixa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_EJECT")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.EJCT")),(0,l.kt)("td",{parentName:"tr",align:null},"Ejetar (macOS)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_FAST_FORWARD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MFFD")),(0,l.kt)("td",{parentName:"tr",align:null},"Faixa Seguinte (macOS)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MEDIA_REWIND")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MRWD")),(0,l.kt)("td",{parentName:"tr",align:null},"Faixa Anterior (macOS)")))))}k.isMDXComponent=!0}}]);