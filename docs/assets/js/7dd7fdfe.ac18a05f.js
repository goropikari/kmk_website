"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7556],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?t.createElement(y,o(o({ref:n},d),{},{components:a})):t.createElement(y,o({ref:n},d))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2968:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Scanners",c={unversionedId:"scanners",id:"scanners",title:"Scanners",description:"The default key scanner in KMK assumes a garden variety switch matrix, with",source:"@site/docs/scanners.md",sourceDirName:".",slug:"/scanners",permalink:"/docs/scanners",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/scanners.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RGB/Underglow/NeoPixel",permalink:"/docs/rgb"},next:{title:"Sequences",permalink:"/docs/sequences"}},d={},p=[{value:"Keypad Scanners",id:"keypad-scanners",level:2},{value:"keypad MatrixScanner",id:"keypad-matrixscanner",level:3},{value:"keypad KeysScanner",id:"keypad-keysscanner",level:3},{value:"keypad ShiftRegisterKeys",id:"keypad-shiftregisterkeys",level:3},{value:"Digitalio Scanners",id:"digitalio-scanners",level:2},{value:"digitalio MatrixScanner",id:"digitalio-matrixscanner",level:3},{value:"Rotary Encoder Scanners",id:"rotary-encoder-scanners",level:2},{value:"RotaryioEncoder",id:"rotaryioencoder",level:3},{value:"<code>Scanner</code> base class",id:"scanner-base-class",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Multiple Scanners",id:"multiple-scanners",level:3},{value:"Multiple Scanners coord_mapping and keymap changes",id:"multiple-scanners-coord_mapping-and-keymap-changes",level:4}],u={toc:p};function m(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scanners"},"Scanners"),(0,i.kt)("p",null,"The default key scanner in KMK assumes a garden variety switch matrix, with\none diode per switch to prevent ghosting.\nThis doesn't cover all hardware designs though. With macro pads, for example, it\nis very common to not have a matrix topology at all.\nBoards like this aren't compatible with the default matrix scanner, so you will\nneed to swap it out with an alternative scanner."),(0,i.kt)("h2",{id:"keypad-scanners"},"Keypad Scanners"),(0,i.kt)("p",null,"The scanners in ",(0,i.kt)("inlineCode",{parentName:"p"},"kmk.scanners.keypad")," wrap the ",(0,i.kt)("inlineCode",{parentName:"p"},"keypad")," module that ships with\nCircuitPython and support the some configuration and tuning options as their\nupstream. You can find out more in the (CircuitPython\ndocumentation)","[https://docs.circuitpython.org/en/latest/shared-bindings/keypad/index.html]","."),(0,i.kt)("h3",{id:"keypad-matrixscanner"},"keypad MatrixScanner"),(0,i.kt)("p",null,"This is the default scanner used by KMK.\nIt uses the CircuitPython builtin ",(0,i.kt)("inlineCode",{parentName:"p"},"keypad.KeyMatrix"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.scanners.keypad import MatrixScanner\n\nclass MyKeyboard(KMKKeyboard):\n    def __init__(self):\n        # create and register the scanner\n        self.matrix = MatrixScanner(\n            # required arguments:\n            column_pins=self.col_pins,\n            row_pins=self.row_pins,\n            # optional arguments with defaults:\n            columns_to_anodes=DiodeOrientation.COL2ROW,\n            interval=0.02,\n            max_events=64\n        )\n\n")),(0,i.kt)("h3",{id:"keypad-keysscanner"},"keypad KeysScanner"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"keypad.Keys")," scanner treats individual GPIO pins as discrete keys. To use\nthis scanner, provide a sequence of pins that describes the layout of your\nboard then include it in the initialization sequence of your keyboard class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import board\nfrom kmk.kmk_keyboard import KMKKeyboard\nfrom kmk.scanners.keypad import KeysScanner\n\n\n# GPIO to key mapping - each line is a new row.\n_KEY_CFG = [\n    board.SW3,  board.SW7,  board.SW11, board.SW15,\n    board.SW2,  board.SW6,  board.SW10, board.SW14,\n    board.SW1,  board.SW5,  board.SW9,  board.SW13,\n    board.SW0,  board.SW4,  board.SW8,  board.SW12,\n]\n\n\n# Keyboard implementation class\nclass MyKeyboard(KMKKeyboard):\n    def __init__(self):\n        # create and register the scanner\n        self.matrix = KeysScanner(\n            # require argument:\n            pins=_KEY_CFG,\n            # optional arguments with defaults:\n            value_when_pressed=False,\n            pull=True,\n            interval=0.02,\n            max_events=64\n        )\n")),(0,i.kt)("h3",{id:"keypad-shiftregisterkeys"},"keypad ShiftRegisterKeys"),(0,i.kt)("p",null,"This scanner can read keys attached to a parallel-in serial-out shift register\nlike the 74HC165 or CD4021. Note that you may chain shift registers to load in\nas many values as you need."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.scanners.keypad import ShiftRegisterKeys\n\nclass MyKeyboard(KMKKeyboard):\n    def __init__(self):\n        # create and register the scanner\n        self.matrix = ShiftRegisterKeys(\n            # require arguments:\n            clock=board.GP0,\n            data=board.GP1,\n            latch=board.GP2,\n            key_count=8,\n            # optional arguments with defaults:\n            value_to_latch=True, # 74HC165: True, CD4021: False\n            value_when_pressed=False,\n            interval=0.02,\n            max_events=64\n        )\n")),(0,i.kt)("h2",{id:"digitalio-scanners"},"Digitalio Scanners"),(0,i.kt)("h3",{id:"digitalio-matrixscanner"},"digitalio MatrixScanner"),(0,i.kt)("p",null,"The digitalio Matrix can scan over, as the name implies, ",(0,i.kt)("inlineCode",{parentName:"p"},"digitalio.DigitalInOut"),"\nobjects. That is especially useful if a matrix is build with IO-expanders."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.scanners.digitalio import MatrixScanner\n\nclass MyKeyboard(KMKKeyboard):\n    def __init__(self):\n        # create and register the scanner\n        self.matrix = MatrixScanner(\n            cols=self.col_pins,\n            rows=self.row_pins,\n            diode_orientation=self.diode_orientation,\n            rollover_cols_every_rows=None, # optional\n        )\n")),(0,i.kt)("h2",{id:"rotary-encoder-scanners"},"Rotary Encoder Scanners"),(0,i.kt)("h3",{id:"rotaryioencoder"},"RotaryioEncoder"),(0,i.kt)("p",null,'Matrix events from a quadrature ("rotary") encoder?'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.scanners.encoder import RotaryioEncoder\n\nclass MyKeyboard(KMKKeyboard):\n    def __init__(self):\n        # create and register the scanner\n        self.matrix = RotaryioEncoder(\n            pin_a=board.GP0,\n            pin_b=board.GP1,\n            # optional\n            divisor=4,\n        )\n")),(0,i.kt)("h2",{id:"scanner-base-class"},(0,i.kt)("inlineCode",{parentName:"h2"},"Scanner")," base class"),(0,i.kt)("p",null,"If you require a different type of scanner, you can create your own by\nproviding a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"Scanner"),". This is a very simple interface, it only\ncontains a single method, ",(0,i.kt)("inlineCode",{parentName:"p"},"scan_for_changes(self)")," which returns a key report\nif one exists, or ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," otherwise."),(0,i.kt)("h2",{id:"advanced-configuration"},"Advanced Configuration"),(0,i.kt)("h3",{id:"multiple-scanners"},"Multiple Scanners"),(0,i.kt)("p",null,"Sometimes a single scanner doesn't cover all hardware configurations. For\nexample: The bulk of the keyboard may be scanned with a matrix scanner, but a\ncouple of additional keys are directly connected to GPIOs.\nIn that case KMK allows you to define multiple scanners. The ",(0,i.kt)("inlineCode",{parentName:"p"},"KMKKeyboard.matrix")," attribute can either be assigned a single scanner, or a list of scanners.\nKMK assumes that successive scanner keys are consecutive, and populates\n",(0,i.kt)("inlineCode",{parentName:"p"},"KMKKeyboard.coord_mapping")," accordingly; for convenience you may have to supply a ",(0,i.kt)("inlineCode",{parentName:"p"},"coord_mapping")," that resembles your physical layout more closely (expanded below)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class MyKeyboard(KMKKeyboard):\n    self.matrix = [\n        MatrixScanner(...),\n        KeysScanner(...),\n        # etc...\n    ]\n")),(0,i.kt)("h4",{id:"multiple-scanners-coord_mapping-and-keymap-changes"},"Multiple Scanners coord_mapping and keymap changes"),(0,i.kt)("p",null,"To add more scanners you need to add onto your ",(0,i.kt)("inlineCode",{parentName:"p"},"coord_mapping"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"coord_mapping")," with just one ",(0,i.kt)("inlineCode",{parentName:"p"},"MatrixScanner")," on a 58 key split keyboard:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"coord_mapping = [\n     0,  1,  2,  3,  4,  5,         35, 34, 33, 32, 31, 30,\n     6,  7,  8,  9, 10, 11,         41, 40, 39, 38, 37, 36,\n    12, 13, 14, 15, 16, 17,         47, 46, 45, 44, 43, 42,\n    18, 19, 20, 21, 22, 23, 29, 59, 53, 52, 51, 50, 49, 48,\n            25, 26, 27, 28,         58, 57, 56, 55, \n    ]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"coord_mapping")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"MatrixScanner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RotaryioEncoder")," on the same 58 key split keyboard with an encoder on each half:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"coord_mapping = [\n     0,  1,  2,  3,  4,  5,         37, 36, 35, 34, 33, 32,\n     6,  7,  8,  9, 10, 11,         43, 42, 41, 40, 39, 38,\n    12, 13, 14, 15, 16, 17,         49, 48, 47, 46, 45, 44,\n    18, 19, 20, 21, 22, 23, 29, 61, 55, 54, 53, 52, 51, 50,\n            25, 26, 27, 28,         60, 59, 58, 57,\n            30, 31,                         62, 63 \n    ]\n")),(0,i.kt)("p",null,"On the top left side of a standard split keyboard ",(0,i.kt)("inlineCode",{parentName:"p"},"coord_mapping"),", right below that you see a split keyboard where ",(0,i.kt)("inlineCode",{parentName:"p"},"RotaryioEncoder")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MatrixScanner")," (the default scanner) are used.\nIn the single scanner example, we used to count from 0 to 29 while the top right side starts at 30.\nWith the addition of the encoder scanner, the left side has 2 additional keys making it count up to 31 and the right side would then start at 32 and count to 63.\nThis means that keys 30, 31, 62, and 63 are for encoders.\nNotice that all of the encoders are at the end of the array, because we put the encoder scanner after the matrix scanner in ",(0,i.kt)("inlineCode",{parentName:"p"},"keyboard.matrix"),".\nTherefore, we need to add 4 more key codes in the corresponding places of our ",(0,i.kt)("inlineCode",{parentName:"p"},"keyboard.keymap"),", they will be used for the encoders."))}m.isMDXComponent=!0}}]);