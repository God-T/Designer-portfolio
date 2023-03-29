/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_animation_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/animation.css */ \"./src/css/animation.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_nav_menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/nav-menu.css */ \"./src/css/nav-menu.css\");\n/* harmony import */ var _css_about_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/about.css */ \"./src/css/about.css\");\n/* harmony import */ var _css_about_page_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/about-page.css */ \"./src/css/about-page.css\");\n/* harmony import */ var _css_index_shared_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/index-shared.css */ \"./src/css/index-shared.css\");\n/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/footer.css */ \"./src/css/footer.css\");\n/* harmony import */ var _common_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/render.js */ \"./src/js/common/render.js\");\n/* harmony import */ var _common_animation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/animation.js */ \"./src/js/common/animation.js\");\n\n\n\n\n\n\n\n\n\n/* Render shared components */\n\n(0,_common_render_js__WEBPACK_IMPORTED_MODULE_7__.renderFavicon)();\n(0,_common_render_js__WEBPACK_IMPORTED_MODULE_7__.renderLogoComponent)('transparent');\n(0,_common_render_js__WEBPACK_IMPORTED_MODULE_7__.renderAboutComponent)();\n(0,_common_render_js__WEBPACK_IMPORTED_MODULE_7__.renderContactComponent)(true);\n(0,_common_render_js__WEBPACK_IMPORTED_MODULE_7__.renderFooterComponent)();\n/* Enable Animations */\n\n(0,_common_animation_js__WEBPACK_IMPORTED_MODULE_8__.bindGeneralAnimations)();\n\n//# sourceURL=webpack://v2/./src/js/about.js?");

/***/ }),

/***/ "./src/js/common/animation.js":
/*!************************************!*\
  !*** ./src/js/common/animation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bindGeneralAnimations\": () => (/* binding */ bindGeneralAnimations),\n/* harmony export */   \"bindNavMenuAnimation\": () => (/* binding */ bindNavMenuAnimation),\n/* harmony export */   \"resetAnimationStates\": () => (/* binding */ resetAnimationStates),\n/* harmony export */   \"triggerAnimation\": () => (/* binding */ triggerAnimation),\n/* harmony export */   \"triggerAnimationInTurn\": () => (/* binding */ triggerAnimationInTurn)\n/* harmony export */ });\n/* harmony import */ var _trigger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trigger.js */ \"./src/js/common/trigger.js\");\n\n\nvar testFunc = function testFunc(el) {\n  var rect = el.getBoundingClientRect();\n  var availableWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n  var availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n  console.log(el, rect.top, rect.right, rect.bottom, rect.left);\n  console.log(availableWidth, availableHeight);\n};\n\nvar bindGeneralAnimations = function bindGeneralAnimations() {\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.fadeIn', {\n    rootMargin: '-20px -20px -50px -20px',\n    cb: function cb(el) {\n      el.classList.add('fadeIn--active');\n    }\n  });\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.slideIn--left2right', {\n    rootMargin: '0px -50px -50px -50px',\n    cb: function cb(el) {\n      el.classList.add('slideIn--left2right--active');\n    }\n  });\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.slideIn--right2left', {\n    rootMargin: '-50px',\n    cb: function cb(el) {\n      el.classList.add('slideIn--right2left--active');\n    }\n  });\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.slideIn--bottom-up', {\n    cb: function cb(el) {\n      el.classList.add('slideIn--bottom-up--active');\n    }\n  });\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.slideIn--bottom-up--slow', {\n    cb: function cb(el) {\n      el.classList.add('slideIn--bottom-up--slow--active');\n    }\n  });\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.slideIn--bottom-up__large-box', {\n    rootMargin: '0px -100px -100px -100px',\n    cb: function cb(el) {\n      el.classList.add('slideIn--bottom-up__large-box--active');\n    }\n  });\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.slideIn--left2right__large-box', {\n    rootMargin: '-50px -100px -200px -100px',\n    cb: function cb(el) {\n      el.classList.add('slideIn--left2right__large-box--active');\n    }\n  });\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.fadeIn--slow', {\n    rootMargin: '-20px -20px -50px -20px',\n    cb: function cb(el) {\n      el.classList.add('fadeIn--slow--active');\n    }\n  });\n  bindNavMenuAnimation();\n};\nfunction bindNavMenuAnimation() {\n  (0,_trigger_js__WEBPACK_IMPORTED_MODULE_0__.scrollTrigger)('.nav-menu__link', {\n    cb: function cb(el) {\n      el.classList.add('slideIn--bottom-up--active');\n    },\n    isLooping: true\n  });\n}\nvar resetAnimationStates = function resetAnimationStates(targetSelecter, activedAnimationClass) {\n  document.querySelectorAll(targetSelecter).forEach(function (el) {\n    return el.classList.remove(activedAnimationClass + '--active');\n  });\n};\nvar triggerAnimation = function triggerAnimation(targetSelecter, animationClass) {\n  document.querySelectorAll(targetSelecter).forEach(function (el) {\n    return el.classList.add(animationClass + '--active');\n  });\n};\nvar triggerAnimationInTurn = function triggerAnimationInTurn(targetSelecter, animationClass, interval) {\n  document.querySelectorAll(targetSelecter).forEach(function (el, index) {\n    setTimeout(function () {\n      return el.classList.add(animationClass + '--active');\n    }, index * interval);\n  });\n};\n\n//# sourceURL=webpack://v2/./src/js/common/animation.js?");

/***/ }),

/***/ "./src/js/common/event.js":
/*!********************************!*\
  !*** ./src/js/common/event.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bindBackToTopBtnEvent\": () => (/* binding */ bindBackToTopBtnEvent),\n/* harmony export */   \"bindContactLinkClickEvent\": () => (/* binding */ bindContactLinkClickEvent),\n/* harmony export */   \"bindLogoClickEvent\": () => (/* binding */ bindLogoClickEvent),\n/* harmony export */   \"bindNavMenuBtnEvents\": () => (/* binding */ bindNavMenuBtnEvents),\n/* harmony export */   \"bindProjectsNavEvent\": () => (/* binding */ bindProjectsNavEvent)\n/* harmony export */ });\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/js/common/fetch.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/js/common/render.js\");\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.js */ \"./src/js/common/animation.js\");\n\n\n\n\nvar goToTop = function goToTop() {\n  document.body.scrollIntoView({\n    behavior: 'smooth'\n  });\n};\n\nvar bindBackToTopBtnEvent = function bindBackToTopBtnEvent() {\n  try {\n    var backToTopButton = document.getElementById('back2top-Btn');\n    backToTopButton.addEventListener('click', goToTop);\n  } catch (e) {\n    alert('Failed to bind event to back to top button');\n    console.log(e);\n  }\n};\nvar bindLogoClickEvent = function bindLogoClickEvent(defaultLogoTheme) {\n  try {\n    /* Enclose nav menu expanding time as parameter in event handler */\n    var expandingTime = void 0;\n    var shouldWait = false;\n    var shouldExpandAfterCollapse = false;\n    var collapseDuration = 400;\n    var logo = document.getElementById('main-logo');\n\n    var handleNavMenuCollapse = function handleNavMenuCollapse(navMenu) {\n      /* Turn on */\n      expandingTime = performance.now();\n      (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderLogo)('light');\n      /* Reset animation for nav links */\n\n      (0,_animation_js__WEBPACK_IMPORTED_MODULE_2__.resetAnimationStates)('.nav-menu__link', 'slideIn--bottom-up');\n      (0,_animation_js__WEBPACK_IMPORTED_MODULE_2__.triggerAnimation)('.slideIn--bottom-up--slow__nav-menu', 'slideIn--bottom-up--slow-2200ms');\n      navMenu.classList.add('overlay__nav-menu--toggleOn');\n      /* Change style of scrollbar to transparent */\n\n      document.body.classList.add('disable-scroll');\n      logo.classList.add('main-logo-position--light');\n      navMenu.style.visibility = 'visible';\n    };\n\n    logo.addEventListener('click', function () {\n      var navMenu = document.getElementById('nav-menu');\n\n      if (navMenu.classList.contains('overlay__nav-menu--toggleOn')) {\n        /* Turn off */\n        shouldWait = true;\n        var expandingLastsTime = !expandingTime || performance.now() - expandingTime > collapseDuration ? collapseDuration : performance.now() - expandingTime;\n        navMenu.classList.remove('overlay__nav-menu--toggleOn');\n        /* Change style of scrollbar back to black */\n\n        setTimeout(function () {\n          document.body.classList.remove('disable-scroll');\n          logo.classList.remove('main-logo-position--light');\n          (0,_animation_js__WEBPACK_IMPORTED_MODULE_2__.resetAnimationStates)('.slideIn--bottom-up--slow__nav-menu', 'slideIn--bottom-up--slow-2200ms');\n          navMenu.style.visibility = 'hidden';\n          (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderLogo)(defaultLogoTheme);\n          shouldWait = false;\n          setTimeout(function () {\n            if (shouldExpandAfterCollapse) {\n              shouldExpandAfterCollapse = false;\n              handleNavMenuCollapse(navMenu);\n            }\n          }, 50);\n        }, expandingLastsTime);\n      } else {\n        if (shouldWait) {\n          shouldExpandAfterCollapse = true;\n          return;\n        }\n\n        handleNavMenuCollapse(navMenu);\n      }\n    });\n  } catch (e) {\n    alert('Failed to bind event to logo');\n    console.log(e);\n  }\n};\nvar bindContactLinkClickEvent = function bindContactLinkClickEvent(elementRef, url) {\n  try {\n    var el = elementRef;\n    if (typeof elementRef === 'string') el = document.getElementById(elementRef);\n    if (el) el.addEventListener('click', function () {\n      window.open(url, '_blank').focus();\n    });\n  } catch (e) {\n    alert('Failed to bind event to contact link');\n    console.log(e);\n  }\n};\nvar bindProjectsNavEvent = function bindProjectsNavEvent(currentProjectId) {\n  try {\n    var projectList = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getProjectList)({});\n    var foundNext = currentProjectId < projectList.length ? projectList.find(function (p) {\n      return p.id == parseInt(currentProjectId) + 1;\n    }) : null;\n    var foundPrev = currentProjectId > 0 ? projectList.find(function (p) {\n      return p.id == currentProjectId - 1;\n    }) : null;\n    var nextBtn = document.getElementById('next-project-Btn');\n    if (foundNext) nextBtn.href = \"/project?id=\".concat(foundNext.id, \"&name=\").concat(foundNext.name);else {\n      nextBtn.style.visibility = 'hidden';\n    }\n    var prevBtn = document.getElementById('prev-project-Btn');\n    if (foundPrev) prevBtn.href = \"/project?id=\".concat(foundPrev.id, \"&name=\").concat(foundPrev.name);else prevBtn.style.visibility = 'hidden';\n  } catch (e) {\n    alert('Failed to bind event to project list navgiations');\n    console.log(e);\n  }\n};\nvar bindNavMenuBtnEvents = function bindNavMenuBtnEvents(isRoot) {\n  document.getElementById('nav-menu__home-nav-btn').addEventListener('click', function () {\n    window.location.href = '/';\n  });\n  document.getElementById('nav-menu__projects-nav-btn').addEventListener('click', function () {\n    window.location.href = '/projects-list';\n  });\n  document.getElementById('nav-menu__about-nav-btn').addEventListener('click', function () {\n    window.location.href = '/about';\n  });\n  document.getElementById('nav-menu__photography-nav-btn').addEventListener('click', function () {\n    window.location.href = '/photography';\n  });\n};\n\n//# sourceURL=webpack://v2/./src/js/common/event.js?");

/***/ }),

