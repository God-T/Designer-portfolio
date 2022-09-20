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
    renderNavMenuComponent,
} from './common/render.js';
import {
    bindBackToTopBtnEvent,
    bindProjectsNavEvent,
    bindBack2HomeEvent,
    bindLogoClickEvent,
    bindNavMenuBtnEvents,
} from './common/event.js';
import { bindAnimations } from './common/animation.js';

const getCurrentProjectId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectID = urlParams.get('id');
    return projectID;
};

/* Render shared components */
renderNavMenuComponent();
/* Render other components */
renderFavicon();
renderNavMenuContactDetails();
renderLogo('transparent');
const projectId = getCurrentProjectId();
renderProjectsList({ id: projectId });
renderProjectDetails(projectId);
renderContactDetails(true);
/* Bind events */
bindBackToTopBtnEvent();
bindProjectsNavEvent(projectId);
bindBack2HomeEvent();
bindLogoClickEvent('transparent');
bindNavMenuBtnEvents();
/* Enable Animations */
bindAnimations();
