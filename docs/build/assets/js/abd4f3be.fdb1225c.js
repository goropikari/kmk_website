"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5243],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5299:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Combos",c={unversionedId:"combos",id:"combos",title:"Combos",description:"Combos allow you to assign special functionality to combinations of key presses.",source:"@site/docs/combos.md",sourceDirName:".",slug:"/combos",permalink:"/docs/combos",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/combos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ctrl GUI Swap",permalink:"/docs/cg_swap"},next:{title:"Configuring KMK",permalink:"/docs/config_and_keymap"}},m={},u=[{value:"Keycodes",id:"keycodes",level:2},{value:"Custom Combo Behavior",id:"custom-combo-behavior",level:2},{value:"Example Code",id:"example-code",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"combos"},"Combos"),(0,a.kt)("p",null,"Combos allow you to assign special functionality to combinations of key presses.\nThe two default behaviors are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chords: match keys in random order, all pressed within 50ms."),(0,a.kt)("li",{parentName:"ul"},"Sequences: match keys in order, pressed within 1s of one another.")),(0,a.kt)("p",null,"You can define combos to listen to any valid KMK key, even internal or\nfunctional keys, like HoldTap. When using internal KMK keys, be aware that the\norder of modules matters."),(0,a.kt)("p",null,"The result of a combo is another key being pressed/released; if the desired\naction isn't covered by KMK keys: create your own with ",(0,a.kt)("inlineCode",{parentName:"p"},"make_key")," and attach\ncorresponding handlers."),(0,a.kt)("p",null,"Combos may overlap, i.e. share match keys amongst each other."),(0,a.kt)("h2",{id:"keycodes"},"Keycodes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"New Keycode"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LEADER")),(0,a.kt)("td",{parentName:"tr",align:null},"a dummy / convenience key for leader key sequences")))),(0,a.kt)("h2",{id:"custom-combo-behavior"},"Custom Combo Behavior"),(0,a.kt)("p",null,"Optional arguments that customize individual combos:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fast_reset"),": If True, allows tapping every key (default for sequences);\nif False, allows holding at least one key and tapping the rest to repeatedly\nactivate the combo (default for chords)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"per_key_timeout"),": If True, reset timeout on every key press (default for\nsequences)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),": Set the time window within which the match has to happen in ms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"match_coord"),": If True, matches key position in the matrix.")),(0,a.kt)("h2",{id:"example-code"},"Example Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.keys import KC, make_key\nfrom kmk.modules.combos import Combos, Chord, Sequence\ncombos = Combos()\nkeyboard.modules.append(combos)\n\nmake_key(\n    names=('MYKEY',),\n    on_press=lambda *args: print('I pressed MYKEY'),\n)\n\ncombos.combos = [\n    Chord((KC.A, KC.B), KC.LSFT),\n    Chord((KC.A, KC.B, KC.C), KC.LALT),\n    Chord((0, 1), KC.ESC, match_coord=True),\n    Chord((8, 9, 10), KC.MO(4), match_coord=True),\n    Sequence((KC.LEADER, KC.A, KC.B), KC.C),\n    Sequence((KC.E, KC.F), KC.MYKEY, timeout=500, per_key_timeout=False, fast_reset=False)\n]\n")))}d.isMDXComponent=!0}}]);