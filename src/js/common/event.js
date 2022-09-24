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
        /* Enclose nav menu expanding time as parameter in event handler */
        let expandingTime = void 0;
        let shouldWait = false;
        let shouldExpandAfterCollapse = false;
        const collapseDuration = 400;
        const logo = document.getElementById('main-logo');

        const handleNavMenuCollapse = navMenu => {
            /* Turn on */
            expandingTime = performance.now();
            renderLogo('light');
            /* Reset animation for nav links */
            resetAnimationStates('.nav-menu__link', 'slideIn--bottom-up');
            triggerAnimation(
                '.slideIn--bottom-up--slow__nav-menu',
                'slideIn--bottom-up--slow-2200ms'
            );
            navMenu.classList.add('overlay__nav-menu--toggleOn');
            /* Change style of scrollbar to transparent */
            document.body.classList.add('disable-scroll');
            logo.classList.add('main-logo-position--light');
            navMenu.style.visibility = 'visible';
        };

        logo.addEventListener('click', () => {
            const navMenu = document.getElementById('nav-menu');
            if (navMenu.classList.contains('overlay__nav-menu--toggleOn')) {
                /* Turn off */
                shouldWait = true;
                const expandingLastsTime =
                    !expandingTime ||
                    performance.now() - expandingTime > collapseDuration
                        ? collapseDuration
                        : performance.now() - expandingTime;
                navMenu.classList.remove('overlay__nav-menu--toggleOn');
                /* Change style of scrollbar back to black */
                setTimeout(() => {
                    document.body.classList.remove('disable-scroll');
                    logo.classList.remove('main-logo-position--light');
                    resetAnimationStates(
                        '.slideIn--bottom-up--slow__nav-menu',
                        'slideIn--bottom-up--slow-2200ms'
                    );
                    navMenu.style.visibility = 'hidden';
                    renderLogo(defaultLogoTheme);

                    shouldWait = false;
                    setTimeout(() => {
                        if (shouldExpandAfterCollapse) {
                            shouldExpandAfterCollapse = false;
                            handleNavMenuCollapse(navMenu);
                        }
                    }, 50);
                }, expandingLastsTime);
            } else {
                if (shouldWait) {
                    shouldExpandAfterCollapse = true;
                    return;
                }
                handleNavMenuCollapse(navMenu);
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

export const bindNavMenuBtnEvents = isRoot => {
    document
        .getElementById('nav-menu__home-nav-btn')
        .addEventListener('click', () => {
            window.location.href = isRoot ? '/' : '../';
        });

    document
        .getElementById('nav-menu__projects-nav-btn')
        .addEventListener('click', () => {
            window.location.href = isRoot
                ? '/projects-list'
                : '../projects-list';
        });

    document
        .getElementById('nav-menu__about-nav-btn')
        .addEventListener('click', () => {
            window.location.href = isRoot ? '/about' : '../about';
        });

    document
        .getElementById('nav-menu__photography-nav-btn')
        .addEventListener('click', () => {
            window.location.href = isRoot ? '/photography' : '../photography';
        });
};
