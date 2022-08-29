import { renderProjectsList, renderProjectDetail } from './common/render.js';
import { bindBackToTopBtnEvent } from './common/event.js';
import { bindAnimations } from './common/animation.js';

const getCurrentProjectId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectID = urlParams.get('id');
    return projectID;
};

const projectId = getCurrentProjectId();
await renderProjectsList({ id: projectId });
await renderProjectDetail(projectId);
bindBackToTopBtnEvent();
bindAnimations();
