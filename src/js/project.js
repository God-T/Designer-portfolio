import '../css/animation.css';
import '../css/index.css';
import '../css/projects-list.css';
import '../css/project.css';
import '../css/nav-menu.css';
import {
    renderProjectsList,
    renderProjectDetails,
    renderContactDetails,
    renderFavicon,
    renderLogo,
    renderNavMenuContactDetails,
    renderLogoComponent,
} from './common/render.js';
import {
    bindBackToTopBtnEvent,
    bindProjectsNavEvent,
    bindBack2HomeEvent,
    bindLogoClickEvent,
    bindNavMenuBtnEvents,
} from './common/event.js';
import { bindGeneralAnimations } from './common/animation.js';

const getCurrentProjectId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectID = urlParams.get('id');
    return projectID;
};
const projectId = getCurrentProjectId();

/* Render shared components */
renderLogoComponent();
renderProjectsList(true, { id: projectId });
/* Render other components */
renderFavicon();
renderNavMenuContactDetails();
renderLogo('transparent');
renderProjectDetails(projectId);
renderContactDetails(true);
/* Bind events */
bindBackToTopBtnEvent();
bindProjectsNavEvent(projectId);
bindBack2HomeEvent();
bindLogoClickEvent('transparent');
bindNavMenuBtnEvents();
/* Enable Animations */
bindGeneralAnimations();