/***/ "./src/js/common/fetch.js":
/*!********************************!*\
  !*** ./src/js/common/fetch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAboutComponentHtmlContent\": () => (/* binding */ getAboutComponentHtmlContent),\n/* harmony export */   \"getAboutDetails\": () => (/* binding */ getAboutDetails),\n/* harmony export */   \"getContactComponentHtmlContent\": () => (/* binding */ getContactComponentHtmlContent),\n/* harmony export */   \"getFooterComponentHtmlContent\": () => (/* binding */ getFooterComponentHtmlContent),\n/* harmony export */   \"getFooterDetails\": () => (/* binding */ getFooterDetails),\n/* harmony export */   \"getImageSrc\": () => (/* binding */ getImageSrc),\n/* harmony export */   \"getLandingDetails\": () => (/* binding */ getLandingDetails),\n/* harmony export */   \"getLogoComponentHtmlContent\": () => (/* binding */ getLogoComponentHtmlContent),\n/* harmony export */   \"getLogoDetails\": () => (/* binding */ getLogoDetails),\n/* harmony export */   \"getNavMenuComponentHtmlContent\": () => (/* binding */ getNavMenuComponentHtmlContent),\n/* harmony export */   \"getPhotographyDetails\": () => (/* binding */ getPhotographyDetails),\n/* harmony export */   \"getProjectDetails\": () => (/* binding */ getProjectDetails),\n/* harmony export */   \"getProjectList\": () => (/* binding */ getProjectList),\n/* harmony export */   \"getVideoSrc\": () => (/* binding */ getVideoSrc)\n/* harmony export */ });\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ \"./src/js/common/load.js\");\n\nvar getProjectList = function getProjectList(except) {\n  try {\n    var list = _load_js__WEBPACK_IMPORTED_MODULE_0__.projectsDetails.projectsDetails;\n    list = list.filter(function (p) {\n      return p.id != except.id;\n    });\n    var res = list.map(function (p) {\n      return {\n        id: p.id,\n        name: p.name,\n        type: p.type\n      };\n    });\n    return res;\n  } catch (e) {\n    alert('Failed to load project list');\n    console.log(e);\n  }\n};\nvar getProjectDetails = function getProjectDetails(id) {\n  try {\n    var list = _load_js__WEBPACK_IMPORTED_MODULE_0__.projectsDetails.projectsDetails;\n    var res = list.find(function (p) {\n      return p.id == id;\n    });\n    return res;\n  } catch (e) {\n    alert('Failed to load project details');\n    console.log(e);\n  }\n};\nvar getLandingDetails = function getLandingDetails() {\n  try {\n    var res = _load_js__WEBPACK_IMPORTED_MODULE_0__.personalDetails.landing;\n    return res;\n  } catch (e) {\n    alert('Failed to load landing details');\n    console.log(e);\n  }\n};\nvar getLogoDetails = function getLogoDetails() {\n  try {\n    var res = _load_js__WEBPACK_IMPORTED_MODULE_0__.personalDetails.logo;\n    return res;\n  } catch (e) {\n    alert('Failed to load logo details');\n    console.log(e);\n  }\n};\nvar getAboutDetails = function getAboutDetails() {\n  try {\n    var res = _load_js__WEBPACK_IMPORTED_MODULE_0__.personalDetails.about;\n    return res;\n  } catch (e) {\n    alert('Failed to load about details');\n    console.log(e);\n  }\n};\nvar getPhotographyDetails = function getPhotographyDetails() {\n  try {\n    var res = _load_js__WEBPACK_IMPORTED_MODULE_0__.personalDetails.photography;\n    return res;\n  } catch (e) {\n    alert('Failed to load photography details');\n    console.log(e);\n  }\n};\nvar getFooterDetails = function getFooterDetails() {\n  try {\n    var res = _load_js__WEBPACK_IMPORTED_MODULE_0__.personalDetails.footer;\n    return res;\n  } catch (e) {\n    alert('Failed to load footer details');\n    console.log(e);\n  }\n};\nvar getImageSrc = function getImageSrc(path) {\n  try {\n    return _load_js__WEBPACK_IMPORTED_MODULE_0__.imageFramesMap.get(path);\n  } catch (e) {\n    alert('Failed to load image src');\n    console.log(e);\n  }\n};\nvar getVideoSrc = function getVideoSrc(path) {\n  try {\n    return _load_js__WEBPACK_IMPORTED_MODULE_0__.videoFramesMap.get(path);\n  } catch (e) {\n    alert('Failed to load video src');\n    console.log(e);\n  }\n};\nvar getAboutComponentHtmlContent = function getAboutComponentHtmlContent() {\n  try {\n    return _load_js__WEBPACK_IMPORTED_MODULE_0__.aboutComponentHtmlContent;\n  } catch (e) {\n    alert('Failed to load about component content');\n    console.log(e);\n  }\n};\nvar getNavMenuComponentHtmlContent = function getNavMenuComponentHtmlContent() {\n  try {\n    return _load_js__WEBPACK_IMPORTED_MODULE_0__.navMenuComponentHtmlContent;\n  } catch (e) {\n    alert('Failed to load nav menu component content');\n    console.log(e);\n  }\n};\nvar getLogoComponentHtmlContent = function getLogoComponentHtmlContent() {\n  try {\n    return _load_js__WEBPACK_IMPORTED_MODULE_0__.logoComponentHtmlContent;\n  } catch (e) {\n    alert('Failed to load logo component content');\n    console.log(e);\n  }\n};\nvar getFooterComponentHtmlContent = function getFooterComponentHtmlContent() {\n  try {\n    return _load_js__WEBPACK_IMPORTED_MODULE_0__.footerComponentHtmlContent;\n  } catch (e) {\n    alert('Failed to load footer component content');\n    console.log(e);\n  }\n};\nvar getContactComponentHtmlContent = function getContactComponentHtmlContent() {\n  try {\n    return _load_js__WEBPACK_IMPORTED_MODULE_0__.contactComponentHtmlContent;\n  } catch (e) {\n    alert('Failed to load contact component content');\n    console.log(e);\n  }\n};\n\n//# sourceURL=webpack://v2/./src/js/common/fetch.js?");

/***/ }),

/***/ "./src/js/common/load.js":
/*!*******************************!*\
  !*** ./src/js/common/load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutComponentHtmlContent\": () => (/* binding */ aboutComponentHtmlContent),\n/* harmony export */   \"contactComponentHtmlContent\": () => (/* binding */ contactComponentHtmlContent),\n/* harmony export */   \"footerComponentHtmlContent\": () => (/* binding */ footerComponentHtmlContent),\n/* harmony export */   \"imageFramesMap\": () => (/* binding */ imageFramesMap),\n/* harmony export */   \"logoComponentHtmlContent\": () => (/* binding */ logoComponentHtmlContent),\n/* harmony export */   \"navMenuComponentHtmlContent\": () => (/* binding */ navMenuComponentHtmlContent),\n/* harmony export */   \"personalDetails\": () => (/* binding */ personalDetails),\n/* harmony export */   \"projectsDetails\": () => (/* binding */ projectsDetails),\n/* harmony export */   \"videoFramesMap\": () => (/* binding */ videoFramesMap)\n/* harmony export */ });\n/* harmony import */ var _assets_json_personalDetails_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/json/personalDetails.json */ \"./src/assets/json/personalDetails.json\");\n/* harmony import */ var _assets_json_projectsDetails_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/json/projectsDetails.json */ \"./src/assets/json/projectsDetails.json\");\n/* harmony import */ var _html_components_about_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/components/about.component.html */ \"./src/html/components/about.component.html\");\n/* harmony import */ var _html_components_nav_menu_component_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../html/components/nav-menu.component.html */ \"./src/html/components/nav-menu.component.html\");\n/* harmony import */ var _html_components_logo_component_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../html/components/logo.component.html */ \"./src/html/components/logo.component.html\");\n/* harmony import */ var _html_components_footer_component_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../html/components/footer.component.html */ \"./src/html/components/footer.component.html\");\n/* harmony import */ var _html_components_contact_component_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../html/components/contact.component.html */ \"./src/html/components/contact.component.html\");\n/* Caputure by Webpack */\n\n\n\n\n\n\n\n/* Export data as json objects */\n\nvar personalDetails = JSON.parse(_assets_json_personalDetails_json__WEBPACK_IMPORTED_MODULE_0__);\nvar projectsDetails = JSON.parse(_assets_json_projectsDetails_json__WEBPACK_IMPORTED_MODULE_1__);\n/* Export shared HTML content */\n\nvar aboutComponentHtmlContent = _html_components_about_component_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nvar navMenuComponentHtmlContent = _html_components_nav_menu_component_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nvar logoComponentHtmlContent = _html_components_logo_component_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nvar footerComponentHtmlContent = _html_components_footer_component_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nvar contactComponentHtmlContent = _html_components_contact_component_html__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n/**\r\n * Load all images\r\n * @param {Function} context - require.context\r\n * @returns {Array<string>} all images\r\n */\n\nfunction loadFrames(context) {\n  var framesMap = new Map();\n  context.keys().forEach(function (k) {\n    framesMap.set(k.slice(2), context(k));\n  });\n  return framesMap;\n}\n/* Export images from map with input path */\n\n\nvar imageFramesMap = loadFrames(__webpack_require__(\"./src/assets/images sync recursive \\\\.(png%7Cjpg%7Cico%7Cgif)$\"));\nvar videoFramesMap = loadFrames(__webpack_require__(\"./src/assets/videos sync recursive \\\\.(mp4)$\")); // require.context(\n//     directory: String,\n//     includeSubdirs: Boolean /* default: true */,\n//     filter: RegExp /* default: /^\\.\\/.*$/，all files */,\n//     mode: String  /* 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once'，default: 'sync' */\n// )\n\n/* Alternative way to load images*/\n// const loadImagesForWebpack = () => {\n//     const aboutImg = personalDetails.about.photo.src;\n//     import(`../../assets/images/about.jpg`);\n//     projectsDetails.projectDetails.map(p => {\n//         const folderName = p.image.folderName;\n//         const fileNames = p.image.fileNames;\n//         fileNames.map(img => {\n//             import(`../../assets/images/${folderName}/${img}`);\n//         });\n//     });\n// };\n// loadImagesForWebpack();\n\n//# sourceURL=webpack://v2/./src/js/common/load.js?");

/***/ }),

