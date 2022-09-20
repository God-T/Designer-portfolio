import {
    getProjectList,
    getProjectDetails,
    getLandingDetails,
    getAboutDetails,
    getProjectImageSrc,
    getLogoDetails,
    getAboutComponentHtmlContent,
    getNavMenuComponentHtmlContent,
} from './fetch.js';
import { createParagraphsWithNewLinekey } from './util.js';
import { bindContactLinkClickEvent } from './event.js';
import { scrollTrigger } from './trigger.js';

const createNewElement = (tagType, classNames, content = null) => {
    const newEl = document.createElement(tagType);
    /* Create class name(s) */
    if (Array.isArray(classNames))
        classNames.map(name => {
            newEl.classList.add(name);
        });
    else if (typeof classNames === 'string') newEl.className = classNames;
    /* Create Text */
    if (content) newEl.appendChild(document.createTextNode(content));
    return newEl;
};

const setTextById = (id, content = '') => {
    const el = document.getElementById(id);
    if (el) el.textContent = content;
};

const setImgSrcById = (id, imgFileName, alt = '') => {
    try {
        const imgEl = document.getElementById(id);
        imgEl.src = imgFileName;
        imgEl.alt = alt;
    } catch (e) {
        alert('Failed to load image');
        console.log(e);
    }
};

export const renderProjectsList = (except = {}) => {
    try {
        const projectListElement = document.getElementById(
            'projects-list-container'
        );
        /* Render divider */
        projectListElement.appendChild(
            createNewElement('div', [
                'project-top-divider',
                'slideIn--left2right__large-box',
            ])
        );
        /* Render projects */
        const projectList = getProjectList(except);
        for (let i = 0; i < projectList.length; i++) {
            const project = createNewElement('div', [
                'project',
                'slideIn--left2right__large-box',
            ]);
            project.setAttribute('id', 'project-' + projectList[i].id);
            project.appendChild(
                createNewElement('h1', 'project-name', projectList[i].name)
            );
            project.appendChild(
                createNewElement('span', 'project-type', projectList[i].type)
            );
            projectListElement.appendChild(project);

            project.addEventListener('click', () => {
                window.location.href = `project?id=${projectList[i].id}&name=${projectList[i].name}`;
            });
        }
    } catch (e) {
        alert('Failed to render projects list');
        console.log(e);
    }
};

export const renderProjectDetails = projectID => {
    try {
        const projectDetails = getProjectDetails(projectID);
        const projectDetailElement = document.getElementById(
            'project-detail-container'
        );

        /* Render divider */
        projectDetailElement.appendChild(
            createNewElement('div', [
                'project-top-divider',
                'slideIn--left2right__large-box',
            ])
        );

        /* Render project */
        const project = createNewElement('div', [
            'project-detail',
            'slideIn--left2right__large-box',
        ]);
        project.appendChild(
            createNewElement('h1', 'project-name', projectDetails.name)
        );
        project.appendChild(
            createNewElement('span', 'project-type', projectDetails.type)
        );
        projectDetailElement.appendChild(project);

        /* Render description */
        const descriptionEle = createNewElement('div', [
            'project-detail-description',
        ]);
        const paragraphs = createParagraphsWithNewLinekey(
            projectDetails.description
        );
        paragraphs?.map(p => {
            descriptionEle.appendChild(
                createNewElement(
                    'div',
                    [
                        'project-detail-description__p',
                        'slideIn--bottom-up--slow',
                    ],
                    p
                )
            );
        });
        projectDetailElement.appendChild(descriptionEle);

        /* Render image */
        const imageData = projectDetails.image;
        const fileNames = imageData.fileNames;
        let isFirst = true;
        let firstImage = null;
        for (let i = 0; i < fileNames.length; i++) {
            // const container = createNewElement('div', '');
            const projectImg = createNewElement('img', ['project-detail-img']);

            const imageSrc = getProjectImageSrc(
                `${imageData.folderName}/${fileNames[i]}`
            );
            projectImg.src = imageSrc;

            // let img = new Image();
            // img.onload = function () {
            //     console.log(
            //         `${Math.round(img.height / (img.width / 76))}vw`,
            //         img.height,
            //         img.width,
            //         imageSrc
            //     );

            //     projectImg.style.height = `${Math.round(
            //         img.height / (img.width / 76)
            //     )}vw`;
            // };
            // img.src = imageSrc;

            projectDetailElement.appendChild(projectImg);
        }

        /**
         * In project details page, before the image content is rendered, the image element will
         * have 0 height, and this always causes the cb() to be executed, so to work around this,
         * delay subscriptions by setting a timeout to allow the observers to observe the images
         * elements after the image content has been rendered.
         */
        setTimeout(() => {
            scrollTrigger('.project-detail-img', {
                rootMargin: '-20px -20px -50px -20px',
                cb: function (el) {
                    /**
                     * The min height of the first image will be set to 100vh to push the other images out of
                     * the viewport, preventing the observer from triggering the cb(). Therefore, as elements
                     * enter the viewport, we need to remove the min height.
                     */
                    // el.style.minHeight = '0';
                    el.classList.add('fadeIn--active');
                },
            });
        }, 100);
    } catch (e) {
        alert('Failed to render project deatils');
        console.log(e);
    }
};

