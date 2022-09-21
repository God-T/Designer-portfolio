import '../css/animation.css';
import '../css/index.css';
import '../css/nav-menu.css';
import '../css/projects-list.css';
import '../css/index-shared.css';
import {
    renderLogoComponent,
    renderProjectsList,
    renderNavMenuContactDetails,
    renderLogo,
    renderFavicon,
} from './common/render.js';
import {
    bindNavMenuAnimation,
    triggerAnimationInTurn,
} from './common/animation.js';
import { scrollTrigger } from './common/trigger.js';
import { bindLogoClickEvent, bindNavMenuBtnEvents } from './common/event.js';

/* Render shared components */
renderLogoComponent();
renderProjectsList(true);
/* Render other components */
renderFavicon();
renderNavMenuContactDetails();
renderLogo('transparent');
/* Bind events */
bindLogoClickEvent('transparent');
bindNavMenuBtnEvents();
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
/* Enable Nav Menu Animations */
bindNavMenuAnimation();
