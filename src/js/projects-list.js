import '../css/animation.css';
import '../css/main.css';
import '../css/nav-menu.css';
import '../css/projects-list.css';
import '../css/contact.css';
import '../css/index-shared.css';
import '../css/footer.css';
import {
    renderLogoComponent,
    renderProjectsList,
    renderFavicon,
    renderFooterComponent,
    renderContactComponent,
} from './common/render.js';
import {
    bindNavMenuAnimation,
    triggerAnimationInTurn,
} from './common/animation.js';
import { scrollTrigger } from './common/trigger.js';

/* Render shared components */
renderFavicon();
renderLogoComponent('transparent');
renderProjectsList(true);
renderContactComponent(true);
renderFooterComponent();
/* Enable Projects List Animations */
triggerAnimationInTurn(
    '.slideIn--left2right__large-box',
    'slideIn--left2right__large-box',
    270
);

/* Enable Logo Animations */
scrollTrigger('.fadeIn', {
    rootMargin: '-20px -20px -50px -20px',
    cb: function (el) {
        el.classList.add('fadeIn--active');
    },
});
/* Enable footer Animations */
scrollTrigger('.slideIn--bottom-up', {
    cb: function (el) {
        el.classList.add('slideIn--bottom-up--active');
    },
});
/* Enable Nav Menu Animations */
bindNavMenuAnimation();
