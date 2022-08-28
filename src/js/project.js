import { renderProjectsList, renderProjectDetail } from './common/render.js';

const getCurrentProjectId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projectID = urlParams.get('id');
    return projectID;
};

const projectId = getCurrentProjectId();
renderProjectsList({ id: projectId });
renderProjectDetail(projectId);