/***/ "./src/js/common/render.js":
/*!*********************************!*\
  !*** ./src/js/common/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAboutComponent\": () => (/* binding */ renderAboutComponent),\n/* harmony export */   \"renderAboutData\": () => (/* binding */ renderAboutData),\n/* harmony export */   \"renderBackToHomePageBtn\": () => (/* binding */ renderBackToHomePageBtn),\n/* harmony export */   \"renderContactComponent\": () => (/* binding */ renderContactComponent),\n/* harmony export */   \"renderContactDetails\": () => (/* binding */ renderContactDetails),\n/* harmony export */   \"renderFavicon\": () => (/* binding */ renderFavicon),\n/* harmony export */   \"renderFooterComponent\": () => (/* binding */ renderFooterComponent),\n/* harmony export */   \"renderLandingData\": () => (/* binding */ renderLandingData),\n/* harmony export */   \"renderLogo\": () => (/* binding */ renderLogo),\n/* harmony export */   \"renderLogoComponent\": () => (/* binding */ renderLogoComponent),\n/* harmony export */   \"renderNavMenuContactDetails\": () => (/* binding */ renderNavMenuContactDetails),\n/* harmony export */   \"renderPhotography\": () => (/* binding */ renderPhotography),\n/* harmony export */   \"renderProjectDetails\": () => (/* binding */ renderProjectDetails),\n/* harmony export */   \"renderProjectsList\": () => (/* binding */ renderProjectsList)\n/* harmony export */ });\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/js/common/fetch.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/js/common/util.js\");\n/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ \"./src/js/common/event.js\");\n/* harmony import */ var _trigger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger.js */ \"./src/js/common/trigger.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar setImgSrcById = function setImgSrcById(id, imgFileName) {\n  var alt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n\n  try {\n    var imgEl = document.getElementById(id);\n    imgEl.src = imgFileName;\n    imgEl.alt = alt;\n  } catch (e) {\n    alert('Failed to load image');\n    console.log(e);\n  }\n};\n\nvar renderBackToHomePageBtn = function renderBackToHomePageBtn() {\n  try {\n    var navBar = document.getElementById('projects-list-nav');\n    var a = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('a');\n    a.href = '../';\n    a.appendChild((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('i', ['fa-solid', 'fa-house']));\n    navBar.appendChild(a);\n  } catch (e) {\n    alert('Failed to render back to home page btn');\n    console.log(e);\n  }\n};\n/***************************************************************\r\n                        Index Page\r\n***************************************************************/\n\nvar renderLandingData = function renderLandingData() {\n  try {\n    var data = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getLandingDetails)();\n\n    for (var key in data) {\n      (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.setTextById)(\"landing-data-id--\".concat(key), data[key]);\n    }\n  } catch (e) {\n    alert('Failed to render landing data');\n    console.log(e);\n  }\n};\n/***************************************************************\r\n                        Project page\r\n***************************************************************/\n\nvar renderProjectDetails = function renderProjectDetails(projectID) {\n  try {\n    var projectDetails = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getProjectDetails)(projectID);\n    var projectDetailElement = document.getElementById('project-detail-container');\n    /* Render divider */\n\n    projectDetailElement.appendChild((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', ['project-top-divider', 'slideIn--left2right__large-box']));\n    /* Render project */\n\n    var project = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', ['project-detail', 'slideIn--left2right__large-box']);\n    project.appendChild((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('h1', 'project-name', projectDetails.name));\n    project.appendChild((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('span', 'project-type', projectDetails.type));\n    projectDetailElement.appendChild(project);\n    /* Render description */\n\n    var descriptionEle = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', ['project-detail-description']);\n    var paragraphs = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createParagraphsWithNewLinekey)(projectDetails.description);\n    paragraphs === null || paragraphs === void 0 ? void 0 : paragraphs.map(function (p) {\n      descriptionEle.appendChild((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', ['project-detail-description__p', 'slideIn--bottom-up--slow'], p));\n    });\n    projectDetailElement.appendChild(descriptionEle);\n    /* Render video */\n\n    var videoData = projectDetails.video;\n\n    if (videoData !== undefined) {\n      var videoFileNames = videoData.files.map(function (file) {\n        return file.name;\n      });\n\n      for (var i = 0; i < videoFileNames.length; i++) {\n        var videoSrc = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getVideoSrc)(\"\".concat(videoData.folderName, \"/\").concat(videoFileNames[i]));\n        var sourceElem = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('source');\n        var videoElem = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('video', ['project-detail-img']);\n        sourceElem.src = videoSrc;\n\n        for (var _i = 0, _Object$entries = Object.entries(videoData.files[i].playOption); _i < _Object$entries.length; _i++) {\n          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n              key = _Object$entries$_i[0],\n              value = _Object$entries$_i[1];\n\n          videoElem.setAttribute(key, value);\n        }\n\n        videoElem.appendChild(sourceElem);\n        projectDetailElement.appendChild(videoElem);\n      }\n    }\n    /* Render image */\n\n\n    var imageData = projectDetails.image;\n    var fileNames = imageData.fileNames;\n\n    for (var _i2 = 0; _i2 < fileNames.length; _i2++) {\n      var projectImg = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('img', ['project-detail-img']);\n      var imageSrc = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getImageSrc)(\"\".concat(imageData.folderName, \"/\").concat(fileNames[_i2]));\n      projectImg.src = imageSrc;\n      projectDetailElement.appendChild(projectImg);\n    }\n    /**\r\n     * In project details page, before the image content is rendered, the image element will\r\n     * have 0 height, and this always causes the cb() to be executed, so to work around this,\r\n     * delay subscriptions by setting a timeout to allow the observers to observe the images\r\n     * elements after the image content has been rendered.\r\n     */\n\n\n    setTimeout(function () {\n      (0,_trigger_js__WEBPACK_IMPORTED_MODULE_3__.scrollTrigger)('.project-detail-img', {\n        rootMargin: '-20px -20px -50px -20px',\n        cb: function cb(el) {\n          /**\r\n           * The min height of the first image will be set to 100vh to push the other images out of\r\n           * the viewport, preventing the observer from triggering the cb(). Therefore, as elements\r\n           * enter the viewport, we need to remove the min height.\r\n           */\n          // el.style.minHeight = '0';\n          el.classList.add('fadeIn--active');\n        }\n      });\n    }, 100);\n  } catch (e) {\n    alert('Failed to render project deatils');\n    console.log(e);\n  }\n};\n/***************************************************************\r\n                        Photography Page\r\n***************************************************************/\n\nvar renderPhotography = function renderPhotography() {\n  var photographyDetails = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getPhotographyDetails)();\n  /* Render image */\n\n  var fileNames = photographyDetails.fileNames;\n\n  for (var i = 0; i < fileNames.length; i++) {\n    var img = document.getElementById(\"photography-data-id__\".concat(fileNames[i].id));\n    var imageSrc = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getImageSrc)(\"\".concat(photographyDetails.folderName, \"/\").concat(fileNames[i].name));\n    img.src = imageSrc;\n  }\n};\n/***************************************************************\r\n                        Favicon Component\r\n***************************************************************/\n\nvar renderFavicon = function renderFavicon() {\n  try {\n    var title = document.getElementsByTagName('title')[0];\n    title.appendChild(document.createTextNode((0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getLandingDetails)().fullName));\n    var fav = document.getElementById('favicon-link');\n    fav.href = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getImageSrc)('favicon.ico');\n  } catch (e) {\n    alert('Failed to render favicon');\n    console.log(e);\n  }\n};\n/***************************************************************\r\n                        Project List Component\r\n***************************************************************/\n\nvar renderProjectsList = function renderProjectsList(isLite, isRoot) {\n  var except = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  try {\n    (function () {\n      var projectListElement = document.getElementById('projects-list-container');\n      /* Render divider */\n\n      projectListElement.appendChild((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', ['project-top-divider', 'slideIn--left2right__large-box']));\n      /* Render projects */\n\n      var projectList = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getProjectList)(except);\n\n      var _loop = function _loop(i) {\n        var project = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', [isLite ? 'project--lite' : 'project', 'slideIn--left2right__large-box']);\n        project.setAttribute('id', 'project-' + projectList[i].id);\n        project.appendChild((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('h1', 'project-name', projectList[i].name));\n        project.appendChild((0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('span', 'project-type', projectList[i].type));\n        projectListElement.appendChild(project);\n        project.addEventListener('click', function () {\n          window.location.href = \"/project?id=\".concat(projectList[i].id, \"&name=\").concat(projectList[i].name);\n        });\n      };\n\n      for (var i = 0; i < projectList.length; i++) {\n        _loop(i);\n      }\n    })();\n  } catch (e) {\n    alert('Failed to render projects list');\n    console.log(e);\n  }\n};\n/***************************************************************\r\n                        About Component\r\n***************************************************************/\n\nvar renderAboutComponent = function renderAboutComponent() {\n  try {\n    document.getElementById('__about-component').innerHTML = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getAboutComponentHtmlContent)();\n    renderAboutData();\n  } catch (e) {\n    alert('Failed to render about component');\n    console.log(e);\n  }\n};\nvar renderAboutData = function renderAboutData() {\n  try {\n    var data = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getAboutDetails)();\n    (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.setTextById)('about-data-id--aboutText', data.aboutText);\n    var container = document.getElementById('about-data-id--photo');\n    var aboutImg = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('img', 'slideIn--bottom-up__large-box');\n    aboutImg.src = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getImageSrc)(data.photo.src);\n    container.appendChild(aboutImg);\n  } catch (e) {\n    alert('Failed to render about data');\n    console.log(e);\n  }\n};\n/***************************************************************\r\n                        Contact Component\r\n***************************************************************/\n\nvar renderContactComponent = function renderContactComponent() {\n  var shouldRenderMainMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n  try {\n    document.getElementById('__contact-component').innerHTML = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getContactComponentHtmlContent)();\n    renderContactDetails(shouldRenderMainMessage);\n    (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.bindBackToTopBtnEvent)();\n  } catch (e) {\n    alert('Failed to render contact component');\n    console.log(e);\n  }\n};\nvar renderContactDetails = function renderContactDetails() {\n  var shouldRenderMainMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n  try {\n    var data = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getAboutDetails)();\n    var container = document.getElementById('contact-details-wrapper');\n    if (shouldRenderMainMessage) document.getElementById('contact-info__greating').style.display = 'none';\n\n    for (var i in data.contactDetails) {\n      var contact = data.contactDetails[i];\n\n      if (!shouldRenderMainMessage && contact.type === 'main-message') {\n        (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.bindContactLinkClickEvent)('about-data-id--main-message', 'mailto:' + contact.href);\n        continue;\n      }\n\n      var a = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('a', \"contact-\".concat(contact.name), contact.name);\n      a.href = data.contactDetails[i].type === 'media' ? contact.href : 'mailto:' + contact.href;\n      /* Set to open a new tab */\n\n      a.target = '_blank';\n      container.appendChild(a);\n    }\n  } catch (e) {\n    alert('Failed to render contact details');\n    console.log(e);\n  }\n};\n/***************************************************************\r\n                        Logo Component\r\n***************************************************************/\n\nvar renderLogoComponent = function renderLogoComponent(logoTheme) {\n  var isRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  try {\n    /* Render logo */\n    document.getElementById('__logo-component').innerHTML = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getLogoComponentHtmlContent)();\n    renderLogo(logoTheme);\n    (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.bindLogoClickEvent)(logoTheme);\n    /* Render nav menu */\n\n    document.getElementById('__nav-menu-component').innerHTML = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getNavMenuComponentHtmlContent)();\n    renderNavMenuContactDetails();\n    (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.bindNavMenuBtnEvents)(isRoot);\n  } catch (e) {\n    alert('Failed to render logo component');\n    console.log(e);\n  }\n};\nvar renderLogo = function renderLogo(theme) {\n  var logoData = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getLogoDetails)();\n  var logo = document.getElementById('logo-image');\n  logo.src = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getImageSrc)(logoData[theme]);\n  var logoWrapper = document.getElementById('main-logo');\n  if (theme === 'transparent') logoWrapper.style.transform = 'scale(0.7)';else logoWrapper.style.transform = 'scale(1)';\n};\nvar renderNavMenuContactDetails = function renderNavMenuContactDetails() {\n  try {\n    var mediaFlexWrapper = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', 'media-icon-flex-row');\n    var data = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getAboutDetails)();\n\n    for (var i in data.contactDetails) {\n      var contact = data.contactDetails[i];\n\n      if (contact.type === 'main-message') {\n        var message = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', ['hover-turn-color-blue', 'contact-link--font-size', 'slideIn--bottom-up--slow__nav-menu', 'slideIn--bottom-up--slow-2200ms'], contact.href);\n        (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.bindContactLinkClickEvent)(message, 'mailto:' + contact.href);\n        var messageContainer = document.getElementById('nav-menu-data-id__main-message');\n        messageContainer.appendChild(message);\n        continue;\n      }\n\n      var media = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('div', ['hover-turn-bgcolor-blue', 'circle-shape', 'slideIn--bottom-up--slow__nav-menu', 'slideIn--bottom-up--slow-2200ms']);\n      var icon = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.createNewElement)('i', ['fa-brands', \"fa-\".concat(contact.name)]);\n      (0,_event_js__WEBPACK_IMPORTED_MODULE_2__.bindContactLinkClickEvent)(media, contact.href);\n      media.appendChild(icon);\n      mediaFlexWrapper.appendChild(media);\n    }\n\n    var mediaContainer = document.getElementById('nav-menu-data-id__media');\n    mediaContainer.appendChild(mediaFlexWrapper);\n  } catch (e) {\n    alert('Failed to render nav menu');\n    console.log(e);\n  }\n};\n/***************************************************************\r\n                        Footer Component\r\n***************************************************************/\n\nvar renderFooterComponent = function renderFooterComponent() {\n  try {\n    document.getElementById('__footer-component').innerHTML = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getFooterComponentHtmlContent)();\n    document.getElementById('footer-data-id--rights-reserved').appendChild(document.createTextNode(\"\\xA9\".concat((0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getFooterDetails)().year, \" \").concat((0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getFooterDetails)().rightsHolder, \" - All Rights Reserved\")));\n  } catch (e) {\n    alert('Failed to render footer component');\n    console.log(e);\n  }\n};\n\n//# sourceURL=webpack://v2/./src/js/common/render.js?");

