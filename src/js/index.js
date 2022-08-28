import { renderProjectsList } from './common/render.js';
import { bindBackToTopBtnEvent } from './common/event.js';
import { bindAnimations } from './common/animation.js';
import { getProjectList } from './common/fetch.js';

renderProjectsList(await getProjectList());
bindAnimations();
bindBackToTopBtnEvent();
