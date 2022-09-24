import '../css/animation.css';
import '../css/main.css';
import '../css/projects-list.css';
import '../css/project.css';
import '../css/contact.css';
import '../css/nav-menu.css';
import '../css/index-shared.css';
import '../css/footer.css';
import {
    renderProjectsList,
    renderProjectDetails,
    renderFavicon,
    renderLogoComponent,
    renderFooterComponent,
    renderContactComponent,
} from './common/render.js';
import { bindGeneralAnimations } from './common/animation.js';

const getCurrentProjectId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectID = urlParams.get('id');
    return projectID;
};
const projectId = getCurrentProjectId();

/* Render shared components */
renderFavicon();
renderLogoComponent('transparent');
renderProjectsList(true, { id: projectId });
renderContactComponent(true);
renderFooterComponent();
/* Render other components */
renderProjectDetails(projectId);
/* Enable Animations */
bindGeneralAnimations();

/* Bind events */
// renderContactDetails(true);
// bindBackToTopBtnEvent();
// bindProjectsNavEvent(projectId);
// bindBack2HomeEvent();