/***/ }),

/***/ "./src/js/common/trigger.js":
/*!**********************************!*\
  !*** ./src/js/common/trigger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollTrigger\": () => (/* binding */ scrollTrigger)\n/* harmony export */ });\nfunction scrollTrigger(selector, options) {\n  var forward = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n  var els = document.querySelectorAll(selector);\n  /* NodeList to Array */\n\n  els = Array.from(els);\n  els.forEach(function (el) {\n    /* Excute forward callback */\n    forward(el);\n    /* Add trigger observers */\n\n    addObserver(el, options);\n  });\n}\n\nfunction addObserver(el, options) {\n  /* Check if \"IntersectionObserver\" is supported */\n  if (!('IntersectionObserver' in window)) {\n    /* Call/trigger  animation/callback immediately */\n    alert('\"IntersectionObserver\" is supported');\n    if (options.cb) options.cb(el);\n    return;\n  }\n\n  var observer = new IntersectionObserver(function (entries, observer) {\n    entries.forEach(function (entry) {\n      /* Check if element in view */\n      if (entry.isIntersecting) {\n        /* Excute callback */\n        if (options.cb) options.cb(el);\n        /* Unsubscribe observer*/\n\n        if (!options.isLooping) observer.unobserve(entry.target);\n      }\n    });\n  }, options);\n  /* Start observing */\n\n  observer.observe(el);\n}\n\n//# sourceURL=webpack://v2/./src/js/common/trigger.js?");

/***/ }),

