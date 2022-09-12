import {
    renderProjectsList,
    renderLandingData,
    renderAboutData,
    renderContactDetails,
    renderFavicon,
} from './common/render.js';
import { bindBackToTopBtnEvent, bindLogoClickEvent } from './common/event.js';
import { bindAnimations } from './common/animation.js';

function turnGreen() {
    document.body.style.backgroundColor = 'green';
}

// renderFavicon();
// await renderProjectsList();
renderLandingData();
await renderAboutData();
await renderContactDetails();
// bindAnimations();
// bindBackToTopBtnEvent();
// bindLogoClickEvent();
// turnGreen();
