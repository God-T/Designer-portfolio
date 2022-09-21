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
    renderLogoComponent,
} from './common/render.js';
import {
    bindBackToTopBtnEvent,
    bindLogoClickEvent,
    bindNavMenuBtnEvents,
} from './common/event.js';
import { bindGeneralAnimations } from './common/animation.js';

/* Render shared components */
renderLogoComponent();
renderAboutComponent();
renderProjectsList(false);
/* Render other components */
renderFavicon();
renderNavMenuContactDetails();
renderLogo('dark');
renderLandingData();
renderAboutData();
renderContactDetails();
/* Bind events */
bindNavMenuBtnEvents(true);
bindBackToTopBtnEvent();
bindLogoClickEvent('dark');
/* Enable Animations */
bindGeneralAnimations();
