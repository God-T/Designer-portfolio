import {
    renderProjectsList,
    renderProjectDetails,
    renderContactDetails,
    renderFavicon,
} from './common/render.js';
import { bindBackToTopBtnEvent, bindProjectsNavEvent } from './common/event.js';
import { bindAnimations } from './common/animation.js';

const getCurrentProjectId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectID = urlParams.get('id');
    return projectID;
};

renderFavicon();
const projectId = getCurrentProjectId();
await renderProjectsList(true, { id: projectId });
await renderProjectDetails(projectId);
await renderContactDetails(true);
bindBackToTopBtnEvent();
await bindProjectsNavEvent(projectId);
bindAnimations();
