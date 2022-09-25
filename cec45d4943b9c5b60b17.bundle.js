(()=>{"use strict";var t,e={7987:(t,e,n)=>{var o,a,i,c=n(5015),l=n(1189),r=n(5968),d=n(6970),s=n(9889),p=n(9512),u=JSON.parse(c),m=JSON.parse(l),f=r.Z,g=d.Z,v=s.Z,h=p.Z,y=(o=n(2446),a=new Map,o.keys().forEach((function(t){a.set(t.slice(2),o(t))})),a),b=function(t){try{var e=m.projectsDetails;return(e=e.filter((function(e){return e.id!=t.id}))).map((function(t){return{id:t.id,name:t.name,type:t.type}}))}catch(t){alert("Failed to load project list"),console.log(t)}},_=function(){try{return u.about}catch(t){alert("Failed to load about details"),console.log(t)}},I=function(){try{return u.footer}catch(t){alert("Failed to load footer details"),console.log(t)}},w=function(t){try{return y.get(t)}catch(t){alert("Failed to load image src"),console.log(t)}},x=function(){try{return f}catch(t){alert("Failed to load nav menu component content"),console.log(t)}},E=function(){try{return g}catch(t){alert("Failed to load logo component content"),console.log(t)}},j=function(){try{return h}catch(t){alert("Failed to load contact component content"),console.log(t)}},L=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=document.createElement(t);return Array.isArray(e)?e.map((function(t){o.classList.add(t)})):"string"==typeof e&&(o.className=e),n&&o.appendChild(document.createTextNode(n)),o},B=n(6452),F=function(t,e){document.querySelectorAll(t).forEach((function(t){return t.classList.remove(e+"--active")}))},k=function(){document.body.scrollIntoView({behavior:"smooth"})},C=function(){try{document.getElementById("back2top-Btn").addEventListener("click",k)}catch(t){alert("Failed to bind event to back to top button"),console.log(t)}},O=function(t){try{var e=void 0,n=!1,o=!1,a=document.getElementById("main-logo"),i=function(t){e=performance.now(),S("light"),F(".nav-menu__link","slideIn--bottom-up"),document.querySelectorAll(".slideIn--bottom-up--slow__nav-menu").forEach((function(t){return t.classList.add("slideIn--bottom-up--slow-2200ms--active")})),t.classList.add("overlay__nav-menu--toggleOn"),document.body.classList.add("disable-scroll"),a.classList.add("main-logo-position--light"),t.style.visibility="visible"};a.addEventListener("click",(function(){var c=document.getElementById("nav-menu");if(c.classList.contains("overlay__nav-menu--toggleOn")){n=!0;var l=!e||performance.now()-e>400?400:performance.now()-e;c.classList.remove("overlay__nav-menu--toggleOn"),setTimeout((function(){document.body.classList.remove("disable-scroll"),a.classList.remove("main-logo-position--light"),F(".slideIn--bottom-up--slow__nav-menu","slideIn--bottom-up--slow-2200ms"),c.style.visibility="hidden",S(t),n=!1,setTimeout((function(){o&&(o=!1,i(c))}),50)}),l)}else{if(n)return void(o=!0);i(c)}}))}catch(t){alert("Failed to bind event to logo"),console.log(t)}},T=function(t,e){try{var n=t;"string"==typeof t&&(n=document.getElementById(t)),n&&n.addEventListener("click",(function(){window.open(e,"_blank").focus()}))}catch(t){alert("Failed to bind event to contact link"),console.log(t)}},M=function(t){document.getElementById("nav-menu__home-nav-btn").addEventListener("click",(function(){window.location.href=t?"/":"../"})),document.getElementById("nav-menu__projects-nav-btn").addEventListener("click",(function(){window.location.href=t?"/projects-list":"../projects-list"})),document.getElementById("nav-menu__about-nav-btn").addEventListener("click",(function(){window.location.href=t?"/about":"../about"})),document.getElementById("nav-menu__photography-nav-btn").addEventListener("click",(function(){window.location.href=t?"/photography":"../photography"}))},N=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var e=_(),n=document.getElementById("contact-details-wrapper");for(var o in t&&(document.getElementById("contact-info__greating").style.display="none"),e.contactDetails){var a=e.contactDetails[o];if(t||"main-message"!==a.type){var i=L("a","contact-".concat(a.name),a.name);i.href="media"===e.contactDetails[o].type?a.href:"mailto:"+a.href,i.target="_blank",n.appendChild(i)}else T("about-data-id--main-message","mailto:"+a.href)}}catch(t){alert("Failed to render contact details"),console.log(t)}},S=function(t){var e=function(){try{return u.logo}catch(t){alert("Failed to load logo details"),console.log(t)}}();document.getElementById("logo-image").src=w(e[t]),document.getElementById("main-logo").style.transform="transparent"===t?"scale(0.7)":"scale(1)"},A=function(){try{var t=L("div","media-icon-flex-row"),e=_();for(var n in e.contactDetails){var o=e.contactDetails[n];if("main-message"!==o.type){var a=L("div",["hover-turn-bgcolor-blue","circle-shape","slideIn--bottom-up--slow__nav-menu","slideIn--bottom-up--slow-2200ms"]),i=L("i",["fa-brands","fa-".concat(o.name)]);T(a,o.href),a.appendChild(i),t.appendChild(a)}else{var c=L("div",["hover-turn-color-blue","contact-link--font-size","slideIn--bottom-up--slow__nav-menu","slideIn--bottom-up--slow-2200ms"],o.href);T(c,"mailto:"+o.href),document.getElementById("nav-menu-data-id__main-message").appendChild(c)}}document.getElementById("nav-menu-data-id__media").appendChild(t)}catch(t){alert("Failed to render nav menu"),console.log(t)}},D=(i=window.location.search,new URLSearchParams(i).get("id"));!function(){try{document.getElementsByTagName("title")[0].appendChild(document.createTextNode(function(){try{return u.landing}catch(t){alert("Failed to load landing details"),console.log(t)}}().fullName)),document.getElementById("favicon-link").href=w("favicon.ico")}catch(t){alert("Failed to render favicon"),console.log(t)}}(),function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{document.getElementById("__logo-component").innerHTML=E(),S(t),O(t),document.getElementById("__nav-menu-component").innerHTML=x(),A(),M(e)}catch(t){alert("Failed to render logo component"),console.log(t)}}("transparent"),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{!function(){var n=document.getElementById("projects-list-container");n.appendChild(L("div",["project-top-divider","slideIn--left2right__large-box"]));for(var o=b(e),a=function(e){var a=L("div",[t?"project--lite":"project","slideIn--left2right__large-box"]);a.setAttribute("id","project-"+o[e].id),a.appendChild(L("h1","project-name",o[e].name)),a.appendChild(L("span","project-type",o[e].type)),n.appendChild(a),a.addEventListener("click",(function(){window.location.href="project?id=".concat(o[e].id,"&name=").concat(o[e].name)}))},i=0;i<o.length;i++)a(i)}()}catch(t){alert("Failed to render projects list"),console.log(t)}}(!0,{id:D}),function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{document.getElementById("__contact-component").innerHTML=j(),N(t),C()}catch(t){alert("Failed to render contact component"),console.log(t)}}(!0),function(){try{document.getElementById("__footer-component").innerHTML=function(){try{return v}catch(t){alert("Failed to load footer component content"),console.log(t)}}(),document.getElementById("footer-data-id--rights-reserved").appendChild(document.createTextNode("©".concat(I().year," ").concat(I().rightsHolder," - All Rights Reserved")))}catch(t){alert("Failed to render footer component"),console.log(t)}}(),function(t){try{var e=function(t){try{return m.projectsDetails.find((function(e){return e.id==t}))}catch(t){alert("Failed to load project details"),console.log(t)}}(t),n=document.getElementById("project-detail-container");n.appendChild(L("div",["project-top-divider","slideIn--left2right__large-box"]));var o=L("div",["project-detail","slideIn--left2right__large-box"]);o.appendChild(L("h1","project-name",e.name)),o.appendChild(L("span","project-type",e.type)),n.appendChild(o);var a=L("div",["project-detail-description"]),i=null==(p=e.description)?void 0:p.split("\n");null==i||i.map((function(t){a.appendChild(L("div",["project-detail-description__p","slideIn--bottom-up--slow"],t))})),n.appendChild(a);for(var c=e.image,l=c.fileNames,r=0;r<l.length;r++){var d=L("img",["project-detail-img"]),s=w("".concat(c.folderName,"/").concat(l[r]));d.src=s,n.appendChild(d)}setTimeout((function(){(0,B.h)(".project-detail-img",{rootMargin:"-20px -20px -50px -20px",cb:function(t){t.classList.add("fadeIn--active")}})}),100)}catch(t){alert("Failed to render project deatils"),console.log(t)}var p}(D),function(t){try{var e=b({}),n=t<e.length?e.find((function(e){return e.id==parseInt(t)+1})):null,o=t>0?e.find((function(e){return e.id==t-1})):null,a=document.getElementById("next-project-Btn");n?a.href="?id=".concat(n.id,"&name=").concat(n.name):(a.style.visibility="hidden",function(){try{var t=document.getElementById("projects-list-nav"),e=L("a");e.href="../",e.appendChild(L("i",["fa-solid","fa-house"])),t.appendChild(e)}catch(t){alert("Failed to render back to home page btn"),console.log(t)}}());var i=document.getElementById("prev-project-Btn");o?i.href="?id=".concat(o.id,"&name=").concat(o.name):i.style.visibility="hidden"}catch(t){alert("Failed to bind event to project list navgiations"),console.log(t)}}(D),(0,B.h)(".fadeIn",{rootMargin:"-20px -20px -50px -20px",cb:function(t){t.classList.add("fadeIn--active")}}),(0,B.h)(".slideIn--left2right",{rootMargin:"0px -50px -50px -50px",cb:function(t){t.classList.add("slideIn--left2right--active")}}),(0,B.h)(".slideIn--right2left",{rootMargin:"-50px",cb:function(t){t.classList.add("slideIn--right2left--active")}}),(0,B.h)(".slideIn--bottom-up",{cb:function(t){t.classList.add("slideIn--bottom-up--active")}}),(0,B.h)(".slideIn--bottom-up--slow",{cb:function(t){t.classList.add("slideIn--bottom-up--slow--active")}}),(0,B.h)(".slideIn--bottom-up__large-box",{rootMargin:"0px -100px -100px -100px",cb:function(t){t.classList.add("slideIn--bottom-up__large-box--active")}}),(0,B.h)(".slideIn--left2right__large-box",{rootMargin:"-50px -100px -200px -100px",cb:function(t){t.classList.add("slideIn--left2right__large-box--active")}}),(0,B.h)(".fadeIn--slow",{rootMargin:"-20px -20px -50px -20px",cb:function(t){t.classList.add("fadeIn--slow--active")}}),(0,B.h)(".nav-menu__link",{cb:function(t){t.classList.add("slideIn--bottom-up--active")},isLooping:!0})}},n={};function o(t){var a=n[t];if(void 0!==a)return a.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,n,a,i)=>{if(!n){var c=1/0;for(s=0;s<t.length;s++){for(var[n,a,i]=t[s],l=!0,r=0;r<n.length;r++)(!1&i||c>=i)&&Object.keys(o.O).every((t=>o.O[t](n[r])))?n.splice(r--,1):(l=!1,i<c&&(c=i));if(l){t.splice(s--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,a,i]},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={242:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var a,i,[c,l,r]=n,d=0;if(c.some((e=>0!==t[e]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(r)var s=r(o)}for(e&&e(n);d<c.length;d++)i=c[d],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(s)},n=self.webpackChunkv2=self.webpackChunkv2||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var a=o.O(void 0,[680],(()=>o(7987)));a=o.O(a)})();