import { getProjectList } from './fetch.js';
import { renderBackToHomePageBtn } from './render.js';

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
};

export const bindBackToTopBtnEvent = () => {
    try {
        const backToTopButton = document.getElementById('back2top-Btn');
        backToTopButton.addEventListener('click', goToTop);
    } catch (e) {
        alert('Failed to bind event to back to top button');
        console.log(e);
    }
};

export const bindLogoClickEvent = () => {
    try {
        const logo = document.getElementById('main-title__logo');
        logo.addEventListener('click', () => {
            window.location.href = '.';
        });
    } catch (e) {
        alert('Failed to bind event to logo');
        console.log(e);
    }
};

export const bindMessageClickEvent = url => {
    try {
        const message = document.getElementById('about-data-id--main-message');
        message.addEventListener('click', () => {
            window.open('mailto:' + url, '_blank').focus();
        });
    } catch (e) {
        alert('Failed to bind event to message');
        console.log(e);
    }
};

export const bindProjectsNavEvent = currentProjectId => {
    try {
        const projectList = getProjectList({});
        const foundNext =
            currentProjectId < projectList.length
                ? projectList.find(p => p.id == parseInt(currentProjectId) + 1)
                : null;
        const foundPrev =
            currentProjectId > 0
                ? projectList.find(p => p.id == currentProjectId - 1)
                : null;

        const nextBtn = document.getElementById('next-project-Btn');
        if (foundNext)
            nextBtn.href = `?id=${foundNext.id}&name=${foundNext.name}`;
        else {
            nextBtn.style.visibility = 'hidden';
            renderBackToHomePageBtn();
        }

        const prevBtn = document.getElementById('prev-project-Btn');
        if (foundPrev)
            prevBtn.href = `?id=${foundPrev.id}&name=${foundPrev.name}`;
        else prevBtn.style.visibility = 'hidden';
    } catch (e) {
        alert('Failed to bind event to project list navgiations');
        console.log(e);
    }
};

export const bindBack2HomeEvent = () => {
    const backbtn = document.getElementById('back-homepage-Btn');
    backbtn.href = '.';
};
