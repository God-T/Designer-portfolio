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
    renderLogo,
    renderNavMenuContactDetails,
    renderAboutComponent,
    renderNavMenuComponent,
} from './common/render.js';
import {
    bindBackToTopBtnEvent,
    bindLogoClickEvent,
    bindNavMenuBtnEvents,
} from './common/event.js';
import { bindAnimations } from './common/animation.js';

/* Render shared components */
renderNavMenuComponent();
renderAboutComponent();
/* Render other components */
renderFavicon();
renderNavMenuContactDetails();
renderLogo('dark');
renderProjectsList();
renderLandingData();
renderAboutData();
renderContactDetails();
/* Bind events */
bindNavMenuBtnEvents(true);
bindBackToTopBtnEvent();
bindLogoClickEvent('dark');
/* Enable Animations */
bindAnimations();
