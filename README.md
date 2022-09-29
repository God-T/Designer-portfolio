# Projects Portfolio Template

![](https://img.shields.io/github/package-json/v/God-T/Projects-portfolio-template) ![](https://img.shields.io/github/license/God-T/Projects-portfolio-template)
![](https://img.shields.io/github/commit-activity/m/God-T/Projects-portfolio-template?color=00cc00) ![](https://img.shields.io/github/issues-closed/God-T/Projects-portfolio-template) ![](https://img.shields.io/github/issues-pr-closed/God-T/Projects-portfolio-template)
<br>
<br>

### :dart: [View Site](https://god-t.github.io/Projects-portfolio-template/index.html) <sub>[![](https://img.shields.io/badge/GitHub_Page-000?style=flat&logo=GitHub)](https://god-t.github.io/Projects-portfolio-template/)</sub>

### :rocket: [View Site](https://portfolio-qsy.herokuapp.com/) <sub>[![](https://img.shields.io/badge/Heroku-8767ac?style=flat&logo=Heroku)](https://portfolio-qsy.herokuapp.com/)</sub>

### About

A personal website that can be used to exhibit portfolio and projects. The site is template-driven that accepts images, Json data with given [Json format](#json-format).

### Reponsiveness enabled

:desktop_computer: :computer: :iphone:

### Dev environment

![](https://img.shields.io/badge/Node_JS-003300?style=flat&logo=Node.js)
![](https://img.shields.io/badge/Express_JS-ff0000?logoColor=fff&style=flat&logo=Node.js)
![](https://img.shields.io/badge/Vanilla_JavaScript-cccccc?style=flat&logo=JavaScript) ![](https://img.shields.io/badge/HTML-ffcc99?style=flat&logo=HTML5) ![](https://img.shields.io/badge/CSS-99ccff?logoColor=1572B6&style=flat&logo=CSS3)
![](https://img.shields.io/badge/Webpack-33ccff?style=flat&logo=Webpack)
![](https://img.shields.io/badge/Chrome_Dev_Tool-808080?logoColor=fff&style=flat&logo=GoogleChrome)

### Catlog

-   [Features & Tech](#features--tech)
    -   [Element fly in from different directions](#element-fly-in-from-different-directions)
    -   [Gradually fill in color from left to right](#gradually-fill-in-color-from-left-to-right)
    -   [Trigger animations when elements scrolled into view](#trigger-animations-when-elements-scrolled-into-view)
    -   [Back to top](#back-to-top)
    -   [Load HTML template as shared component](#load-html-template-as-shared-component)
    -   ["Configuration oriented programming" -- Webpack](#configuration-oriented-programming----webpack)
    -   [Serve the assets and contents](#serve-the-assets-and-contents)
-   [Directory structure](#directory-structure)
    -   [Code structure](#code-structure)
-   [JSON format](#json-format)
    -   [personalDetails.json](#personaldetailsjson)
    -   [projectsDetailsjson](#projectsdetailsjson)
-   [Design](#design)

## Features & Tech

### Element fly in from different directions

-   `CSS` animation `@keyframes` with `translateX` and `translateY`
-   Implementation:
    -   Defines animation classes `animation.css`[<sup>:link:</sup>](/src/css/animation.css)

### Gradually fill in color from left to right

-   `CSS` transition set `background: linear-gradient(to right, ...)` along with `background-size: 200% 100%;` and `background-position: right bottom;`
-   Implementation:
    -   Defines animation class `projects-list.css` <sub>_line 12-25_</sub> [<sup>:link:</sup>](/src/css/projects-list.css#L12)

### Trigger animations when elements scrolled into view

-   [`Intersection Observer API`](https://blog.webdevsimplified.com/2022-01/intersection-observer/)[<sup>:link:</sup>](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to check if element in view.
-   Implementation:
    -   Defines observer `trigger.js`[<sup>:link:</sup>](/src/js/common/trigger.js)
    -   Defines animation trigger events `animation.js`[<sup>:link:</sup>](/src/js/common/animation.js)

### Back to top

-   Trigger body `scrollIntoView` function, and set `behavior` attribute to `"smooth"` for smoothly scrolling
-   Implementation:
    -   Defines event handler `event.js`<sub>_line 5-9_</sub> [<sup>:link:</sup>](/src/js/common/event.js#L5)

### ~~Get relative path for each `.html`~~

-   Define relative path of `.html` as an attribute in `<body>` e.g. `data-root="./../somePath"`, and get value in `.js` by `getAttribute`
-   Implementation (One example):
    -   Defines observer `index.html`<sub>_line 44_</sub>[<sup>:link:</sup>](/src/index.html)
    -   Defines animation trigger events `render.js`<sub>_line 33_</sub> [<sup>:link:</sup>](/src/js/common/render.js)

### Load HTML template as shared component

-   Load content from HTML file though `import` in `load.js`<sub>_line 5-8_</sub> [<sup>:link:</sup>](/src/js/common/load.js#L5)
-   Insert content to HTML file though `el.innerHTML(some content)` in `render.js`[<sup>:link:</sup>](/src/js/common/render.js)
-   Bundle with `Webpack` `html-loader`

### "Configuration oriented programming" -- Webpack

-   Convert `ECMAScript 2015+` JS code into backwards-compatible with `babel-loader`
-   Development configuration `webpack.dev.config.js`[<sup>:link:</sup>](webpack.dev.config.js)
-   Clean configuration for production `webpack.prod.config.js`[<sup>:link:</sup>](webpack.prod.config.js)

### Serve the assets and contents

-   Host http server using `Express JS` in `server.js`[<sup>:link:</sup>](/src/server.js)

## Directory structure

```
src /
└── service/
    ├── assets/
    │   ├── images/
    │   │   ├── some-project-images/
    │   │   │   ├── some-project-img.xxx (with any image format)
    │   │   │   └── ...
    │   │   └── ...
    │   ├── about.xxx (with any image format)
    │   ├── favicon.ico
    │   └── logo.xxx (with any image format)
    ├── personalDetails.json
    └── projectsDetails.json
```

### Code structure

Organise the code based on pages and functionaliteis, extract scripts and styles into shared files. Routing between serval templates by `Express JS`

-   `src/server.js` host http server with contents.

-   `src/index.html` landing page contains personal details and projects list.

-   `src/html/project.html` project details page contains project details and projects list.

-   `src/html/about.html` personal details page.

-   `src/html/photography.html` photography page.

-   `src/html/projects-list.html` projects list page.

-   `src/html/component/*.html` shared components templates

    -   `~/about.component.html` shared template contains project details.
    -   `~/contact.component.html` shared contacts template.
    -   `~/footer.component.html` shared template contains footer component.
    -   `~/logo.component.html` shared template that has logo and nav menu components.
    -   `~/nav-menu.component.html` shared template contains nav menu component.

-   `src/js/*.js` entry of pages.
-   `src/js/common/*.js` shared scripts.
    -   `src/js/common/load.js` load data into run time <sub>(For webpack to load into dist)<sub>
    -   `src/js/common/fetch.js` handles Json data fetching. <sub>(Act like API calls)<sub>
    -   `src/js/common/render.js` handles page components loading and rendering.
    -   `src/js/common/event.js` handles buttons, anchors click events.
    -   `src/js/common/animation.js` handles main animations trigger events.
    -   `src/js/common/trigger.js` handles [`Intersection Observer API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)[<sup>:link:</sup>](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) triggers.
    -   `src/js/common/util.js` handles some shared helper functions.
-   `~/*.css` stylesheets

## JSON format

### personalDetails.json

```JSON
{
    "landing": {
        "fullName": "_FULL_NAME_",
        "titleLine1": "_TITLE_LINE_1_",
        "titleLine2": "_TITLE_LINE_1_",
        "nickName": "_NICK_NAME_",
        "city": "_CITY_",
        "years": "_YEAR_"
    },
    "about": {
        "aboutText": "_ABOUT_TEXT_",
        "contactDetails": [
            { "type": "_TYPE_", "href": "" },
            { "type": "_TYPE_", "href": "" },
            { "type": "_TYPE_", "href": "" },
        ],
        "photo": {
            "src": "",
            "alt": ""
        },
    },
    "photography": {
        "folderName": "photography",
        "fileNames": [
            { "id": "_ID_", "name": "_NAME_" },
            { "id": "_ID_", "name": "_NAME_" },
            { "id": "_ID_", "name": "_NAME_" },
        ]
    },
    "logo": {
        "dark": "logo-dark.png",
        "light": "logo-light.png",
        "transparent": "logo-transparent.png"
    },
    "footer": {
        "year": "_YEAR_",
        "rightsHolder": "_NAME_"
    }
}
```

### projectsDetails.json

```JSON
{
    "projectsDetails": [
        {
            "id": 1,
            "name": "_NAME_",
            "type": "_TYPE_",
            "description": "_DESCRIPTION_",
            "image": {
                "folderName": "",
                "fileNames": ["..."]
            }
        },
        {
            "id": 2,
            "name": "_NAME_",
            "type": "_TYPE_",
            "description": "_DESCRIPTION_",
            "image": {
                "folderName": "",
                "fileNames": ["..."]
            }
        },
    ]
}
```

## Design

### Designed by

[![](<https://img.shields.io/badge/Instagram-Monica_Qian_(Graphic_Designer)-ffccff?style=flat&logo=Instagram>)](https://www.instagram.com/myu_q5/)

### [Full design doc](./design.pdf)

### Font family

Orkney[<sup>:link:</sup>](https://github.com/God-T/Projects-portfolio-template/tree/main/src/assets/fonts) (Light.woff, Regular.woff, Medium.woff, Bold.woff)
