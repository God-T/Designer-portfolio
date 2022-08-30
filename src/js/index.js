import { renderProjectsList } from './common/render.js';
import { bindBackToTopBtnEvent, bindLogoClickEvent } from './common/event.js';
import { bindAnimations } from './common/animation.js';

await renderProjectsList();
bindAnimations();
bindBackToTopBtnEvent();
bindLogoClickEvent();
