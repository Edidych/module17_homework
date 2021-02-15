(()=>{var n={208:(n,e,t)=>{"use strict";t.d(e,{Z:()=>k});var o=t(645),a=t.n(o),i=t(667),r=t.n(i),s=t(165),c=t(602),l=t(671),d=t(34),p=t(489),m=t(338),f=a()((function(n){return n[1]}));f.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);var u=r()(s.Z),x=r()(c.Z),g=r()(l.Z),h=r()(l.Z,{hash:"?#iefix"}),b=r()(d.Z),_=r()(p.Z),y=r()(m.Z,{hash:"#icon"});f.push([n.id,"/* header */\n.font {\n  font-family: 'Roboto', sans-serif; }\n\n.header-menu .header-menu__Logo {\n  display: block;\n  float: left;\n  margin: 25px 40px 0px; }\n\n.header-menu .header-navbar {\n  display: flex;\n  justify-content: flex-end;\n  list-style: none;\n  align-items: center;\n  font-weight: bold; }\n  .header-menu .header-navbar .header-navbar__list {\n    padding: 35px 30px; }\n    .header-menu .header-navbar .header-navbar__list .header-navbar__list_text {\n      color: black; }\n  .header-menu .header-navbar .header-navbar__btnDesk {\n    background-color: transparent;\n    cursor: pointer;\n    Width: 106px;\n    Height: 43px;\n    border-radius: 6px;\n    margin: 0px 40px;\n    padding: 5px 20px; }\n    .header-menu .header-navbar .header-navbar__btnDesk .header-navbar__btnDesk_btnText {\n      font-weight: bold; }\n  .header-menu .header-navbar [attr~=\"changeColorlink\"]:hover {\n    color: grey;\n    cursor: pointer; }\n\n.header-menu .header-menu__btnMobile {\n  display: none;\n  border: none;\n  background-color: transparent; }\n\n@media screen and (max-width: 1000px) {\n  .header-menu {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 60px; }\n    .header-menu .header-menu__Logo {\n      display: block;\n      float: left;\n      margin: 20px 20px;\n      color: #1B1B1B; }\n    .header-menu .header-navbar {\n      display: none; }\n    .header-menu .header-menu__btnMobile {\n      display: block;\n      float: left;\n      margin: 20px 20px;\n      color: #000000;\n      width: 18px;\n      height: 12px;\n      margin: 28px 23px; } }\n\na {\n  text-decoration: none; }\n\nul {\n  margin-block-start: 0px;\n  margin-block-end: 0px; }\n\n/* main */\n.main-FAQ {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 80px; }\n  .main-FAQ .main-FAQ__heading {\n    font-size: 64px;\n    font-weight: bold;\n    margin: 60px 0px 30px; }\n  .main-FAQ .main-FAQ__text {\n    margin: 0 auto;\n    font-size: 24px;\n    padding-bottom: 60px; }\n\n@media screen and (max-width: 1000px) {\n  .main-FAQ {\n    margin-top: 0px; }\n    .main-FAQ .main-FAQ__img {\n      width: 70vw; }\n    .main-FAQ .main-FAQ__heading {\n      font-size: 32px;\n      margin: 40px 0px 10px; }\n    .main-FAQ .main-FAQ__text {\n      font-size: 16px;\n      margin: 0 auto;\n      font-size: 16px;\n      width: 335px;\n      height: auto;\n      padding-bottom: 30px;\n      color: #1B1B1B; } }\n\n.main-questions {\n  text-align: center; }\n  .main-questions .main-questions-block {\n    margin-bottom: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    .main-questions .main-questions-block .main-questions-block__collapsible {\n      background-color: #F7F7F8;\n      border-radius: 6px;\n      border: none;\n      color: #1B1B1B;\n      width: 73%;\n      font-size: 20px;\n      cursor: pointer;\n      text-align: left;\n      padding: 19px 0px 18px 22px; }\n      .main-questions .main-questions-block .main-questions-block__collapsible:after {\n        content: url("+u+");\n        float: right;\n        margin-right: 27px;\n        margin-left: 27px; }\n      .main-questions .main-questions-block .main-questions-block__collapsible:hover {\n        background-color: rgba(97, 161, 153, 0.1); }\n    .main-questions .main-questions-block .main-questions-block__active {\n      background-color: rgba(97, 161, 153, 0.15);\n      color: #61A199; }\n      .main-questions .main-questions-block .main-questions-block__active:after {\n        content: url("+x+'); }\n    .main-questions .main-questions-block .main-questions-block__content {\n      max-height: 0;\n      overflow: hidden;\n      transition: max-height 0.2s ease-out;\n      width: 73%;\n      float: left; }\n      .main-questions .main-questions-block .main-questions-block__content p:only-child {\n        margin: 20px 0px 26px;\n        width: 55%;\n        text-align: left;\n        padding-left: 22px; }\n\n@media screen and (max-width: 1000px) {\n  .main-questions .main-questions-block .main-questions-block__collapsible {\n    width: 90%;\n    padding: 14px 0px 15px 20px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .main-questions .main-questions-block .main-questions-block__collapsible:after {\n      margin-right: 20px;\n      margin-left: 20px; }\n  .main-questions .main-questions-block .main-questions-block__content {\n    width: 90%;\n    font-size: 14px; }\n    .main-questions .main-questions-block .main-questions-block__content p:only-child {\n      width: 79%;\n      padding-left: 20px; } }\n\n/* footer */\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #3F3D56;\n  height: 124px;\n  margin-top: 120px; }\n  .footer .footer__copyright {\n    color: #FFFFFF;\n    margin-left: 40px; }\n  .footer [attr~="changeColorlink"]:hover {\n    color: grey;\n    cursor: pointer; }\n  .footer .footer-socialNetworks {\n    display: flex;\n    margin-right: 40px; }\n    .footer .footer-socialNetworks .footer-socialNetworks__logo {\n      margin: 20px; }\n      .footer .footer-socialNetworks .footer-socialNetworks__logo [attr~="footer-logo"] {\n        font-size: 26px;\n        color: #FFFFFF; }\n      .footer .footer-socialNetworks .footer-socialNetworks__logo [attr~="changeColorlink"]:hover {\n        color: grey;\n        cursor: pointer; }\n\n@media screen and (max-width: 1000px) {\n  .footer {\n    height: 125px;\n    margin-top: 60px;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: column; }\n    .footer .footer__copyright {\n      margin-left: 20px;\n      margin-top: 30px; }\n    .footer .footer-socialNetworks-logo {\n      margin: 16px 0px 32px 22px; } }\n\n@font-face {\n  font-family: \'icon\';\n  src: url('+g+");\n  src: url("+h+') format("embedded-opentype"), url('+b+') format("woff"), url('+_+') format("truetype"), url('+y+") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class*='icon-']:before {\n  display: inline-block;\n  font-family: 'icon';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-Logo:before {\n  content: '\\0041'; }\n\n.icon-insta:before {\n  content: '\\0042'; }\n\n.icon-facebook:before {\n  content: '\\0044'; }\n\n.icon-vk:before {\n  content: '\\0045'; }\n",""]);const k=f},376:(n,e,t)=>{"use strict";t.d(e,{Z:()=>h});var o=t(645),a=t.n(o),i=t(667),r=t.n(i),s=t(671),c=t(34),l=t(489),d=t(338),p=a()((function(n){return n[1]}));p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap);"]);var m=r()(s.Z),f=r()(s.Z,{hash:"?#iefix"}),u=r()(c.Z),x=r()(l.Z),g=r()(d.Z,{hash:"#icon"});p.push([n.id,'/* header */\n.font {\n  font-family: \'Roboto\', sans-serif; }\n\n.header-menu .header-menu__Logo {\n  display: block;\n  float: left;\n  margin: 25px 40px 0px; }\n\n.header-menu .header-navbar {\n  display: flex;\n  justify-content: flex-end;\n  list-style: none;\n  align-items: center;\n  font-weight: bold; }\n  .header-menu .header-navbar .header-navbar__list {\n    padding: 35px 30px; }\n    .header-menu .header-navbar .header-navbar__list .header-navbar__list_text {\n      color: black; }\n  .header-menu .header-navbar .header-navbar__btnDesk {\n    background-color: transparent;\n    cursor: pointer;\n    Width: 106px;\n    Height: 43px;\n    border-radius: 6px;\n    margin: 0px 40px;\n    padding: 5px 20px; }\n    .header-menu .header-navbar .header-navbar__btnDesk .header-navbar__btnDesk_btnText {\n      font-weight: bold; }\n  .header-menu .header-navbar [attr~="changeColorlink"]:hover {\n    color: grey;\n    cursor: pointer; }\n\n.header-menu .header-menu__btnMobile {\n  display: none;\n  border: none;\n  background-color: transparent; }\n\n@media screen and (max-width: 1000px) {\n  .header-menu {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 60px; }\n    .header-menu .header-menu__Logo {\n      display: block;\n      float: left;\n      margin: 20px 20px;\n      color: #1B1B1B; }\n    .header-menu .header-navbar {\n      display: none; }\n    .header-menu .header-menu__btnMobile {\n      display: block;\n      float: left;\n      margin: 20px 20px;\n      color: #000000;\n      width: 18px;\n      height: 12px;\n      margin: 28px 23px; } }\n\na {\n  text-decoration: none; }\n\nul {\n  margin-block-start: 0px;\n  margin-block-end: 0px; }\n\n/* main */\n.main-aboutUs {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  margin-top: 80px; }\n  .main-aboutUs .main-aboutUs__heading {\n    font-size: 64px;\n    font-weight: bold;\n    margin: 60px 0px 30px; }\n  .main-aboutUs .main-aboutUs__text {\n    margin: 0 auto;\n    font-size: 24px;\n    width: 925px;\n    height: 105px;\n    padding-bottom: 80px; }\n\n@media screen and (max-width: 1000px) {\n  .main-aboutUs .main-aboutUs__img {\n    width: 70vw; }\n  .main-aboutUs .main-aboutUs__heading {\n    font-size: 32px;\n    margin: 40px 0px 10px; }\n  .main-aboutUs .main-aboutUs__text {\n    font-size: 16px;\n    margin: 0 auto;\n    font-size: 16px;\n    width: 335px;\n    height: auto;\n    padding-bottom: 40px;\n    color: #1B1B1B; } }\n\n.main-contact {\n  padding-top: 80px;\n  background: #F7F9FB; }\n  .main-contact .main-contact__header {\n    text-align: center;\n    font-size: 48px;\n    margin: 0 auto;\n    padding-bottom: 40px; }\n  .main-contact .main-contact-data {\n    display: flex;\n    text-align: center;\n    padding-bottom: 104px;\n    justify-content: center; }\n    .main-contact .main-contact-data .main-contact-data__blockMail {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      border-right: 1px solid #C8C8CF;\n      width: 30vw; }\n    .main-contact .main-contact-data .main-contact-data__blockPhone {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      width: 30vw; }\n    .main-contact .main-contact-data [attr="connect-header"] {\n      margin: 0 auto;\n      font-size: 14px;\n      color: #4F4F4F; }\n    .main-contact .main-contact-data [attr~="connect-info"] {\n      font-size: 20px;\n      font-weight: bold;\n      margin: 6px 70px 0px;\n      display: inline-block;\n      white-space: pre; }\n    .main-contact .main-contact-data [attr~="changeColorlink"]:hover {\n      color: grey;\n      cursor: pointer; }\n\n@media screen and (max-width: 1000px) {\n  .main-contact {\n    padding-top: 40px; }\n    .main-contact .main-contact__header {\n      text-align: center;\n      font-size: 24px;\n      margin: 0 auto;\n      padding-bottom: 0px; }\n    .main-contact .main-contact-data {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      text-align: center;\n      padding-bottom: 40px; }\n      .main-contact .main-contact-data .main-contact-data__blockMail {\n        border-right: none;\n        text-align: center; }\n        .main-contact .main-contact-data .main-contact-data__blockMail [attr="connect-header"] {\n          margin-top: 20px;\n          font-size: 12px; }\n        .main-contact .main-contact-data .main-contact-data__blockMail [attr="connect-info"] {\n          font-size: 14px;\n          margin-top: 5px;\n          white-space: nowrap; }\n      .main-contact .main-contact-data .main-contact-data__blockPhone [attr="connect-header"] {\n        margin-top: 20px;\n        font-size: 12px; }\n      .main-contact .main-contact-data .main-contact-data__blockPhone [attr="connect-info"] {\n        font-size: 14px;\n        margin-top: 5px;\n        white-space: nowrap; } }\n\n[attr="main-team-header"] {\n  font-size: 48px;\n  text-align: center;\n  padding-top: 80px;\n  margin: 0 auto; }\n\n.main-team-cards {\n  display: flex;\n  justify-content: center; }\n  .main-team-cards .main-team-cards__blockPerson {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    text-align: center;\n    padding-top: 55px;\n    justify-content: center; }\n    .main-team-cards .main-team-cards__blockPerson + div {\n      margin-left: 80px; }\n    .main-team-cards .main-team-cards__blockPerson .main-team-cards__name {\n      font-size: 20px;\n      font-weight: bold;\n      text-align: center;\n      margin: 0 auto;\n      padding: 23px 0px 8px; }\n    .main-team-cards .main-team-cards__blockPerson .main-team-cards__position {\n      text-align: center;\n      color: #828282;\n      margin: 0 auto;\n      font-size: 14px; }\n\n[attr="mobileView"] {\n  display: none; }\n\n@media screen and (max-width: 1000px) {\n  [attr="main-team-header"] {\n    font-size: 24px;\n    padding-top: 40px;\n    margin: 0 auto; }\n  .main-team-cards .main-team-cards__blockPerson {\n    padding-top: 30px; }\n    .main-team-cards .main-team-cards__blockPerson + div {\n      margin-left: 32px; }\n    .main-team-cards .main-team-cards__blockPerson img:only-of-type {\n      width: 80px;\n      height: 80px; }\n    .main-team-cards .main-team-cards__blockPerson .main-team-cards__name {\n      font-size: 16px;\n      padding: 15px 0px 3px;\n      width: 135px; }\n    .main-team-cards .main-team-cards__blockPerson .main-team-cards__position {\n      font-size: 12px; }\n  .main-team-cards [attr="deskView"] {\n    display: none; }\n  [attr="mobileView"] {\n    display: flex;\n    justify-content: center; } }\n\n/* footer */\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #3F3D56;\n  height: 124px;\n  margin-top: 120px; }\n  .footer .footer__copyright {\n    color: #FFFFFF;\n    margin-left: 40px; }\n  .footer [attr~="changeColorlink"]:hover {\n    color: grey;\n    cursor: pointer; }\n  .footer .footer-socialNetworks {\n    display: flex;\n    margin-right: 40px; }\n    .footer .footer-socialNetworks .footer-socialNetworks__logo {\n      margin: 20px; }\n      .footer .footer-socialNetworks .footer-socialNetworks__logo [attr~="footer-logo"] {\n        font-size: 26px;\n        color: #FFFFFF; }\n      .footer .footer-socialNetworks .footer-socialNetworks__logo [attr~="changeColorlink"]:hover {\n        color: grey;\n        cursor: pointer; }\n\n@media screen and (max-width: 1000px) {\n  .footer {\n    height: 125px;\n    margin-top: 60px;\n    justify-content: flex-start;\n    align-items: flex-start;\n    flex-direction: column; }\n    .footer .footer__copyright {\n      margin-left: 20px;\n      margin-top: 30px; }\n    .footer .footer-socialNetworks__logo {\n      margin: 16px 0px 32px 22px; } }\n\n@font-face {\n  font-family: \'icon\';\n  src: url('+m+");\n  src: url("+f+') format("embedded-opentype"), url('+u+') format("woff"), url('+x+') format("truetype"), url('+g+") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class*='icon-']:before {\n  display: inline-block;\n  font-family: 'icon';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-Logo:before {\n  content: '\\0041'; }\n\n.icon-insta:before {\n  content: '\\0042'; }\n\n.icon-facebook:before {\n  content: '\\0044'; }\n\n.icon-vk:before {\n  content: '\\0045'; }\n",""]);const h=p},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},671:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"asset/icon.eot"},489:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"asset/icon.ttf"},34:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"asset/icon.woff"},165:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"asset/arrowDown.svg"},602:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"asset/arrowUp.svg"},338:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});const o=t.p+"asset/icon.svg"},379:(n,e,t)=>{"use strict";var o,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function r(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],a=0;a<n.length;a++){var s=n[a],c=e.base?s[0]+e.base:s[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var p=r(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(i[p].references++,i[p].updater(m)):i.push({identifier:d,updater:x(m,e),references:1}),o.push(d)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,o){var a=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,a);else{var i=document.createTextNode(a),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(i,r[e]):n.appendChild(i)}}function m(n,e,t){var o=t.css,a=t.media,i=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,u=0;function x(n,e){var t,o,a;if(e.singleton){var i=u++;t=f||(f=c(e)),o=p.bind(null,t,i,!1),a=p.bind(null,t,i,!0)}else t=c(e),o=m.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var a=r(t[o]);i[a].references--}for(var c=s(n,e),l=0;l<t.length;l++){var d=r(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}},756:()=>{let n,e=document.getElementsByClassName("main-questions-block__collapsible");for(n=0;n<e.length;n++)e[n].addEventListener("click",(function(){this.classList.toggle("main-questions-block__active");let n=this.nextElementSibling;n.style.maxHeight?n.style.maxHeight=null:n.style.maxHeight=n.scrollHeight+"px"}))}},e={};function t(o){if(e[o])return e[o].exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{"use strict";t(756);var n=t(379),e=t.n(n),o=t(208);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=t(376);e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals})()})();