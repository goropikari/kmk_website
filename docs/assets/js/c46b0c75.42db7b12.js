"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9747],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2778:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={},c="Sticky Mod",d={unversionedId:"sticky_mod",id:"sticky_mod",title:"Sticky Mod",description:"This module allows to hold a modifier while a key is being tapped repeatedly; the modifier will be released when any other key is pressed or released.",source:"@site/docs/sticky_mod.md",sourceDirName:".",slug:"/sticky_mod",permalink:"/docs/sticky_mod",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/sticky_mod.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Split Keyboards",permalink:"/docs/split_keyboards"},next:{title:"Support",permalink:"/docs/support"}},s={},u=[{value:"Enabling the module",id:"enabling-the-module",level:2},{value:"Keycodes",id:"keycodes",level:2}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sticky-mod"},"Sticky Mod"),(0,i.kt)("p",null,"This module allows to hold a modifier while a key is being tapped repeatedly; the modifier will be released when any other key is pressed or released.\nThis is for example useful if you want to switch between open windows with ALT+TAB or CMD+TAB, using only a single key."),(0,i.kt)("h2",{id:"enabling-the-module"},"Enabling the module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.module.sticky_mod import StickyMod\nsticky_mod = StickyMod()\nkeyboard.modules.append(sticky_mod)\nkeyboard.keymap = [\n    [\n        KC.SM(kc=KC.TAB, mod=KC.LALT),\n        KC.SM(KC.TAB, KC.LSFT(KC.LALT)),\n    ],\n]\n")),(0,i.kt)("h2",{id:"keycodes"},"Keycodes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"KC.SM(KC.key, KC.mod)")),(0,i.kt)("td",{parentName:"tr",align:null},"sticky mod")))))}m.isMDXComponent=!0}}]);