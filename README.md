# Projects portfolio template

A personal website that can be used to exhibit portfolio and projects. Implemented as a template that can accept Json, images data with given [Json format](#json-format) and fixed [service directory structure](#service-directory-structure).

Reponsiveness enabled: :desktop_computer: :computer: :iphone:

Developing: `npm http-server`, `Chrome dev tool`

## Features & Tech

### Element fly in from different directions

-   `CSS` animation `@keyframes` with `translateX` and `translateY`
-   Implementation:
    -   Defines animation classes `animation.css`[<sup>:link:</sup>](/src/css/animation.css)

### Gradually fill in color from left to right

-   `CSS` transition set `background: linear-gradient(to right, ...)` along with `background-size: 200% 100%;` and `background-position: right bottom;`
-   Implementation:
    -   Defines animation class `projects-list.css` <sub>_line 10-13_</sub> [<sup>:link:</sup>](/src/css/projects-list.css#L10)

### Trigger animations when elements in view

-   `Intersection Observer API`[<sup>:link:</sup>](https://blog.webdevsimplified.com/2022-01/intersection-observer/) to check if element in view.

-   Implementation:
    -   Defines observer `trigger.js`[<sup>:link:</sup>](/src/js/common/trigger.js)
    -   Defines animation trigger events `animation.js`[<sup>:link:</sup>](/src/js/common/animation.js)

### Back to top

-   Trigger body `scrollIntoView` function, and set `behavior` attribute to `"smooth"` for smoothly scrolling

-   Implementation:
    -   Defines event handler `event.js`<sub>_line 4-8_</sub> [<sup>:link:</sup>](/src/js/common/event.js#L4)

### Get relative path for each `.html`

-   Define relative path of `.html` as an attribute in `<body>` e.g. `data-root="./../somePath"`, and get value in `.js` by `getAttribute`

-   Implementation (One example):
    -   Defines observer `index.html`<sub>_line 44_</sub>[<sup>:link:</sup>](/src/index.html#L44)
    -   Defines animation trigger events `render.js`<sub>_line 33_</sub> [<sup>:link:</sup>](/src/js/common/render.js#L33)

## Design

Font family: Orkney[<sup>:link:</sup>](/src/assets/fonts) (Light.woff, Regular.woff, Medium.woff, Bold.woff)

[Full design doc](./design.pdf)

## Code structure

Organise code based on pages and functionaliteis, extract scripts and styles into different files. Routing between 2 template files `index.html` and `project.html`

-   `index.html` landing page contains personal details and projects list.
-   `project.html` project details page contains project details and projects list.
    <br>
-   `animation.js` handles main animations trigger events.
-   `render.js` handles page components loading and rendering.
-   `event.js` handles buttons, anchors click events.
-   `fetch.js` handles Json data fetching. <sub>(Act like API calls)<sub>
-   ...

## Service directory structure

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

[Example](/src/service-template)

## Json format

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
            ...
        ],
        "photo": {
            "src": "",
            "alt": ""
        },
    }
}
```

### projectsDetails.json

```JSON
{
    "projectDetails": [
        {
            "id": 1,
            "name": "_NAME_",
            "type": "_TYPE_",
            "description": "_DESCRIPTION_",
            "image": {
                "folderName": "",
                "fileNames": [...]
            }
        },
        {
            "id": 2,
            "name": "_NAME_",
            "type": "_TYPE_",
            "description": "_DESCRIPTION_",
            "image": {
                "folderName": "",
                "fileNames": [...]
            }
        },
        ...

    ]
}
```