/***/ "./src/js/common/util.js":
/*!*******************************!*\
  !*** ./src/js/common/util.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewElement\": () => (/* binding */ createNewElement),\n/* harmony export */   \"createParagraphsWithNewLinekey\": () => (/* binding */ createParagraphsWithNewLinekey),\n/* harmony export */   \"setTextById\": () => (/* binding */ setTextById)\n/* harmony export */ });\nfunction createParagraphsWithNewLinekey(text) {\n  return text === null || text === void 0 ? void 0 : text.split('\\n');\n}\nvar createNewElement = function createNewElement(tagType, classNames) {\n  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var newEl = document.createElement(tagType);\n  /* Create class name(s) */\n\n  if (Array.isArray(classNames)) classNames.map(function (name) {\n    newEl.classList.add(name);\n  });else if (typeof classNames === 'string') newEl.className = classNames;\n  /* Create Text */\n\n  if (content) newEl.appendChild(document.createTextNode(content));\n  return newEl;\n};\nvar setTextById = function setTextById(id) {\n  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var el = document.getElementById(id);\n  if (el) el.textContent = content;\n};\n\n//# sourceURL=webpack://v2/./src/js/common/util.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/about-page.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/about-page.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container--at-least-100vh {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    min-height: 100vh;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.about {\\r\\n    display: flex;\\r\\n    flex: 70%;\\r\\n    margin-top: 70px;\\r\\n}\\r\\n\\r\\n.contact-info {\\r\\n    flex: 30%;\\r\\n    border-top: 4px solid #959595;\\r\\n    padding: 40px 0;\\r\\n}\\r\\n\\r\\n#back2top-Btn {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 1 / 1), screen and (max-width: 770px) {\\r\\n    .about-content-wrapper h5 {\\r\\n        margin-right: 0;\\r\\n        text-align: justify;\\r\\n    }\\r\\n\\r\\n    .about-photo-wrapper {\\r\\n        margin-top: 30px;\\r\\n    }\\r\\n\\r\\n    .about {\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    .contact-info {\\r\\n        padding: 40px 0;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/about-page.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/about.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/about.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./animation.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/animation.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./contact.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/contact.css\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".about-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.about {\\r\\n    display: flex;\\r\\n    flex: 70%;\\r\\n}\\r\\n\\r\\n.about-content-wrapper {\\r\\n    flex: 1 1 70%;\\r\\n}\\r\\n\\r\\n.about-content-wrapper h1 {\\r\\n    margin: 0;\\r\\n    width: 80%;\\r\\n    font-size: 3vw;\\r\\n    font-weight: 700;\\r\\n    line-height: 3.7vw;\\r\\n}\\r\\n\\r\\n.about-content-wrapper h5 {\\r\\n    font-size: 1.6vw;\\r\\n    color: #a0a09f;\\r\\n    margin-top: 4.5vw;\\r\\n    margin-right: 5.5vw;\\r\\n    font-weight: normal;\\r\\n}\\r\\n\\r\\n.about-photo-wrapper {\\r\\n    flex: 1 1 30%;\\r\\n}\\r\\n\\r\\n.about-photo-wrapper img {\\r\\n    height: 25vw;\\r\\n    width: 100%;\\r\\n    object-fit: contain;\\r\\n    margin-left: 1vw;\\r\\n}\\r\\n\\r\\n/* Viewports Responsiveness  */\\r\\n@media (max-aspect-ratio: 160/100) {\\r\\n    .about-content-wrapper h5 {\\r\\n        font-size: 2vw;\\r\\n    }\\r\\n\\r\\n    .about-photo-wrapper img {\\r\\n        height: 30vw;\\r\\n    }\\r\\n\\r\\n    .about {\\r\\n        margin-bottom: 0;\\r\\n    }\\r\\n\\r\\n    .about-content-wrapper h1 {\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 1/1), screen and (max-width: 770px) {\\r\\n    .about {\\r\\n        flex-direction: column;\\r\\n        margin: 5vw 8vw 3vw 8vw;\\r\\n    }\\r\\n\\r\\n    .about-content-wrapper {\\r\\n        flex: 0 0 0;\\r\\n    }\\r\\n\\r\\n    .about-content-wrapper h5 {\\r\\n        font-size: 3.5vw;\\r\\n        margin-right: 23vw;\\r\\n        margin-bottom: 0;\\r\\n    }\\r\\n\\r\\n    .about-content-wrapper h1 {\\r\\n        font-weight: 700;\\r\\n        font-size: 5.5vw;\\r\\n    }\\r\\n\\r\\n    .about-photo-wrapper {\\r\\n        display: flex;\\r\\n        justify-content: flex-end;\\r\\n        margin-bottom: 30px;\\r\\n    }\\r\\n\\r\\n    .about-photo-wrapper img {\\r\\n        height: 50vw;\\r\\n        width: fit-content;\\r\\n        margin-top: 5px !important;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 0.45), screen and (max-width: 450px) {\\r\\n    .about-photo-wrapper {\\r\\n        margin-bottom: 20px;\\r\\n    }\\r\\n\\r\\n    .about-photo-wrapper img {\\r\\n        height: 65vw;\\r\\n        width: auto;\\r\\n        margin-top: 5vw;\\r\\n    }\\r\\n\\r\\n    .about-content-wrapper h5 {\\r\\n        font-size: 4.5vw;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/about.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/animation.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/animation.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".fadeIn,\\r\\n.fadeIn--slow,\\r\\n.slideIn--left2right,\\r\\n.slideIn--right2left,\\r\\n.slideIn--bottom-up,\\r\\n.slideIn--bottom-up--slow,\\r\\n.slideIn--bottom-up--slow-2200ms,\\r\\n.slideIn--bottom-up--slow--reverse,\\r\\n.slideIn--bottom-up__large-box,\\r\\n.slideIn--left2right__large-box {\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n.fadeIn--active {\\r\\n    animation: fadeIn 1.8s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.fadeIn--slow--active {\\r\\n    animation: fadeIn 2.5s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.slideIn--left2right--active {\\r\\n    animation: slideIn--left2right 2s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.slideIn--right2left--active {\\r\\n    animation: slideIn--right2left 2s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.slideIn--bottom-up__large-box--active {\\r\\n    animation: slideIn--bottom-up 1.5s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.slideIn--bottom-up--active {\\r\\n    animation: slideIn--bottom-up 1s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.slideIn--bottom-up--slow--active {\\r\\n    animation: slideIn--bottom-up 2s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.slideIn--bottom-up--slow-2200ms--active {\\r\\n    animation: slideIn--bottom-up 2.2s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.slideIn--bottom-up--slow--reverse--active {\\r\\n    animation: slideIn--bottom-up--reverse 2s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n.slideIn--left2right__large-box--active {\\r\\n    animation: slideIn--left2right__large-box 2s forwards;\\r\\n    animation-iteration-count: 1;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes slideIn--left2right {\\r\\n    0% {\\r\\n        opacity: 0;\\r\\n        transform: translateX(-222px);\\r\\n    }\\r\\n    20% {\\r\\n        opacity: 0;\\r\\n        transform: translateX(-222px);\\r\\n    }\\r\\n    30% {\\r\\n        opacity: 1;\\r\\n    }\\r\\n    50% {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0);\\r\\n    }\\r\\n    100% {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0);\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes slideIn--left2right {\\r\\n    0% {\\r\\n        opacity: 0;\\r\\n        transform: translateX(-222px);\\r\\n    }\\r\\n    20% {\\r\\n        opacity: 0;\\r\\n        transform: translateX(-222px);\\r\\n    }\\r\\n    30% {\\r\\n        opacity: 1;\\r\\n    }\\r\\n    50% {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0);\\r\\n    }\\r\\n    100% {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0);\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes slideIn--right2left {\\r\\n    0% {\\r\\n        opacity: 0;\\r\\n        transform: translateX(222px);\\r\\n    }\\r\\n    20% {\\r\\n        opacity: 0;\\r\\n        transform: translateX(222px);\\r\\n    }\\r\\n    30% {\\r\\n        opacity: 1;\\r\\n    }\\r\\n    50% {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0);\\r\\n    }\\r\\n    100% {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0);\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes slideIn--left2right__large-box {\\r\\n    0% {\\r\\n        opacity: 0;\\r\\n        transform: translateX(-80vw);\\r\\n    }\\r\\n    20% {\\r\\n        opacity: 1;\\r\\n    }\\r\\n    60% {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0);\\r\\n    }\\r\\n    100% {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0);\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes slideIn--bottom-up {\\r\\n    0% {\\r\\n        opacity: 0;\\r\\n        transform: translateY(222px);\\r\\n    }\\r\\n    20% {\\r\\n        opacity: 0;\\r\\n        transform: translateY(222px);\\r\\n    }\\r\\n    50% {\\r\\n        opacity: 1;\\r\\n        transform: translateY(0px);\\r\\n    }\\r\\n    100% {\\r\\n        opacity: 1;\\r\\n        transform: translateY(0px);\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes slideIn--bottom-up--reverse {\\r\\n    0% {\\r\\n        opacity: 1;\\r\\n        transform: translateY(0px);\\r\\n    }\\r\\n    20% {\\r\\n        opacity: 1;\\r\\n        transform: translateY(0px);\\r\\n    }\\r\\n    /* 50% {\\r\\n        opacity: 0;\\r\\n        transform: translateY(222px);\\r\\n    } */\\r\\n    100% {\\r\\n        opacity: 0;\\r\\n        transform: translateY(222px);\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes fadeIn {\\r\\n    0% {\\r\\n        opacity: 0;\\r\\n    }\\r\\n    75% {\\r\\n        opacity: 1;\\r\\n    }\\r\\n    100% {\\r\\n        opacity: 1;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/animation.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/contact.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/contact.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".contact-info {\\r\\n    flex: 30%;\\r\\n    border-top: 4px solid #959595;\\r\\n    padding: 40px;\\r\\n}\\r\\n\\r\\n.navigation-bar {\\r\\n    height: 7vh;\\r\\n    max-height: 70px;\\r\\n    min-height: 50px;\\r\\n    margin-top: 0;\\r\\n}\\r\\n\\r\\n.navigation-bar {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.navigation-bar a {\\r\\n    color: #a0a09f;\\r\\n    font-size: 22px;\\r\\n    text-decoration: none;\\r\\n    transition: color 0.3s ease;\\r\\n}\\r\\n\\r\\n.navigation-bar a:active,\\r\\n.navigation-bar a:hover {\\r\\n    color: #0096ff;\\r\\n}\\r\\n\\r\\n.navigation-bar {\\r\\n    padding-bottom: 1vh;\\r\\n}\\r\\n\\r\\n#contact-info__greating {\\r\\n    height: 20vh;\\r\\n    min-height: 180px;\\r\\n}\\r\\n\\r\\n#contact-info__greating h1 {\\r\\n    font-weight: 700;\\r\\n}\\r\\n\\r\\n.navigation-bar,\\r\\n#contact-info__greating {\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.contact-info h1 {\\r\\n    margin: 0;\\r\\n    width: 80%;\\r\\n    font-size: 3vw;\\r\\n    font-weight: 700;\\r\\n    line-height: 3.7vw;\\r\\n}\\r\\n\\r\\n.message-hyperlink {\\r\\n    left: 14.9vw;\\r\\n    position: absolute;\\r\\n    width: 13vw;\\r\\n    height: 3.5vw;\\r\\n    border-bottom: 0.4vw solid #ff9110;\\r\\n}\\r\\n\\r\\n.message-hyperlink:active,\\r\\n.message-hyperlink:hover {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.fill-color-bottom2top {\\r\\n    background: linear-gradient(to bottom, black, black 50%, #ff9110 50%);\\r\\n    background-clip: text;\\r\\n    -webkit-background-clip: text;\\r\\n    -webkit-text-fill-color: transparent;\\r\\n    background-size: 100% 200%;\\r\\n    background-position: 0% 0%;\\r\\n    transition: background-position 0.6s ease;\\r\\n}\\r\\n\\r\\n.message-hyperlink:active + h1 .fill-color-bottom2top,\\r\\n.message-hyperlink:hover + h1 .fill-color-bottom2top {\\r\\n    background-position: 0 100%;\\r\\n}\\r\\n\\r\\n/* Viewports Responsiveness  */\\r\\n@media (max-aspect-ratio: 160 / 100) {\\r\\n    .contact-info {\\r\\n        flex: 25%;\\r\\n        padding-top: 4.5vw !important;\\r\\n    }\\r\\n\\r\\n    #contact-info__greating {\\r\\n        height: auto;\\r\\n        min-height: 120px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 1/1), screen and (max-width: 770px) {\\r\\n    .contact-info {\\r\\n        border-top-width: 2px;\\r\\n    }\\r\\n\\r\\n    .contact-info h1 span,\\r\\n    .contact-info h1 {\\r\\n        font-size: 4.5vw !important;\\r\\n        line-height: 6vw;\\r\\n    }\\r\\n\\r\\n    .contact-info h1 {\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    #contact-info__greating {\\r\\n        min-height: 100px;\\r\\n    }\\r\\n\\r\\n    #contact-info__greating h1 {\\r\\n        font-weight: 700;\\r\\n    }\\r\\n\\r\\n    #contact-details-wrapper a:last-child {\\r\\n        margin-left: 0 !important;\\r\\n    }\\r\\n\\r\\n    .navigation-bar a {\\r\\n        font-size: 17px;\\r\\n    }\\r\\n\\r\\n    .navigation-bar {\\r\\n        margin-top: 0;\\r\\n    }\\r\\n\\r\\n    .message-hyperlink {\\r\\n        left: 22.5vw;\\r\\n        width: 19.5vw;\\r\\n        height: 5.6vw;\\r\\n        border-bottom-width: 2.5px;\\r\\n    }\\r\\n\\r\\n    .margin-bottom {\\r\\n        margin-bottom: 1.5vw !important;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 0.45), screen and (max-width: 600px) {\\r\\n    #back2top-Btn {\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .navigation-bar {\\r\\n        justify-content: center;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 0.45), screen and (max-width: 450px) {\\r\\n    .contact-info h1 span,\\r\\n    .contact-info h1 {\\r\\n        font-size: 5.5vw !important;\\r\\n        line-height: 7vw;\\r\\n    }\\r\\n\\r\\n    .message-hyperlink {\\r\\n        left: 27.5vw;\\r\\n        width: 23.5vw;\\r\\n        height: 6.7vw;\\r\\n    }\\r\\n\\r\\n    .contact-info {\\r\\n        padding: 0;\\r\\n        padding-top: 7.5vw !important;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/contact.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Orkney-Regular.woff */ \"./src/assets/fonts/Orkney-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Orkney-Light.woff */ \"./src/assets/fonts/Orkney-Light.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Orkney-Medium.woff */ \"./src/assets/fonts/Orkney-Medium.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Orkney-Bold.woff */ \"./src/assets/fonts/Orkney-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Regular weight */\\r\\n@font-face {\\r\\n    font-family: Orkney;\\r\\n    font-weight: normal;\\r\\n    font-style: normal;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff');\\r\\n}\\r\\n\\r\\n/* Light weight */\\r\\n@font-face {\\r\\n    font-family: Orkney;\\r\\n    font-weight: 300;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\r\\n}\\r\\n\\r\\n/* Medium weight */\\r\\n@font-face {\\r\\n    font-family: Orkney;\\r\\n    font-weight: 600;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff');\\r\\n}\\r\\n\\r\\n/* Bold weight */\\r\\n@font-face {\\r\\n    font-family: Orkney;\\r\\n    font-weight: 700;\\r\\n    font-style: normal;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff');\\r\\n}\\r\\n\\r\\n.orkney-font--regular {\\r\\n    font-weight: normal;\\r\\n    font-family: Orkney;\\r\\n}\\r\\n\\r\\n.orkney-font--light {\\r\\n    font-weight: 300;\\r\\n    font-family: Orkney;\\r\\n}\\r\\n\\r\\n.orkney-font--medium {\\r\\n    font-weight: 600;\\r\\n    font-family: Orkney;\\r\\n}\\r\\n\\r\\n.orkney-font--bold {\\r\\n    font-weight: 700;\\r\\n    font-family: Orkney;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/fonts.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".footer {\\r\\n    height: 30px;\\r\\n    font-weight: 300;\\r\\n    font-size: 15px;\\r\\n    padding-inline: 2.6vw;\\r\\n    overflow: hidden;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 1/1), screen and (max-width: 770px) {\\r\\n    .footer {\\r\\n        padding-inline: 7.8vw;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 0.45), screen and (max-width: 450px) {\\r\\n    .footer {\\r\\n        text-align: center;\\r\\n        height: 25px;\\r\\n        font-size: 10px;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index-shared.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index-shared.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".padding-wrapper {\\r\\n    padding: 6.5vw 17vw;\\r\\n}\\r\\n\\r\\n.padding-wrapper {\\r\\n    padding-bottom: 0 !important;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    padding-inline: 0;\\r\\n}\\r\\n\\r\\n.contact-info {\\r\\n    border-top: none !important;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 770px) {\\r\\n    .padding-wrapper {\\r\\n        padding: 60px 12vw;\\r\\n    }\\r\\n\\r\\n    .footer {\\r\\n        margin-top: 30px;\\r\\n        height: 20px;\\r\\n        text-align: center;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 0.45), screen and (max-width: 450px) {\\r\\n    .footer {\\r\\n        font-size: 10px;\\r\\n    }\\r\\n\\r\\n    #main-logo {\\r\\n        top: 6vw;\\r\\n        right: 3.5vw;\\r\\n        height: 1.5em;\\r\\n        width: 1.5em;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/index-shared.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    -webkit-tap-highlight-color: transparent !important;\\r\\n    /* border: red 1px solid; */\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n/* Shared styles */\\r\\n.container--justified {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.container--center {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n#main-logo {\\r\\n    display: flex;\\r\\n    justify-content: flex-end;\\r\\n    position: fixed;\\r\\n    top: 3vw;\\r\\n    right: 3vw;\\r\\n    cursor: pointer;\\r\\n    transition: all 0.3s ease-out;\\r\\n    z-index: 3;\\r\\n    height: 2em;\\r\\n    width: 2em;\\r\\n}\\r\\n\\r\\n/* Tablet viewport */\\r\\n@media (max-aspect-ratio: 70/100), screen and (max-width: 770px) {\\r\\n    #main-logo {\\r\\n        top: 5vw;\\r\\n        right: 6vw;\\r\\n        height: 1.5em;\\r\\n        width: 1.5em;\\r\\n    }\\r\\n}\\r\\n\\r\\n#back2top-Btn {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n#back2top-Btn:active,\\r\\n#back2top-Btn:hover {\\r\\n    color: #656565;\\r\\n}\\r\\n\\r\\n/* Wrappers styles */\\r\\nbody {\\r\\n    font-family: Orkney;\\r\\n    font-weight: 600;\\r\\n    background-color: #efeeed;\\r\\n    margin: 0;\\r\\n    overflow-y: overlay;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.landing-container {\\r\\n    padding: 5vw 4vw 5vw 7vw;\\r\\n    height: calc(100% - 10vw);\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n#contact-details-wrapper {\\r\\n    display: flex;\\r\\n    gap: 4vw;\\r\\n}\\r\\n\\r\\n/* ===== Scrollbar CSS ===== */\\r\\n/* Firefox */\\r\\n* {\\r\\n    scrollbar-width: auto;\\r\\n    scrollbar-color: #000000 transparent;\\r\\n}\\r\\n\\r\\n/* Chrome, Edge, and Safari */\\r\\nbody::-webkit-scrollbar {\\r\\n    width: 10px;\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar-track {\\r\\n    background: transparent;\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar-thumb {\\r\\n    border-radius: 20px;\\r\\n    border: 2px solid;\\r\\n}\\r\\n\\r\\nbody::-webkit-scrollbar-thumb {\\r\\n    background-color: #000000;\\r\\n    border-color: #efeeed;\\r\\n}\\r\\n\\r\\n.scrollbar--transparent::-webkit-scrollbar-thumb {\\r\\n    background-color: transparent;\\r\\n    border-color: transparent;\\r\\n}\\r\\n\\r\\n.disable-scroll {\\r\\n    overflow-y: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav-menu.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav-menu.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".overlay {\\r\\n    position: fixed;\\r\\n    top: -100vh;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    z-index: 2;\\r\\n    transition: top 0.4s ease-in;\\r\\n    visibility: hidden;\\r\\n}\\r\\n\\r\\n.overlay__nav-menu--toggleOn {\\r\\n    top: 0;\\r\\n    transition: top 0.7s ease-out;\\r\\n}\\r\\n\\r\\n#nav-menu {\\r\\n    display: flex;\\r\\n    background-color: black;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.nav-menu__left-wrapper {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-around;\\r\\n    flex: 70%;\\r\\n    font-weight: bold;\\r\\n    font-size: 6vw;\\r\\n    padding: 5vw 10vw;\\r\\n}\\r\\n\\r\\n.nav-menu__right-wrapper {\\r\\n    display: flex;\\r\\n    align-items: flex-end;\\r\\n    padding: 5vw 10vw 8vw 5vw;\\r\\n}\\r\\n\\r\\n.contact-link--font-size {\\r\\n    font-size: 1.2vw;\\r\\n}\\r\\n\\r\\n.nav-menu__right-wrapper > div {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 2vw;\\r\\n    align-items: flex-start;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.contact-link-wrapper--layout {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.5vw;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.hover-turn-bgcolor-blue {\\r\\n    transition: all 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.hover-turn-bgcolor-blue:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: #0096ff;\\r\\n}\\r\\n\\r\\n.nav-menu__link {\\r\\n    width: fit-content;\\r\\n}\\r\\n\\r\\n.nav-menu__link,\\r\\n.hover-turn-color-blue {\\r\\n    cursor: pointer;\\r\\n    transition: color 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.nav-menu__link:hover,\\r\\n.hover-turn-color-blue:hover {\\r\\n    color: #0096ff;\\r\\n}\\r\\n\\r\\n.font--gray {\\r\\n    color: #959595;\\r\\n}\\r\\n\\r\\n.nav-menu__right-wrapper {\\r\\n    flex: 30%;\\r\\n}\\r\\n\\r\\n.circle-shape {\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n    border-radius: 50%;\\r\\n    background-color: white;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n}\\r\\n\\r\\n.fa-brands {\\r\\n    color: black;\\r\\n    font-size: 27px;\\r\\n}\\r\\n\\r\\n.fa-behance {\\r\\n    transform: scale(0.9);\\r\\n}\\r\\n\\r\\n.media-icon-flex-row {\\r\\n    display: flex;\\r\\n    gap: 20px;\\r\\n}\\r\\n\\r\\n/* Mobile viewport 425px < width < 600px */\\r\\n@media (max-aspect-ratio: 1/1), screen and (max-width: 600px) {\\r\\n    #nav-menu {\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    .nav-menu__right-wrapper {\\r\\n        justify-content: flex-end;\\r\\n    }\\r\\n\\r\\n    .contact-link--font-size {\\r\\n        font-size: 3vw;\\r\\n    }\\r\\n\\r\\n    .margin--bottom {\\r\\n        margin-bottom: 1vw;\\r\\n    }\\r\\n\\r\\n    .nav-menu__right-wrapper > div {\\r\\n        gap: 5vw;\\r\\n    }\\r\\n\\r\\n    .mobile-style--overflow-hidden {\\r\\n        overflow: hidden;\\r\\n    }\\r\\n\\r\\n    .nav-menu__left-wrapper {\\r\\n        font-size: 8vw;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-aspect-ratio: 0.45), screen and (max-width: 501px) {\\r\\n    .contact-link--font-size {\\r\\n        font-size: 4vw;\\r\\n    }\\r\\n\\r\\n    .margin--bottom {\\r\\n        margin-bottom: 2vw;\\r\\n    }\\r\\n\\r\\n    .nav-menu__left-wrapper {\\r\\n        font-size: 10vw;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://v2/./src/css/nav-menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://v2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://v2/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://v2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/html/components/about.component.html":
/*!**************************************************!*\
  !*** ./src/html/components/about.component.html ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"about-container\\\">\\r\\n    <div class=\\\"about\\\">\\r\\n        <div class=\\\"about-content-wrapper\\\">\\r\\n            <h1 class=\\\"slideIn--bottom-up__large-box\\\" style=\\\"margin-top: 10px\\\">\\r\\n                ABOUT ME\\r\\n            </h1>\\r\\n            <h5\\r\\n                id=\\\"about-data-id--aboutText\\\"\\r\\n                class=\\\"slideIn--bottom-up__large-box\\\"\\r\\n            >\\r\\n                <!-- About text -->\\r\\n            </h5>\\r\\n        </div>\\r\\n        <div id=\\\"about-data-id--photo\\\" class=\\\"about-photo-wrapper\\\">\\r\\n            <!-- About Img -->\\r\\n        </div>\\r\\n    </div>\\r\\n    <div id=\\\"__contact-component\\\">\\r\\n        <!-- ### FOOTER COMPONENT ### -->\\r\\n    </div>\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://v2/./src/html/components/about.component.html?");

/***/ }),

