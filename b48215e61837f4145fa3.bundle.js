(()=>{"use strict";var t,e={71:(t,e,o)=>{var n=o(447);const a=()=>{try{return n.v6.about}catch(t){alert("Failed to load about details"),console.log(t)}},r=t=>{try{return n.tE.get(t)}catch(t){alert("Failed to load project image src"),console.log(t)}},l=()=>{document.body.scrollIntoView({behavior:"smooth"})},i=t=>{try{document.getElementById("about-data-id--main-message").addEventListener("click",(()=>{window.open("mailto:"+t,"_blank").focus()}))}catch(t){alert("Failed to bind event to message"),console.log(t)}},c=(t,e,o=null)=>{const n=document.createElement(t);return Array.isArray(e)?e.map((t=>{n.classList.add(t)})):"string"==typeof e&&(n.className=e),o&&n.appendChild(document.createTextNode(o)),n},d=(t,e="")=>{const o=document.getElementById(t);o&&(o.textContent=e)};var s=o(339);((t={})=>{try{const e=document.getElementById("projects-list-container");e.appendChild(c("div",["project-top-divider","slideIn--left2right__large-box"]));const o=(t=>{try{let e=n.F6.projectsDetails;return e=e.filter((e=>e.id!=t.id)),e.map((t=>({id:t.id,name:t.name,type:t.type})))}catch(t){alert("Failed to load project list"),console.log(t)}})(t);for(let t=0;t<o.length;t++){const n=c("div",["project","slideIn--left2right__large-box"]);n.setAttribute("id","project-"+o[t].id),n.appendChild(c("h1","project-name",o[t].name)),n.appendChild(c("span","project-type",o[t].type)),e.appendChild(n),n.addEventListener("click",(()=>{window.location.href=`project?id=${o[t].id}&name=${o[t].name}`}))}}catch(t){alert("Failed to render projects list"),console.log(t)}})(),(()=>{try{const t=(()=>{try{return n.v6.landing}catch(t){alert("Failed to load landing details"),console.log(t)}})();for(let e in t)d(`landing-data-id--${e}`,t[e]);document.getElementById("main-title__logo-image").src=r(t.logoFilename)}catch(t){alert("Failed to render landing data"),console.log(t)}})(),(()=>{try{const t=a();d("about-data-id--aboutText",t.aboutText);const e=document.getElementById("about-data-id--photo"),o=c("img","slideIn--bottom-up__large-box");o.src=r(t.photo.src),e.appendChild(o)}catch(t){alert("Failed to render about data"),console.log(t)}})(),((t=!1)=>{try{const e=a(),o=document.getElementById("contact-details-wrapper");for(let n in e.contactDetails){const a=e.contactDetails[n];if(!t&&"main-message"===a.type){i(a.href);continue}const r=c("a",`contact-${a.name}`,a.name);r.href="media"===e.contactDetails[n].type?a.href:"mailto:"+a.href,r.target="_blank",o.appendChild(r)}}catch(t){alert("Failed to render contact details"),console.log(t)}})(),(()=>{try{document.getElementById("back2top-Btn").addEventListener("click",l)}catch(t){alert("Failed to bind event to back to top button"),console.log(t)}})(),(()=>{try{document.getElementById("main-title__logo").addEventListener("click",(()=>{window.location.href="."}))}catch(t){alert("Failed to bind event to logo"),console.log(t)}})(),setTimeout((()=>{(0,s.V)()}),100)}},o={};function n(t){var a=o[t];if(void 0!==a)return a.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,n),r.exports}n.m=e,t=[],n.O=(e,o,a,r)=>{if(!o){var l=1/0;for(s=0;s<t.length;s++){for(var[o,a,r]=t[s],i=!0,c=0;c<o.length;c++)(!1&r||l>=r)&&Object.keys(n.O).every((t=>n.O[t](o[c])))?o.splice(c--,1):(i=!1,r<l&&(l=r));if(i){t.splice(s--,1);var d=a();void 0!==d&&(e=d)}}return e}r=r||0;for(var s=t.length;s>0&&t[s-1][2]>r;s--)t[s]=t[s-1];t[s]=[o,a,r]},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={826:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var a,r,[l,i,c]=o,d=0;if(l.some((e=>0!==t[e]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var s=c(n)}for(e&&e(o);d<l.length;d++)r=l[d],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(s)},o=self.webpackChunkv2=self.webpackChunkv2||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var a=n.O(void 0,[128],(()=>n(71)));a=n.O(a)})();