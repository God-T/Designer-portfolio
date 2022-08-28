import { getProjectList, getProjectDetails } from './fetch.js';

const newHTMLElement = (tagType, classNames, content = null) => {
    const newEl = document.createElement(tagType);
    /* Create class name(s) */
    if (Array.isArray(classNames))
        classNames.map(name => {
            newEl.classList.add(name);
        });
    else if (typeof classNames === 'string') newEl.className = classNames;
    /* Create Text */
    if (content) newEl.appendChild(document.createTextNode(content));
    return newEl;
};

export const renderProjectsList = async (except = {}) => {
    try {
        const projectListElement = document.getElementById(
            'projects-list-container'
        );
        /* Render divider */
        projectListElement.appendChild(
            newHTMLElement('div', [
                'project-top-divider',
                'slideIn--left2right__far',
            ])
        );
        /* Render projects */
        const projectList = await getProjectList(except);
        for (let i = 0; i < projectList.length; i++) {
            const project = newHTMLElement('div', [
                'project',
                'slideIn--left2right__far',
            ]);
            project.setAttribute('id', 'project-' + projectList[i].id);
            project.appendChild(
                newHTMLElement('h1', 'project-name', projectList[i].name)
            );
            project.appendChild(
                newHTMLElement('span', 'project-type', projectList[i].type)
            );
            projectListElement.appendChild(project);

            project.addEventListener('click', () => {
                window.location.href = `./html/project.html?id=${projectList[i].id}&name=${projectList[i].name}`;
            });
        }
    } catch (e) {
        throw ('Failed to fetch projects data', e);
    }
};

export const renderProjectDetail = async projectID => {
    try {
        const projectDetails = await getProjectDetails(projectID);
        const projectDetailElement = document.getElementById(
            'project-detail-container'
        );
        console.log(projectDetailElement);

        /* Render divider */
        projectDetailElement.appendChild(
            newHTMLElement('div', [
                'project-top-divider',
                'slideIn--left2right__far',
            ])
        );

        /* Render project */
        const project = newHTMLElement('div', [
            'project-detail',
            'slideIn--left2right__far',
        ]);
        project.appendChild(
            newHTMLElement('h1', 'project-name', projectDetails.name)
        );
        project.appendChild(
            newHTMLElement('span', 'project-type', projectDetails.type)
        );
        projectDetailElement.appendChild(project);

        projectDetailElement.appendChild(
            newHTMLElement('div', 'project-detail-description')
        );
    } catch (e) {
        throw ('Failed to fetch projects data', e);
    }
};