/***/ "./src/html/components/contact.component.html":
/*!****************************************************!*\
  !*** ./src/html/components/contact.component.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"contact-info\\\">\\r\\n    <div id=\\\"contact-info__greating\\\" style=\\\"position: relative\\\">\\r\\n        <div class=\\\"slideIn--bottom-up\\\">\\r\\n            <span id=\\\"about-data-id--main-message\\\" class=\\\"message-hyperlink\\\">\\r\\n                <!-- Message -->\\r\\n            </span>\\r\\n            <h1\\r\\n                class=\\\"margin-bottom\\\"\\r\\n                style=\\\"font-size: 3vw; margin-bottom: 0.5vw\\\"\\r\\n            >\\r\\n                Drop me a\\r\\n                <span class=\\\"fill-color-bottom2top\\\" style=\\\"font-size: 3vw\\\"\\r\\n                    >message</span\\r\\n                >\\r\\n                and let's create something great together.\\r\\n            </h1>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"navigation-bar\\\">\\r\\n        <span id=\\\"contact-details-wrapper\\\" class=\\\"slideIn--bottom-up\\\">\\r\\n            <!-- Contact details -->\\r\\n        </span>\\r\\n        <a class=\\\"slideIn--bottom-up\\\" id=\\\"back2top-Btn\\\">Back to top</a>\\r\\n    </div>\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://v2/./src/html/components/contact.component.html?");

/***/ }),

/***/ "./src/html/components/footer.component.html":
/*!***************************************************!*\
  !*** ./src/html/components/footer.component.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"footer\\\">\\r\\n    <div id=\\\"footer-data-id--rights-reserved\\\" class=\\\"slideIn--bottom-up\\\"></div>\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://v2/./src/html/components/footer.component.html?");

/***/ }),

/***/ "./src/html/components/logo.component.html":
/*!*************************************************!*\
  !*** ./src/html/components/logo.component.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"fadeIn\\\" id=\\\"main-logo\\\">\\r\\n    <img id=\\\"logo-image\\\" style=\\\"height: 100%; width: 100%\\\" alt=\\\"logo\\\" />\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://v2/./src/html/components/logo.component.html?");

/***/ }),

/***/ "./src/html/components/nav-menu.component.html":
/*!*****************************************************!*\
  !*** ./src/html/components/nav-menu.component.html ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div id=\\\"nav-menu\\\" class=\\\"overlay\\\">\\r\\n    <div class=\\\"nav-menu__left-wrapper\\\">\\r\\n        <div class=\\\"mobile-style--overflow-hidden\\\">\\r\\n            <div\\r\\n                id=\\\"nav-menu__home-nav-btn\\\"\\r\\n                class=\\\"nav-menu__link slideIn--bottom-up\\\"\\r\\n            >\\r\\n                HOME\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"mobile-style--overflow-hidden\\\">\\r\\n            <div\\r\\n                id=\\\"nav-menu__projects-nav-btn\\\"\\r\\n                class=\\\"nav-menu__link slideIn--bottom-up\\\"\\r\\n            >\\r\\n                PROJECTS\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"mobile-style--overflow-hidden\\\">\\r\\n            <div\\r\\n                id=\\\"nav-menu__photography-nav-btn\\\"\\r\\n                class=\\\"nav-menu__link slideIn--bottom-up\\\"\\r\\n            >\\r\\n                PHOTOGRAPHY\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"mobile-style--overflow-hidden\\\">\\r\\n            <div\\r\\n                id=\\\"nav-menu__about-nav-btn\\\"\\r\\n                class=\\\"nav-menu__link slideIn--bottom-up\\\"\\r\\n            >\\r\\n                ABOUT\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n    <div class=\\\"nav-menu__right-wrapper\\\">\\r\\n        <div>\\r\\n            <div\\r\\n                id=\\\"nav-menu-data-id__main-message\\\"\\r\\n                class=\\\"contact-link-wrapper--layout hover-turn-blue\\\"\\r\\n            >\\r\\n                <div style=\\\"overflow: hidden\\\">\\r\\n                    <div\\r\\n                        class=\\\"font--gray margin--bottom contact-link--font-size slideIn--bottom-up--slow__nav-menu slideIn--bottom-up--slow-2200ms\\\"\\r\\n                    >\\r\\n                        Send me an email\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div\\r\\n                id=\\\"nav-menu-data-id__media\\\"\\r\\n                class=\\\"contact-link-wrapper--layout hover-turn-blue\\\"\\r\\n            >\\r\\n                <div style=\\\"overflow: hidden\\\">\\r\\n                    <div\\r\\n                        class=\\\"font--gray margin--bottom contact-link--font-size slideIn--bottom-up--slow__nav-menu slideIn--bottom-up--slow-2200ms\\\"\\r\\n                    >\\r\\n                        Follow me\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://v2/./src/html/components/nav-menu.component.html?");

/***/ }),

/***/ "./src/css/about-page.css":
/*!********************************!*\
  !*** ./src/css/about-page.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about-page.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/about-page.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_page_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_page_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_about_page_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_about_page_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://v2/./src/css/about-page.css?");

/***/ }),

/***/ "./src/css/about.css":
/*!***************************!*\
  !*** ./src/css/about.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/about.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://v2/./src/css/about.css?");

/***/ }),

/***/ "./src/css/animation.css":
/*!*******************************!*\
  !*** ./src/css/animation.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./animation.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/animation.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://v2/./src/css/animation.css?");

/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/footer.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://v2/./src/css/footer.css?");

/***/ }),

/***/ "./src/css/index-shared.css":
/*!**********************************!*\
  !*** ./src/css/index-shared.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_shared_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index-shared.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index-shared.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_shared_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_shared_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_shared_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_shared_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://v2/./src/css/index-shared.css?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://v2/./src/css/main.css?");

/***/ }),

