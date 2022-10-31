"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9064],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,f=c["".concat(u,".").concat(d)]||c[d]||l[d]||a;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1858:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},u="Instru\xe7\xf5es para Grava\xe7\xe3o",p={unversionedId:"ptBR/flashing",id:"ptBR/flashing",title:"Instru\xe7\xf5es para Grava\xe7\xe3o",description:"Em geral n\xf3s recomendamos seguir as instru\xe7\xf5es no README.md, por\xe9m,",source:"@site/docs/02-ptBR/flashing.md",sourceDirName:"02-ptBR",slug:"/ptBR/flashing",permalink:"/docs/ptBR/flashing",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/02-ptBR/flashing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extens\xf5es",permalink:"/docs/ptBR/extensions"},next:{title:"Teclados Artesanais",permalink:"/docs/ptBR/handwiring"}},m={},l=[{value:"Linux/BSD",id:"linuxbsd",level:2}],c={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"instru\xe7\xf5es-para-grava\xe7\xe3o"},"Instru\xe7\xf5es para Grava\xe7\xe3o"),(0,a.kt)("p",null,"Em geral n\xf3s recomendamos seguir as instru\xe7\xf5es no ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),", por\xe9m,\nmajoritariamente como artefato de desenvolvimento, outro m\xe9todo de gravar o KMK\nexiste. Este m\xe9todo \xe9 testado e suportado apenas no Linux, por\xe9m ele deve\nfuncionar no MacOS, BSDs e outros Unix-likes. Pode ser que funcione tamb\xe9m em\nCygwin e no Windows Subsystem for Linux."),(0,a.kt)("p",null,"Dado que se tenham dispon\xedveis o ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," e ",(0,a.kt)("inlineCode",{parentName:"p"},"rsync")," no seu sistema (via ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),"),\no seguinte copiar\xe1 a \xe1rvore ",(0,a.kt)("inlineCode",{parentName:"p"},"kmk")," para seu dispositivo CircuitPython, bem como o\narquivo definido como ",(0,a.kt)("inlineCode",{parentName:"p"},"USER_KEYMAP")," como seu ",(0,a.kt)("inlineCode",{parentName:"p"},"main.py"),". Ele tamb\xe9m copiar\xe1 o\n",(0,a.kt)("inlineCode",{parentName:"p"},"boot.py"),", que aloca um tamanho de pilha maior que o padr\xe3o do CircuitPython\n(simplificando - mais RAM do seu dispositivo ficar\xe1 dispon\xedvel para o KMK e para\na configura\xe7\xe3o do seu teclado). Se qualquer destes arquivos j\xe1 existir no seu\ndispositivo CircuitPython, ele ser\xe1 sobrescrito sem aviso algum."),(0,a.kt)("p",null,"Se voc\xea estiver tendo problemas com erros de permiss\xe3o aqui, **n\xe3o execute make\ncomo root ou via sudo. Leia a se\xe7\xe3o a seguir sobre resolu\xe7\xe3o de problemas."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"make MOUNTPOINT=/media/CIRCUITPY USER_KEYMAP=user_keymaps/nameofyourkeymap.py BOARD=board/nameofyourboard/kb.py\n")),(0,a.kt)("h1",{id:"resolvendo-problemas"},"Resolvendo Problemas"),(0,a.kt)("h2",{id:"linuxbsd"},"Linux/BSD"),(0,a.kt)("p",null,"Confira se seu drive foi montado em algum lugar mediante um aplicativo gr\xe1fico\nou algum sistema de auto-montagem. A maioria destas ferramentas monta os\ndispositivos em pastas ",(0,a.kt)("inlineCode",{parentName:"p"},"/media")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"/run/media"),", provavelmente como\n",(0,a.kt)("inlineCode",{parentName:"p"},"/media/CIRCUITPY"),". Se o dispositivo n\xe3o est\xe1 montado, voc\xea pode ler sobre como\nmontar um drive manualmente ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/File_systems#Mount_a_file_system"},"na\nArchWiki"),"."),(0,a.kt)("p",null,"Por exemplo:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sudo mount -o uid=$(id -u),gid=$(id -g) /dev/disk/by-label/CIRCUITPY ~/mnt")),(0,a.kt)("p",null,"Se voc\xea ainda est\xe1 tendo algum problema, confira nossa p\xe1gina de suporte para\nsaber aonde voc\xea pode entrar em contato, e a comunidade ir\xe1 te ajudar."))}d.isMDXComponent=!0}}]);