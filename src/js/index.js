import '../css/animation.css';
import '../css/index.css';
import '../css/main.css';
import '../css/landing.css';
import '../css/projects-list.css';
import '../css/nav-menu.css';
import '../css/about.css';
import '../css/footer.css';
import {
    renderProjectsList,
    renderLandingData,
    renderFavicon,
    renderAboutComponent,
    renderLogoComponent,
    renderFooterComponent,
    renderContactComponent,
} from './common/render.js';
import { bindGeneralAnimations } from './common/animation.js';

/* Render shared components */
renderFavicon();
renderLogoComponent('dark', true);
renderProjectsList(false);
renderAboutComponent();
renderContactComponent();
renderFooterComponent();
/* Render the page */
renderLandingData();
/* Enable Animations */
bindGeneralAnimations();
