import {
    renderProjectsList,
    renderLandingData,
    renderAboutData,
    renderContactDetails,
    renderFavicon,
} from './common/render.js';
import { bindBackToTopBtnEvent, bindLogoClickEvent } from './common/event.js';
import { bindAnimations } from './common/animation.js';

renderFavicon();
await renderProjectsList();
await renderLandingData();
await renderAboutData();
await renderContactDetails();
bindAnimations();
bindBackToTopBtnEvent();
bindLogoClickEvent();
