import '../css/animation.css';
import '../css/index.css';
import '../css/projects-list.css';
import '../css/project.css';
// import '../.htaccess';
import {
    renderProjectsList,
    renderProjectDetails,
    renderContactDetails,
    renderFavicon,
} from './common/render.js';
import {
    bindBackToTopBtnEvent,
    bindProjectsNavEvent,
    bindBack2HomeEvent,
} from './common/event.js';
import { bindAnimations } from './common/animation.js';

const getCurrentProjectId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectID = urlParams.get('id');
    return projectID;
};

renderFavicon();
const projectId = getCurrentProjectId();
renderProjectsList({ id: projectId });
renderProjectDetails(projectId);
renderContactDetails(true);
bindBackToTopBtnEvent();
bindProjectsNavEvent(projectId);
bindBack2HomeEvent();
bindAnimations();