/***/ "./src/css/nav-menu.css":
/*!******************************!*\
  !*** ./src/css/nav-menu.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./nav-menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/nav-menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_nav_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_nav_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://v2/./src/css/nav-menu.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://v2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://v2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://v2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://v2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://v2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://v2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images sync recursive \\.(png%7Cjpg%7Cico%7Cgif)$":
/*!************************************************************!*\
  !*** ./src/assets/images/ sync \.(png%7Cjpg%7Cico%7Cgif)$ ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./P1-2022/B_Mockup_Small.jpg\": \"./src/assets/images/P1-2022/B_Mockup_Small.jpg\",\n\t\"./P1-2022/C_Free_Box_Mockup_6 (1).jpg\": \"./src/assets/images/P1-2022/C_Free_Box_Mockup_6 (1).jpg\",\n\t\"./P1-2022/D_Store.jpg\": \"./src/assets/images/P1-2022/D_Store.jpg\",\n\t\"./P1-2022/E_billboard2.jpg\": \"./src/assets/images/P1-2022/E_billboard2.jpg\",\n\t\"./P1-2022/F_billboard.png\": \"./src/assets/images/P1-2022/F_billboard.png\",\n\t\"./P1-2022/G_Falling Business Card Mockup.jpg\": \"./src/assets/images/P1-2022/G_Falling Business Card Mockup.jpg\",\n\t\"./P1-2022/H_Business_Card_Mockup_008-e.jpg\": \"./src/assets/images/P1-2022/H_Business_Card_Mockup_008-e.jpg\",\n\t\"./P1-2022/I_stickers.jpg\": \"./src/assets/images/P1-2022/I_stickers.jpg\",\n\t\"./P2-2021/A_Mock UP 2.jpg\": \"./src/assets/images/P2-2021/A_Mock UP 2.jpg\",\n\t\"./P2-2021/B_music app1.jpg\": \"./src/assets/images/P2-2021/B_music app1.jpg\",\n\t\"./P2-2021/C_Mock UP 1.jpg\": \"./src/assets/images/P2-2021/C_Mock UP 1.jpg\",\n\t\"./P3-2021/A_free mockup 4.jpg\": \"./src/assets/images/P3-2021/A_free mockup 4.jpg\",\n\t\"./P3-2021/B_Bus Stop Billboard MockUp.jpg\": \"./src/assets/images/P3-2021/B_Bus Stop Billboard MockUp.jpg\",\n\t\"./P3-2021/C_free mockup 5.jpg\": \"./src/assets/images/P3-2021/C_free mockup 5.jpg\",\n\t\"./P3-2021/D_Hanging_Tote_Bag_Mockup_1.jpg\": \"./src/assets/images/P3-2021/D_Hanging_Tote_Bag_Mockup_1.jpg\",\n\t\"./P3-2021/E_cam.jpg\": \"./src/assets/images/P3-2021/E_cam.jpg\",\n\t\"./P4-2021/A_Group 1.jpg\": \"./src/assets/images/P4-2021/A_Group 1.jpg\",\n\t\"./P4-2021/B_Group.jpg\": \"./src/assets/images/P4-2021/B_Group.jpg\",\n\t\"./P4-2021/C_ipad and iphone mockup.jpg\": \"./src/assets/images/P4-2021/C_ipad and iphone mockup.jpg\",\n\t\"./about.jpg\": \"./src/assets/images/about.jpg\",\n\t\"./favicon.ico\": \"./src/assets/images/favicon.ico\",\n\t\"./logo-dark.png\": \"./src/assets/images/logo-dark.png\",\n\t\"./logo-light.png\": \"./src/assets/images/logo-light.png\",\n\t\"./logo-transparent.png\": \"./src/assets/images/logo-transparent.png\",\n\t\"./logo.gif\": \"./src/assets/images/logo.gif\",\n\t\"./logo.png\": \"./src/assets/images/logo.png\",\n\t\"./p5-2021/A_yu_Page_33.jpg\": \"./src/assets/images/p5-2021/A_yu_Page_33.jpg\",\n\t\"./p5-2021/B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg\": \"./src/assets/images/p5-2021/B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg\",\n\t\"./p5-2021/C_vinyl-template-B.jpg\": \"./src/assets/images/p5-2021/C_vinyl-template-B.jpg\",\n\t\"./p5-2021/D_vinyl-template-A.jpg\": \"./src/assets/images/p5-2021/D_vinyl-template-A.jpg\",\n\t\"./photography/IMG_1291.jpg\": \"./src/assets/images/photography/IMG_1291.jpg\",\n\t\"./photography/IMG_1299.jpg\": \"./src/assets/images/photography/IMG_1299.jpg\",\n\t\"./photography/IMG_1642.jpg\": \"./src/assets/images/photography/IMG_1642.jpg\",\n\t\"./photography/IMG_1644.jpg\": \"./src/assets/images/photography/IMG_1644.jpg\",\n\t\"./photography/IMG_2365.jpg\": \"./src/assets/images/photography/IMG_2365.jpg\",\n\t\"./photography/IMG_3053.jpg\": \"./src/assets/images/photography/IMG_3053.jpg\",\n\t\"./photography/IMG_6051.jpg\": \"./src/assets/images/photography/IMG_6051.jpg\",\n\t\"./photography/IMG_8794.jpg\": \"./src/assets/images/photography/IMG_8794.jpg\",\n\t\"./photography/ccdr 2022-07-09 161816.706.jpg\": \"./src/assets/images/photography/ccdr 2022-07-09 161816.706.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images sync recursive \\\\.(png%7Cjpg%7Cico%7Cgif)$\";\n\n//# sourceURL=webpack://v2/./src/assets/images/_sync_\\.(png%257Cjpg%257Cico%257Cgif)$?");

/***/ }),

/***/ "./src/assets/videos sync recursive \\.(mp4)$":
/*!******************************************!*\
  !*** ./src/assets/videos/ sync \.(mp4)$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./P1-2022/happymea.mp4\": \"./src/assets/videos/P1-2022/happymea.mp4\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/videos sync recursive \\\\.(mp4)$\";\n\n//# sourceURL=webpack://v2/./src/assets/videos/_sync_\\.(mp4)$?");

/***/ }),

/***/ "./src/assets/fonts/Orkney-Bold.woff":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Orkney-Bold.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fonts/Orkney-Bold.woff\";\n\n//# sourceURL=webpack://v2/./src/assets/fonts/Orkney-Bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/Orkney-Light.woff":
/*!********************************************!*\
  !*** ./src/assets/fonts/Orkney-Light.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fonts/Orkney-Light.woff\";\n\n//# sourceURL=webpack://v2/./src/assets/fonts/Orkney-Light.woff?");

/***/ }),

/***/ "./src/assets/fonts/Orkney-Medium.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Orkney-Medium.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fonts/Orkney-Medium.woff\";\n\n//# sourceURL=webpack://v2/./src/assets/fonts/Orkney-Medium.woff?");

/***/ }),

/***/ "./src/assets/fonts/Orkney-Regular.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Orkney-Regular.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fonts/Orkney-Regular.woff\";\n\n//# sourceURL=webpack://v2/./src/assets/fonts/Orkney-Regular.woff?");

/***/ }),

/***/ "./src/assets/images/P1-2022/B_Mockup_Small.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/P1-2022/B_Mockup_Small.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/B_Mockup_Small.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P1-2022/B_Mockup_Small.jpg?");

/***/ }),

/***/ "./src/assets/images/P1-2022/C_Free_Box_Mockup_6 (1).jpg":
/*!***************************************************************!*\
  !*** ./src/assets/images/P1-2022/C_Free_Box_Mockup_6 (1).jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/C_Free_Box_Mockup_6 (1).jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P1-2022/C_Free_Box_Mockup_6_(1).jpg?");

/***/ }),

/***/ "./src/assets/images/P1-2022/D_Store.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/P1-2022/D_Store.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/D_Store.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P1-2022/D_Store.jpg?");

/***/ }),

/***/ "./src/assets/images/P1-2022/E_billboard2.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/P1-2022/E_billboard2.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/E_billboard2.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P1-2022/E_billboard2.jpg?");

/***/ }),

/***/ "./src/assets/images/P1-2022/F_billboard.png":
/*!***************************************************!*\
  !*** ./src/assets/images/P1-2022/F_billboard.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/F_billboard.png\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P1-2022/F_billboard.png?");

/***/ }),

/***/ "./src/assets/images/P1-2022/G_Falling Business Card Mockup.jpg":
/*!**********************************************************************!*\
  !*** ./src/assets/images/P1-2022/G_Falling Business Card Mockup.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/G_Falling Business Card Mockup.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P1-2022/G_Falling_Business_Card_Mockup.jpg?");

/***/ }),

/***/ "./src/assets/images/P1-2022/H_Business_Card_Mockup_008-e.jpg":
/*!********************************************************************!*\
  !*** ./src/assets/images/P1-2022/H_Business_Card_Mockup_008-e.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/H_Business_Card_Mockup_008-e.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P1-2022/H_Business_Card_Mockup_008-e.jpg?");

/***/ }),

/***/ "./src/assets/images/P1-2022/I_stickers.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/P1-2022/I_stickers.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/I_stickers.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P1-2022/I_stickers.jpg?");

/***/ }),

/***/ "./src/assets/images/P2-2021/A_Mock UP 2.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/P2-2021/A_Mock UP 2.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/A_Mock UP 2.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P2-2021/A_Mock_UP_2.jpg?");

/***/ }),

/***/ "./src/assets/images/P2-2021/B_music app1.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/P2-2021/B_music app1.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/B_music app1.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P2-2021/B_music_app1.jpg?");

/***/ }),

/***/ "./src/assets/images/P2-2021/C_Mock UP 1.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/P2-2021/C_Mock UP 1.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/C_Mock UP 1.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P2-2021/C_Mock_UP_1.jpg?");

/***/ }),

/***/ "./src/assets/images/P3-2021/A_free mockup 4.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/P3-2021/A_free mockup 4.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/A_free mockup 4.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P3-2021/A_free_mockup_4.jpg?");

/***/ }),

/***/ "./src/assets/images/P3-2021/B_Bus Stop Billboard MockUp.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/P3-2021/B_Bus Stop Billboard MockUp.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/B_Bus Stop Billboard MockUp.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P3-2021/B_Bus_Stop_Billboard_MockUp.jpg?");

/***/ }),

/***/ "./src/assets/images/P3-2021/C_free mockup 5.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/P3-2021/C_free mockup 5.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/C_free mockup 5.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P3-2021/C_free_mockup_5.jpg?");

/***/ }),

/***/ "./src/assets/images/P3-2021/D_Hanging_Tote_Bag_Mockup_1.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/P3-2021/D_Hanging_Tote_Bag_Mockup_1.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/D_Hanging_Tote_Bag_Mockup_1.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P3-2021/D_Hanging_Tote_Bag_Mockup_1.jpg?");

/***/ }),

/***/ "./src/assets/images/P3-2021/E_cam.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/P3-2021/E_cam.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/E_cam.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P3-2021/E_cam.jpg?");

/***/ }),

/***/ "./src/assets/images/P4-2021/A_Group 1.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/P4-2021/A_Group 1.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/A_Group 1.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P4-2021/A_Group_1.jpg?");

/***/ }),

/***/ "./src/assets/images/P4-2021/B_Group.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/P4-2021/B_Group.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/B_Group.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P4-2021/B_Group.jpg?");

/***/ }),

/***/ "./src/assets/images/P4-2021/C_ipad and iphone mockup.jpg":
/*!****************************************************************!*\
  !*** ./src/assets/images/P4-2021/C_ipad and iphone mockup.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/C_ipad and iphone mockup.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/P4-2021/C_ipad_and_iphone_mockup.jpg?");

/***/ }),

/***/ "./src/assets/images/about.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/about.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/about.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/about.jpg?");

/***/ }),

/***/ "./src/assets/images/favicon.ico":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.ico ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/favicon.ico\";\n\n//# sourceURL=webpack://v2/./src/assets/images/favicon.ico?");

/***/ }),

/***/ "./src/assets/images/logo-dark.png":
/*!*****************************************!*\
  !*** ./src/assets/images/logo-dark.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/logo-dark.png\";\n\n//# sourceURL=webpack://v2/./src/assets/images/logo-dark.png?");

/***/ }),

/***/ "./src/assets/images/logo-light.png":
/*!******************************************!*\
  !*** ./src/assets/images/logo-light.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/logo-light.png\";\n\n//# sourceURL=webpack://v2/./src/assets/images/logo-light.png?");

/***/ }),

/***/ "./src/assets/images/logo-transparent.png":
/*!************************************************!*\
  !*** ./src/assets/images/logo-transparent.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/logo-transparent.png\";\n\n//# sourceURL=webpack://v2/./src/assets/images/logo-transparent.png?");

/***/ }),

/***/ "./src/assets/images/logo.gif":
/*!************************************!*\
  !*** ./src/assets/images/logo.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/logo.gif\";\n\n//# sourceURL=webpack://v2/./src/assets/images/logo.gif?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/logo.png\";\n\n//# sourceURL=webpack://v2/./src/assets/images/logo.png?");

/***/ }),

/***/ "./src/assets/images/p5-2021/A_yu_Page_33.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/p5-2021/A_yu_Page_33.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/A_yu_Page_33.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/p5-2021/A_yu_Page_33.jpg?");

/***/ }),

/***/ "./src/assets/images/p5-2021/B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg":
/*!********************************************************************************!*\
  !*** ./src/assets/images/p5-2021/B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/p5-2021/B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg?");

/***/ }),

/***/ "./src/assets/images/p5-2021/C_vinyl-template-B.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/p5-2021/C_vinyl-template-B.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/C_vinyl-template-B.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/p5-2021/C_vinyl-template-B.jpg?");

/***/ }),

