import {
    getProjectList,
    getProjectDetails,
    getLandingDetails,
    getAboutDetails,
    getImageSrc,
    getLogoDetails,
    getFooterDetails,
    getPhotographyDetails,
    getAboutComponentHtmlContent,
    getNavMenuComponentHtmlContent,
    getLogoComponentHtmlContent,
    getFooterComponentHtmlContent,
    getContactComponentHtmlContent,
} from './fetch.js';
import {
    createParagraphsWithNewLinekey,
    createNewElement,
    setTextById,
} from './util.js';
import {
    bindLogoClickEvent,
    bindBackToTopBtnEvent,
    bindContactLinkClickEvent,
    bindNavMenuBtnEvents,
} from './event.js';
import { scrollTrigger } from './trigger.js';

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

export const renderBackToHomePageBtn = () => {
    try {
        const navBar = document.getElementById('projects-list-nav');
        const a = createNewElement('a');
        a.href = '../';
        a.appendChild(createNewElement('i', ['fa-solid', 'fa-house']));
        navBar.appendChild(a);
    } catch (e) {
        alert('Failed to render back to home page btn');
        console.log(e);
    }
};

/***************************************************************
                        Index Page
***************************************************************/
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

/***************************************************************
                        Project page
***************************************************************/
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
        for (let i = 0; i < fileNames.length; i++) {
            const projectImg = createNewElement('img', ['project-detail-img']);

            const imageSrc = getImageSrc(
                `${imageData.folderName}/${fileNames[i]}`
            );
            projectImg.src = imageSrc;

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

/***************************************************************
                        Photography Page
***************************************************************/
export const renderPhotography = () => {
    const photographyDetails = getPhotographyDetails();
    /* Render image */
    const fileNames = photographyDetails.fileNames;
    for (let i = 0; i < fileNames.length; i++) {
        const img = document.getElementById(
            `photography-data-id__${fileNames[i].id}`
        );
        const imageSrc = getImageSrc(
            `${photographyDetails.folderName}/${fileNames[i].name}`
        );
        img.src = imageSrc;
    }
};

/***************************************************************
                        Favicon Component
***************************************************************/
export const renderFavicon = () => {
    try {
        const title = document.getElementsByTagName('title')[0];
        title.appendChild(
            document.createTextNode(getLandingDetails().fullName)
        );
        const fav = document.getElementById('favicon-link');
        fav.href = getImageSrc('favicon.ico');
    } catch (e) {
        alert('Failed to render favicon');
        console.log(e);
    }
};

/***************************************************************
                        Project List Component
***************************************************************/
export const renderProjectsList = (isLite, isRoot, except = {}) => {
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
                isLite ? 'project--lite' : 'project',
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
                window.location.href = `${isRoot ? '.' : '..'}/project?id=${
                    projectList[i].id
                }&name=${projectList[i].name}`;
            });
        }
    } catch (e) {
        alert('Failed to render projects list');
        console.log(e);
    }
};

/***************************************************************
                        About Component
***************************************************************/
export const renderAboutComponent = () => {
    try {
        document.getElementById('__about-component').innerHTML =
            getAboutComponentHtmlContent();
        renderAboutData();
    } catch (e) {
        alert('Failed to render about component');
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
        aboutImg.src = getImageSrc(data.photo.src);
        container.appendChild(aboutImg);
    } catch (e) {
        alert('Failed to render about data');
        console.log(e);
    }
};

/***************************************************************
                        Contact Component
***************************************************************/
export const renderContactComponent = (shouldRenderMainMessage = false) => {
    try {
        document.getElementById('__contact-component').innerHTML =
            getContactComponentHtmlContent();
        renderContactDetails(shouldRenderMainMessage);
        bindBackToTopBtnEvent();
    } catch (e) {
        alert('Failed to render contact component');
        console.log(e);
    }
};

export const renderContactDetails = (shouldRenderMainMessage = false) => {
    try {
        const data = getAboutDetails();
        const container = document.getElementById('contact-details-wrapper');

        if (shouldRenderMainMessage)
            document.getElementById('contact-info__greating').style.display =
                'none';

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

/***************************************************************
                        Logo Component
***************************************************************/
export const renderLogoComponent = (logoTheme, isRoot = false) => {
    try {
        /* Render logo */
        document.getElementById('__logo-component').innerHTML =
            getLogoComponentHtmlContent();
        renderLogo(logoTheme);
        bindLogoClickEvent(logoTheme);

        /* Render nav menu */
        document.getElementById('__nav-menu-component').innerHTML =
            getNavMenuComponentHtmlContent();
        renderNavMenuContactDetails();
        bindNavMenuBtnEvents(isRoot);
    } catch (e) {
        alert('Failed to render logo component');
        console.log(e);
    }
};

export const renderLogo = theme => {
    const logoData = getLogoDetails();
    const logo = document.getElementById('logo-image');
    logo.src = getImageSrc(logoData[theme]);

    const logoWrapper = document.getElementById('main-logo');
    if (theme === 'transparent') logoWrapper.style.transform = 'scale(0.7)';
    else logoWrapper.style.transform = 'scale(1)';
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
                        'slideIn--bottom-up--slow-2200ms',
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
                'slideIn--bottom-up--slow-2200ms',
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

/***************************************************************
                        Footer Component
***************************************************************/
export const renderFooterComponent = () => {
    try {
        document.getElementById('__footer-component').innerHTML =
            getFooterComponentHtmlContent();
        document
            .getElementById('footer-data-id--rights-reserved')
            .appendChild(
                document.createTextNode(
                    `©${getFooterDetails().year} ${
                        getFooterDetails().rightsHolder
                    } - All Rights Reserved`
                )
            );
    } catch (e) {
        alert('Failed to render footer component');
        console.log(e);
    }
};
