(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([t.id,"*{\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n    margin: 0px;\r\n}\r\n#forecastContent{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 2fr;\r\n    width: 500px;\r\n    height: 200px;\r\n    background-color: gray;\r\n}\r\n#country{\r\n    grid-row: 1/2;\r\n    grid-column: 1/3;\r\n}\r\n#leftInfo{\r\n    grid-row: 2/3;\r\n    grid-column: 1/2;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex: 2fr 1fr 2fr;\r\n    justify-content: space-between;\r\n}\r\n#icon{\r\n    grid-column: 1/2;\r\n}\r\n#temp{\r\n    grid-column: 1/2;\r\n}\r\n#tempController{\r\n    grid-column: 2/3;\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 5px;\r\n}\r\n#dataSpecifics{\r\n    grid-column: 3/4;\r\n}\r\n#rightInfo{\r\n    grid-row: 2/3;\r\n    grid-column: 2/3;\r\n    text-align: right;\r\n    padding-right: 50px;\r\n}\r\n.temperatures{\r\n    display: none;\r\n}",""]);const a=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);r&&c[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},c=[],a=0;a<t.length;a++){var d=t[a],s=r.base?d[0]+r.base:d[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var m=n(l),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=o(p,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=n(i[c]);e[a].references--}for(var d=r(t,o),s=0;s<i.length;s++){var u=n(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(){const t=document.getElementById("far"),e=document.getElementById("cel"),n=document.getElementById("temp"),r=document.getElementById("tempC"),o=document.getElementById("tempF");return t.classList.contains("active")?(n.textContent=r.textContent,t.classList.remove("active"),void e.classList.add("active")):e.classList.contains("active")?(n.textContent=o.textContent,e.classList.remove("active"),void t.classList.add("active")):void 0}var e=n(379),r=n.n(e),o=n(795),i=n.n(o),c=n(569),a=n.n(c),d=n(565),s=n.n(d),u=n(216),l=n.n(u),m=n(589),p=n.n(m),f=n(426),v={};v.styleTagTransform=p(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),r()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const y=document.getElementById("searchBar"),g=document.getElementById("searchSubmit"),h=document.getElementById("cel"),x=document.getElementById("far");function I(){let t=y.value;""==t&&(t="Germany"),async function(t){try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8c5a10dd57674d3aac1211332231305&q=${t}&days=7&aqi=no&alerts=no\n        `,{mode:"cors"}),n=await e.json();console.log(function(t){let e={tempC:t.current.temp_c,tempF:t.current.temp_f,humidity:t.current.humidity,wind:t.current.wind_mph,conditionText:t.current.condition.text,conditionIcon:t.current.condition.icon,location:t.location.name,country:t.location.country};return function(t){const e=document.getElementById("country"),n=document.getElementById("icon"),r=document.getElementById("temp"),o=document.getElementById("tempC"),i=document.getElementById("tempF"),c=document.getElementById("humidity"),a=document.getElementById("wind"),d=document.getElementById("condition");o.textContent=t.tempC,i.textContent=t.tempF,e.textContent=t.location,n.src=t.conditionIcon,r.textContent=t.tempF,r.value=t.tempC,c.textContent="Humidity: "+t.humidity,a.textContent="Wind: "+t.wind,d.textContent=t.conditionText}(e),e}(n))}catch(e){alert(`You got an error: Location ${t} could not be found.`)}}(t)}I(),g.addEventListener("click",I),h.addEventListener("click",t),x.addEventListener("click",t)})()})();