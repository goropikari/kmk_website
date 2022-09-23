"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2246],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},d="RapidFire",p={unversionedId:"rapidfire",id:"rapidfire",title:"RapidFire",description:"The RapidFire module lets a user send repeated key taps while a key is held.",source:"@site/docs/rapidfire.md",sourceDirName:".",slug:"/rapidfire",permalink:"/docs/rapidfire",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/rapidfire.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tapdance",permalink:"/docs/ptBR/tapdance"},next:{title:"RGB/Underglow/NeoPixel",permalink:"/docs/rgb"}},m={},s=[{value:"Keycodes",id:"keycodes",level:2},{value:"Usage",id:"usage",level:2},{value:"Example Code",id:"example-code",level:3}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rapidfire"},"RapidFire"),(0,i.kt)("p",null,"The RapidFire module lets a user send repeated key taps while a key is held."),(0,i.kt)("p",null,"Some instances where this may be useful are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MMOs and other games where you are encouraged to repeatedly spam a key"),(0,i.kt)("li",{parentName:"ul"},"More responsive volume up and volume down"),(0,i.kt)("li",{parentName:"ul"},"Faster cursor key navigation"),(0,i.kt)("li",{parentName:"ul"},"Combine with the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/blob/master/docs/mouse_keys.md"},"Mouse Keys")," module to create rapid-fire mouse clicks"),(0,i.kt)("li",{parentName:"ul"},"Anywhere else you may need an ergonomic alternative to repetitive key tapping")),(0,i.kt)("h2",{id:"keycodes"},"Keycodes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"KC.RF(kc)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Repeatedly sends the specified keycode while pressed")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Each repeat counts as one full cycle of pressing and releasing. RapidFire works with chording (i.e., holding Shift plus a RapidFire key will repeatedly send the shifted version of that RapidFire key) and chaining (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"KC.RF(KC.LSHIFT(KC.A))"),". Multiple RapidFire keys can be held down at the same time, and their timers work independently of each other."),(0,i.kt)("p",null,"The RapidFire keycode has a few different options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"interval")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"100")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time between key taps sent in milliseconds. Note: ",(0,i.kt)("inlineCode",{parentName:"td"},"10")," appears to be the minimum effective value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"timeout")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of time in milliseconds the key must be held down before RapidFire activates. Useful if you want to be able to type with keys that have a low ",(0,i.kt)("inlineCode",{parentName:"td"},"interval")," value. A value of ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," will result in no waiting period.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"enable_interval_randomization")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enable randomizing the value of ",(0,i.kt)("inlineCode",{parentName:"td"},"interval"),". Useful for making the repetitive input look human in instances where you may be flagged as a bot otherwise.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"randomization_magnitude")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"15")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"enable_interval_randomization")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"True"),", the time between key taps sent will be ",(0,i.kt)("inlineCode",{parentName:"td"},"interval")," plus or minus a random value up to this amount.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"toggle")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If set to ",(0,i.kt)("inlineCode",{parentName:"td"},"True"),", activating RapidFire will toggle it on or off. Useful if you don't want to have to keep the button held. Set ",(0,i.kt)("inlineCode",{parentName:"td"},"timeout")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," if you would like to toggle on tap.")))),(0,i.kt)("h3",{id:"example-code"},"Example Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.rapidfire import RapidFire\n\nkeyboard.modules.append(RapidFire())\n\n# After 200 milliseconds, repeatedly send Shift+A every 75-125 milliseconds while the button is held\nSPAM_A = KC.RF(KC.LSFT(KC.A), timeout=200, interval=100, enable_interval_randomization=True, randomization_magnitude=25)\n# Immediately toggle repeatedly sending Enter every 50 milliseconds on tap\nSPAM_ENTER = KC.RF(KC.ENT, toggle=True, timeout=0, interval=50)\n\n\nkeyboard.keymap = [[\n    SPAM_A, SPAM_ENTER\n    ]]\n\n")))}c.isMDXComponent=!0}}]);