export const renderLogo = theme => {
    const logoData = getLogoDetails();
    const logo = document.getElementById('logo-image');
    logo.src = getProjectImageSrc(logoData[theme]);

    const logoWrapper = document.getElementById('main-logo');
    if (theme === 'transparent') {
        logoWrapper.style.height = '1em';
        logoWrapper.style.width = '1em';
    } else {
        logoWrapper.style.height = '2em';
        logoWrapper.style.width = '2em';
    }
};

export const renderLandingData = () => {
    try {
        const data = getLandingDetails();
        for (let key in data) {
            setTextById(`landing-data-id--${key}`, data[key]);
        }
    } catch (e) {
        alert('Failed to render landing data');
        console.log(e);
    }
};

export const renderContactDetails = (shouldRenderMainMessage = false) => {
    try {
        const data = getAboutDetails();
        const container = document.getElementById('contact-details-wrapper');

        for (let i in data.contactDetails) {
            const contact = data.contactDetails[i];
            if (!shouldRenderMainMessage && contact.type === 'main-message') {
                bindContactLinkClickEvent(
                    'about-data-id--main-message',
                    'mailto:' + contact.href
                );
                continue;
            }

            const a = createNewElement(
                'a',
                `contact-${contact.name}`,
                contact.name
            );

            a.href =
                data.contactDetails[i].type === 'media'
                    ? contact.href
                    : 'mailto:' + contact.href;
            /* Set to open a new tab */
            a.target = '_blank';
            container.appendChild(a);
        }
    } catch (e) {
        alert('Failed to render contact details');
        console.log(e);
    }
};

export const renderAboutData = () => {
    try {
        const data = getAboutDetails();
        setTextById('about-data-id--aboutText', data.aboutText);

        const container = document.getElementById('about-data-id--photo');
        const aboutImg = createNewElement(
            'img',
            'slideIn--bottom-up__large-box'
        );
        aboutImg.src = getProjectImageSrc(data.photo.src);
        container.appendChild(aboutImg);
    } catch (e) {
        alert('Failed to render about data');
        console.log(e);
    }
};

export const renderBackToHomePageBtn = () => {
    try {
        const navBar = document.getElementById('projects-list-nav');
        const a = createNewElement('a');
        a.href = '.';
        a.appendChild(createNewElement('i', ['fa-solid', 'fa-house']));
        navBar.appendChild(a);
    } catch (e) {
        alert('Failed to render back to home page btn');
        console.log(e);
    }
};

export const renderFavicon = () => {
    try {
        const fav = document.getElementById('favicon-link');
        fav.href = getProjectImageSrc('favicon.ico');
    } catch (e) {
        alert('Failed to render favicon');
        console.log(e);
    }
};

export const renderNavMenuContactDetails = () => {
    try {
        const mediaFlexWrapper = createNewElement('div', 'media-icon-flex-row');
        const data = getAboutDetails();
        for (let i in data.contactDetails) {
            const contact = data.contactDetails[i];
            if (contact.type === 'main-message') {
                const message = createNewElement(
                    'div',
                    [
                        'hover-turn-color-blue',
                        'contact-link--font-size',
                        'slideIn--bottom-up--slow__nav-menu',
                        'slideIn--bottom-up--slow-2400ms',
                    ],
                    contact.href
                );
                bindContactLinkClickEvent(message, 'mailto:' + contact.href);
                const messageContainer = document.getElementById(
                    'nav-menu-data-id__main-message'
                );
                messageContainer.appendChild(message);
                continue;
            }

            const media = createNewElement('div', [
                'hover-turn-bgcolor-blue',
                'circle-shape',
                'slideIn--bottom-up--slow__nav-menu',
                'slideIn--bottom-up--slow-2400ms',
            ]);
            const icon = createNewElement('i', [
                'fa-brands',
                `fa-${contact.name}`,
            ]);

            bindContactLinkClickEvent(media, contact.href);

            media.appendChild(icon);
            mediaFlexWrapper.appendChild(media);
        }
        const mediaContainer = document.getElementById(
            'nav-menu-data-id__media'
        );
        mediaContainer.appendChild(mediaFlexWrapper);
    } catch (e) {
        alert('Failed to render nav menu');
        console.log(e);
    }
};

export const renderAboutComponent = () => {
    try {
        document.getElementById('__about-component').innerHTML =
            getAboutComponentHtmlContent();
    } catch (e) {
        alert('Failed to render about component');
        console.log(e);
    }
};

export const renderNavMenuComponent = () => {
    try {
        document.getElementById('__nav-menu-component').innerHTML =
            getNavMenuComponentHtmlContent();
    } catch (e) {
        alert('Failed to render nav menu component');
        console.log(e);
    }
};
