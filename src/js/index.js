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
    renderAboutComponent,
} from './common/render.js';
import {
    bindBackToTopBtnEvent,
    bindLogoClickEvent,
    bindNavMenuBtnEvents,
} from './common/event.js';
import { bindAnimations } from './common/animation.js';

/* Render shared components */
renderAboutComponent();
/* Render other components */
renderFavicon();
renderNavMenu();
renderProjectsList();
renderLandingData();
renderAboutData();
renderContactDetails();
/* Bind events */
bindNavMenuBtnEvents();
bindBackToTopBtnEvent();
bindLogoClickEvent();
/* Enable Animations */
bindAnimations();
