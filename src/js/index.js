import { renderProjects } from './render.js';
import { bindBackToTopBtnEvent } from './event.js';
import { bindAnimations } from './animation.js';

await renderProjects();
bindAnimations();
bindBackToTopBtnEvent();

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
