import { getProjects } from '../service/fetch.js';

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

export const renderProjects = async () => {
    try {
        const projectData = await getProjects();
        const projectListElement = document.getElementById(
            'projects-list-container'
        );
        /* Render projects */
        projectListElement.appendChild(
            newHTMLElement('div', [
                'project-top-divider',
                'slideIn--left2right__far',
            ])
        );
        /* Render projects */
        const list = projectData.projectList;
        for (let i = 0; i < list.length; i++) {
            const project = newHTMLElement('div', [
                'project',
                'slideIn--left2right__far',
            ]);
            project.appendChild(
                newHTMLElement('h1', 'project-name', list[i].name)
            );
            project.appendChild(
                newHTMLElement('span', 'project-type', list[i].type)
            );
            projectListElement.appendChild(project);
        }
    } catch (e) {
        throw ('Failed to fetch projects data', e);
    }
};
