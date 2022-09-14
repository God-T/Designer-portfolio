(()=>{"use strict";var t,e={71:(t,e,o)=>{o(953);var a=o(447);const n=()=>{try{return a.v6.about}catch(t){alert("Failed to load about details"),console.log(t)}},r=t=>{try{return a.tE.get(t)}catch(t){alert("Failed to load project image src"),console.log(t)}},l=()=>{document.body.scrollIntoView({behavior:"smooth"})},c=t=>{try{document.getElementById("about-data-id--main-message").addEventListener("click",(()=>{window.open("mailto:"+t,"_blank").focus()}))}catch(t){alert("Failed to bind event to message"),console.log(t)}},i=(t,e,o=null)=>{const a=document.createElement(t);return Array.isArray(e)?e.map((t=>{a.classList.add(t)})):"string"==typeof e&&(a.className=e),o&&a.appendChild(document.createTextNode(o)),a},d=(t,e="")=>{const o=document.getElementById(t);o&&(o.textContent=e)};var s=o(339);((t={})=>{try{const e=document.getElementById("projects-list-container");e.appendChild(i("div",["project-top-divider","slideIn--left2right__large-box"]));const o=(t=>{try{let e=a.F6.projectsDetails;return e=e.filter((e=>e.id!=t.id)),e.map((t=>({id:t.id,name:t.name,type:t.type})))}catch(t){alert("Failed to load project list"),console.log(t)}})(t);for(let t=0;t<o.length;t++){const a=i("div",["project","slideIn--left2right__large-box"]);a.setAttribute("id","project-"+o[t].id),a.appendChild(i("h1","project-name",o[t].name)),a.appendChild(i("span","project-type",o[t].type)),e.appendChild(a),a.addEventListener("click",(()=>{window.location.href=`${window.location.origin}/project?id=${o[t].id}&name=${o[t].name}`}))}}catch(t){alert("Failed to render projects list"),console.log(t)}})(),(()=>{try{const t=(()=>{try{return a.v6.landing}catch(t){alert("Failed to load landing details"),console.log(t)}})();for(let e in t)d(`landing-data-id--${e}`,t[e]);document.getElementById("main-title__logo-image").src=r(t.logoFilename)}catch(t){alert("Failed to render landing data"),console.log(t)}})(),(()=>{try{const t=n();d("about-data-id--aboutText",t.aboutText),((t,e,o="")=>{try{const a=document.getElementById(t);a.src=e,a.alt=o}catch(t){alert("Failed to load image"),console.log(t)}})("about-data-id--photo",r(t.photo.src),t.photo.alt)}catch(t){alert("Failed to render about data"),console.log(t)}})(),((t=!1)=>{try{const e=n(),o=document.getElementById("contact-details-wrapper");for(let a in e.contactDetails){const n=e.contactDetails[a];if(!t&&"main-message"===n.type){c(n.href);continue}const r=i("a",`contact-${n.name}`,n.name);r.href="media"===e.contactDetails[a].type?n.href:"mailto:"+n.href,r.target="_blank",o.appendChild(r)}}catch(t){alert("Failed to render contact details"),console.log(t)}})(),(0,s.V)(),(()=>{try{document.getElementById("back2top-Btn").addEventListener("click",l)}catch(t){alert("Failed to bind event to back to top button"),console.log(t)}})(),(()=>{try{document.getElementById("main-title__logo").addEventListener("click",(()=>{window.location.href="."}))}catch(t){alert("Failed to bind event to logo"),console.log(t)}})()}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={exports:{}};return e[t](r,r.exports,a),r.exports}a.m=e,t=[],a.O=(e,o,n,r)=>{if(!o){var l=1/0;for(s=0;s<t.length;s++){for(var[o,n,r]=t[s],c=!0,i=0;i<o.length;i++)(!1&r||l>=r)&&Object.keys(a.O).every((t=>a.O[t](o[i])))?o.splice(i--,1):(c=!1,r<l&&(l=r));if(c){t.splice(s--,1);var d=n();void 0!==d&&(e=d)}}return e}r=r||0;for(var s=t.length;s>0&&t[s-1][2]>r;s--)t[s]=t[s-1];t[s]=[o,n,r]},a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{var t={826:0};a.O.j=e=>0===t[e];var e=(e,o)=>{var n,r,[l,c,i]=o,d=0;if(l.some((e=>0!==t[e]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(i)var s=i(a)}for(e&&e(o);d<l.length;d++)r=l[d],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(s)},o=self.webpackChunkv2=self.webpackChunkv2||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var n=a.O(void 0,[521],(()=>a(71)));n=a.O(n)})();