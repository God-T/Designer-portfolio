import {
    getProjectList,
    getProjectDetails,
    getLandingDetails,
    getAboutDetails,
    getProjectImageSrc,
} from './fetch.js';
import { createParagraphsWithNewLinekey } from './util.js';
import { bindMessageClickEvent } from './event.js';

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
                window.location.href = `${window.location.origin}/project?id=${projectList[i].id}&name=${projectList[i].name}`;
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
            createNewElement('div', ['project-top-divider'])
        );

        /* Render project */
        const project = createNewElement('div', [
            'project-detail',
            'slideIn--left2right',
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
                    ['project-detail-description__p', 'fadeIn'],
                    p
                )
            );
        });
        projectDetailElement.appendChild(descriptionEle);

        /* Render image */
        const imageData = projectDetails.image;
        const fileNames = imageData.fileNames;
        for (let i = 0; i < fileNames.length; i++) {
            const projectImg = createNewElement('img', [
                'project-detail-img',
                'fadeIn',
            ]);
            projectImg.src = getProjectImageSrc(
                `${imageData.folderName}/${fileNames[i]}`
            );
            projectDetailElement.appendChild(projectImg);
        }
    } catch (e) {
        alert('Failed to render project deatils');
        console.log(e);
    }
};

export const renderLandingData = () => {
    try {
        const data = getLandingDetails();
        for (let key in data) {
            setTextById(`landing-data-id--${key}`, data[key]);
        }
        const logo = document.getElementById('main-title__logo-image');
        logo.src = getProjectImageSrc(data.logoFilename);
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
                bindMessageClickEvent(contact.href);
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
        setImgSrcById(
            'about-data-id--photo',
            getProjectImageSrc(data.photo.src),
            data.photo.alt
        );
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