/***/ "./src/assets/images/p5-2021/D_vinyl-template-A.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/p5-2021/D_vinyl-template-A.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/D_vinyl-template-A.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/p5-2021/D_vinyl-template-A.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/IMG_1291.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/photography/IMG_1291.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/IMG_1291.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/IMG_1291.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/IMG_1299.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/photography/IMG_1299.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/IMG_1299.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/IMG_1299.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/IMG_1642.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/photography/IMG_1642.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/IMG_1642.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/IMG_1642.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/IMG_1644.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/photography/IMG_1644.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/IMG_1644.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/IMG_1644.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/IMG_2365.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/photography/IMG_2365.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/IMG_2365.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/IMG_2365.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/IMG_3053.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/photography/IMG_3053.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/IMG_3053.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/IMG_3053.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/IMG_6051.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/photography/IMG_6051.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/IMG_6051.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/IMG_6051.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/IMG_8794.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/photography/IMG_8794.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/IMG_8794.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/IMG_8794.jpg?");

/***/ }),

/***/ "./src/assets/images/photography/ccdr 2022-07-09 161816.706.jpg":
/*!**********************************************************************!*\
  !*** ./src/assets/images/photography/ccdr 2022-07-09 161816.706.jpg ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ccdr 2022-07-09 161816.706.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/photography/ccdr_2022-07-09_161816.706.jpg?");

/***/ }),

/***/ "./src/assets/videos/P1-2022/happymea.mp4":
/*!************************************************!*\
  !*** ./src/assets/videos/P1-2022/happymea.mp4 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/videos/happymea.mp4\";\n\n//# sourceURL=webpack://v2/./src/assets/videos/P1-2022/happymea.mp4?");

/***/ }),

/***/ "./src/assets/json/personalDetails.json":
/*!**********************************************!*\
  !*** ./src/assets/json/personalDetails.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"{\\r\\n    \\\"landing\\\": {\\r\\n        \\\"fullName\\\": \\\"SIYU QIAN\\\",\\r\\n        \\\"titleLine1\\\": \\\"VISUAL\\\",\\r\\n        \\\"titleLine2\\\": \\\"DESIGNER\\\",\\r\\n        \\\"nickName\\\": \\\"MONICA\\\",\\r\\n        \\\"city\\\": \\\"BASED IN SYDNEY\\\",\\r\\n        \\\"years\\\": \\\"2021 & 2022\\\"\\r\\n    },\\r\\n    \\\"about\\\": {\\r\\n        \\\"aboutText\\\": \\\"I am Sydney based visual designer. After I finished my business degree in university, I realised that I am more passionate about creating. Shillington has given me the opportunity to discover the design industry and learn skills. I am still willing to have more chances to learn and follow my design directions.\\\",\\r\\n        \\\"contactDetails\\\": [\\r\\n            {\\r\\n                \\\"name\\\": \\\"instagram\\\",\\r\\n                \\\"href\\\": \\\"https://www.instagram.com/myu_q5/\\\",\\r\\n                \\\"type\\\": \\\"media\\\"\\r\\n            },\\r\\n            {\\r\\n                \\\"name\\\": \\\"behance\\\",\\r\\n                \\\"href\\\": \\\"https://www.behance.net/monicaqian\\\",\\r\\n                \\\"type\\\": \\\"media\\\"\\r\\n            },\\r\\n            {\\r\\n                \\\"name\\\": \\\"email\\\",\\r\\n                \\\"href\\\": \\\"monicaqsy1@gmail.com\\\",\\r\\n                \\\"type\\\": \\\"main-message\\\"\\r\\n            }\\r\\n        ],\\r\\n        \\\"photo\\\": {\\r\\n            \\\"src\\\": \\\"about.jpg\\\",\\r\\n            \\\"alt\\\": \\\"about-monica\\\"\\r\\n        }\\r\\n    },\\r\\n    \\\"photography\\\": {\\r\\n        \\\"folderName\\\": \\\"photography\\\",\\r\\n        \\\"fileNames\\\": [\\r\\n            { \\\"id\\\": \\\"p1\\\", \\\"name\\\": \\\"IMG_6051.jpg\\\" },\\r\\n            { \\\"id\\\": \\\"p2\\\", \\\"name\\\": \\\"IMG_2365.jpg\\\" },\\r\\n            { \\\"id\\\": \\\"p3\\\", \\\"name\\\": \\\"IMG_1291.jpg\\\" },\\r\\n            { \\\"id\\\": \\\"p6\\\", \\\"name\\\": \\\"ccdr 2022-07-09 161816.706.jpg\\\" },\\r\\n            { \\\"id\\\": \\\"p5\\\", \\\"name\\\": \\\"IMG_1299.jpg\\\" },\\r\\n            { \\\"id\\\": \\\"p7\\\", \\\"name\\\": \\\"IMG_8794.jpg\\\" },\\r\\n            { \\\"id\\\": \\\"p9\\\", \\\"name\\\": \\\"IMG_1642.jpg\\\" },\\r\\n            { \\\"id\\\": \\\"p8\\\", \\\"name\\\": \\\"IMG_1644.jpg\\\" },\\r\\n            { \\\"id\\\": \\\"p4\\\", \\\"name\\\": \\\"IMG_3053.jpg\\\" }\\r\\n        ]\\r\\n    },\\r\\n    \\\"logo\\\": {\\r\\n        \\\"dark\\\": \\\"logo-dark.png\\\",\\r\\n        \\\"light\\\": \\\"logo-light.png\\\",\\r\\n        \\\"transparent\\\": \\\"logo-transparent.png\\\"\\r\\n    },\\r\\n    \\\"footer\\\": {\\r\\n        \\\"year\\\": \\\"2022\\\",\\r\\n        \\\"rightsHolder\\\": \\\"Siyu Qian\\\"\\r\\n    }\\r\\n}\\r\\n\";\n\n//# sourceURL=webpack://v2/./src/assets/json/personalDetails.json?");

/***/ }),

/***/ "./src/assets/json/projectsDetails.json":
/*!**********************************************!*\
  !*** ./src/assets/json/projectsDetails.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"{\\r\\n    \\\"projectsDetails\\\": [\\r\\n        {\\r\\n            \\\"id\\\": 1,\\r\\n            \\\"name\\\": \\\"HAPPYMEA\\\",\\r\\n            \\\"type\\\": \\\"BRANDING, PACKAGING\\\",\\r\\n            \\\"description\\\": \\\"HAPPYMEA is a cake store for dog lovers who can buy cakes for their puppies. Make puppies' wish come true to celebrate the special days with the owners.\\\",\\r\\n            \\\"image\\\": {\\r\\n                \\\"folderName\\\": \\\"P1-2022\\\",\\r\\n                \\\"fileNames\\\": [\\r\\n                    \\\"B_Mockup_Small.jpg\\\",\\r\\n                    \\\"C_Free_Box_Mockup_6 (1).jpg\\\",\\r\\n                    \\\"D_Store.jpg\\\",\\r\\n                    \\\"E_billboard2.jpg\\\",\\r\\n                    \\\"F_billboard.png\\\",\\r\\n                    \\\"G_Falling Business Card Mockup.jpg\\\",\\r\\n                    \\\"H_Business_Card_Mockup_008-e.jpg\\\",\\r\\n                    \\\"I_stickers.jpg\\\"\\r\\n                ],\\r\\n                \\\"autoImporting\\\": true\\r\\n            },\\r\\n            \\\"video\\\": {\\r\\n                \\\"folderName\\\": \\\"P1-2022\\\",\\r\\n                \\\"files\\\": [\\r\\n                    {\\r\\n                        \\\"name\\\": \\\"happymea.mp4\\\",\\r\\n                        \\\"playOption\\\": {\\r\\n                            \\\"autoplay\\\": true,\\r\\n                            \\\"loop\\\": true\\r\\n                        }\\r\\n                    }\\r\\n                ]\\r\\n            }\\r\\n        },\\r\\n        {\\r\\n            \\\"id\\\": 2,\\r\\n            \\\"name\\\": \\\"MUMO\\\",\\r\\n            \\\"type\\\": \\\"MUSIC PLAYER APP\\\",\\r\\n            \\\"description\\\": \\\"MUMO is a music player app which is aimed for the younger generation who is seeking a futuristic experience as they enjoy and enter the music world.\\\",\\r\\n            \\\"image\\\": {\\r\\n                \\\"folderName\\\": \\\"P2-2021\\\",\\r\\n                \\\"fileNames\\\": [\\r\\n                    \\\"A_Mock UP 2.jpg\\\",\\r\\n                    \\\"B_music app1.jpg\\\",\\r\\n                    \\\"C_Mock UP 1.jpg\\\"\\r\\n                ],\\r\\n                \\\"autoImporting\\\": true\\r\\n            }\\r\\n        },\\r\\n        {\\r\\n            \\\"id\\\": 3,\\r\\n            \\\"name\\\": \\\"RECYCLE REDEEM REUSE\\\",\\r\\n            \\\"type\\\": \\\"CAMPAIGN\\\",\\r\\n            \\\"description\\\": \\\"RECYCLE REDEEM REUSE is an awareness campaign to encourage people to recycle plastics, and in return they will receive sustainable products as a reward from Renew.\\\",\\r\\n            \\\"image\\\": {\\r\\n                \\\"folderName\\\": \\\"P3-2021\\\",\\r\\n                \\\"fileNames\\\": [\\r\\n                    \\\"A_free mockup 4.jpg\\\",\\r\\n                    \\\"B_Bus Stop Billboard MockUp.jpg\\\",\\r\\n                    \\\"C_free mockup 5.jpg\\\",\\r\\n                    \\\"D_Hanging_Tote_Bag_Mockup_1.jpg\\\",\\r\\n                    \\\"E_cam.jpg\\\"\\r\\n                ],\\r\\n                \\\"autoImporting\\\": true\\r\\n            }\\r\\n        },\\r\\n        {\\r\\n            \\\"id\\\": 4,\\r\\n            \\\"name\\\": \\\"URBUDDY\\\",\\r\\n            \\\"type\\\": \\\"PET FINDER WEBSITE\\\",\\r\\n            \\\"description\\\": \\\"UrBuddy wanted to bring the warm home feeling to their customers when they are experiencing finding the perfect pet friend. It is aimed to provide the best experience as people seek a new pet friend to be their closest buddy.\\\",\\r\\n            \\\"image\\\": {\\r\\n                \\\"folderName\\\": \\\"P4-2021\\\",\\r\\n                \\\"fileNames\\\": [\\r\\n                    \\\"A_Group 1.jpg\\\",\\r\\n                    \\\"B_Group.jpg\\\",\\r\\n                    \\\"C_ipad and iphone mockup.jpg\\\"\\r\\n                ],\\r\\n                \\\"autoImporting\\\": true\\r\\n            }\\r\\n        },\\r\\n        {\\r\\n            \\\"id\\\": 5,\\r\\n            \\\"name\\\": \\\"SOME BORING, LOVE STORIES\\\",\\r\\n            \\\"type\\\": \\\"HANDMADE ALBUM COVER\\\",\\r\\n            \\\"description\\\": \\\"Two silver wires interacting together with one rose represents the complexity of feelings, defining the album cover's name, Some Boring, Love Stories.\\\",\\r\\n            \\\"image\\\": {\\r\\n                \\\"folderName\\\": \\\"p5-2021\\\",\\r\\n                \\\"fileNames\\\": [\\r\\n                    \\\"A_yu_Page_33.jpg\\\",\\r\\n                    \\\"B_Record_Vinyl_MockUp_Front&Back_UPDATED.jpg\\\",\\r\\n                    \\\"C_vinyl-template-B.jpg\\\",\\r\\n                    \\\"D_vinyl-template-A.jpg\\\"\\r\\n                ],\\r\\n                \\\"autoImporting\\\": true\\r\\n            }\\r\\n        }\\r\\n    ]\\r\\n}\\r\\n\";\n\n//# sourceURL=webpack://v2/./src/assets/json/projectsDetails.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"about": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/about.js");
/******/ 	
/******/ })()
;