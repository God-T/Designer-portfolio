import '../css/animation.css';
import '../css/index.css';
import '../css/about.css';
import '../css/landing.css';
import '../css/projects-list.css';
import '../css/nav-menu.css';
// import '../.htaccess';
import {
    renderProjectsList,
    renderLandingData,
    renderAboutData,
    renderContactDetails,
    renderFavicon,
    renderNavMenu,
} from './common/render.js';
import {
    bindBackToTopBtnEvent,
    bindLogoClickEvent,
    bindNavMenuBtnEvents,
} from './common/event.js';
import { bindAnimations } from './common/animation.js';

renderFavicon();
renderNavMenu();
renderProjectsList();
renderLandingData();
renderAboutData();
renderContactDetails();
bindNavMenuBtnEvents();
bindBackToTopBtnEvent();
bindLogoClickEvent();
bindAnimations();
