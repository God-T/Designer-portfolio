import {
    renderProjectsList,
    renderLandingData,
    renderAboutData,
    renderContactDetails,
} from './common/render.js';
import { bindBackToTopBtnEvent, bindLogoClickEvent } from './common/event.js';
import { bindAnimations } from './common/animation.js';

await renderProjectsList();
await renderLandingData();
await renderAboutData();
await renderContactDetails();
bindAnimations();
bindBackToTopBtnEvent();
bindLogoClickEvent();
