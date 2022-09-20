import { getProjectList } from './fetch.js';
import { renderBackToHomePageBtn, renderLogo } from './render.js';
import { resetAnimationStates, triggerAnimation } from './animation.js';

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

export const bindLogoClickEvent = defaultLogoTheme => {
    try {
        const logo = document.getElementById('main-logo');
        logo.addEventListener('click', () => {
            const navMenu = document.getElementById('nav-menu');
            if (navMenu.classList.contains('overlay__nav-menu--toggleOn')) {
                /* Turn off */
                navMenu.classList.remove('overlay__nav-menu--toggleOn');
                /* Change style of scrollbar back to black */
                setTimeout(() => {
                    document.body.classList.remove('disable-scroll');
                    navMenu.style.visibility = 'hidden';
                    renderLogo(defaultLogoTheme);
                    resetAnimationStates(
                        '.slideIn--bottom-up--slow__nav-menu',
                        'slideIn--bottom-up--slow-2400ms'
                    );
                }, 600);
            } else {
                /* Turn on */
                renderLogo('light');
                /* Reset animation for nav links */
                resetAnimationStates('.nav-menu__link', 'slideIn--bottom-up');
                triggerAnimation(
                    '.slideIn--bottom-up--slow__nav-menu',
                    'slideIn--bottom-up--slow-2400ms'
                );
                navMenu.classList.add('overlay__nav-menu--toggleOn');
                /* Change style of scrollbar to transparent */
                document.body.classList.add('disable-scroll');
                navMenu.style.visibility = 'visible';
            }
        });
    } catch (e) {
        alert('Failed to bind event to logo');
        console.log(e);
    }
};

export const bindContactLinkClickEvent = (elementRef, url) => {
    try {
        let el = elementRef;
        if (typeof elementRef === 'string')
            el = document.getElementById(elementRef);
        if (el)
            el.addEventListener('click', () => {
                window.open(url, '_blank').focus();
            });
    } catch (e) {
        alert('Failed to bind event to contact link');
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
    backbtn.href = '../';
};

export const bindNavMenuBtnEvents = isRoot => {
    let btn = document.getElementById('nav-menu__home-nav-btn');
    btn.addEventListener('click', () => {
        window.location.href = isRoot ? '/' : '../';
    });
};
