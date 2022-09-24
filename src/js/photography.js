import '../css/animation.css';
import '../css/main.css';
import '../css/nav-menu.css';
import '../css/index-shared.css';
import '../css/contact.css';
import '../css/footer.css';
import '../css/photography.css';
import { renderPhotography } from './common/render.js';
import {
    renderFavicon,
    renderLogoComponent,
    renderFooterComponent,
    renderContactComponent,
} from './common/render.js';
import { bindGeneralAnimations } from './common/animation.js';

/* Render shared components */
renderFavicon();
renderLogoComponent('transparent');
renderContactComponent(true);
renderFooterComponent();
/* Render other components */
renderPhotography();
/* Enable Animations */
bindGeneralAnimations();
