import '../css/animation.css';
import '../css/main.css';
import '../css/nav-menu.css';
import '../css/about.css';
import '../css/about-page.css';
import '../css/index-shared.css';
import '../css/footer.css';
import {
    renderFavicon,
    renderAboutComponent,
    renderLogoComponent,
    renderFooterComponent,
    renderContactComponent,
} from './common/render.js';
import { bindGeneralAnimations } from './common/animation.js';

/* Render shared components */
renderFavicon();
renderLogoComponent('transparent');
renderAboutComponent();
renderContactComponent(true);
renderFooterComponent();
/* Enable Animations */
bindGeneralAnimations();
