import { getProjectList, getProjectDetails, getBaseInfo } from './fetch.js';
import { createParagraphsWithNewLinekey } from './util.js';

const createNewElement = (tagType, classNames, content = null) => {
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

const setTextById = (id, content = '') => {
    const el = document.getElementById(id);
    el.appendChild(document.createTextNode(content));
};

export const renderProjectsList = async (
    useRelativePath = false,
    except = {}
) => {
    try {
        const projectListElement = document.getElementById(
            'projects-list-container'
        );
        /* Render divider */
        projectListElement.appendChild(
            createNewElement('div', [
                'project-top-divider',
                'slideIn--left2right--slow',
            ])
        );
        /* Render projects */
        const projectList = await getProjectList(except);
        for (let i = 0; i < projectList.length; i++) {
            const project = createNewElement('div', [
                'project',
                'slideIn--left2right--slow',
            ]);
            project.setAttribute('id', 'project-' + projectList[i].id);
            project.appendChild(
                createNewElement('h1', 'project-name', projectList[i].name)
            );
            project.appendChild(
                createNewElement('span', 'project-type', projectList[i].type)
            );
            projectListElement.appendChild(project);

            project.addEventListener('click', () => {
                window.location.href = !useRelativePath
                    ? `./html/project.html?id=${projectList[i].id}&name=${projectList[i].name}`
                    : `./project.html?id=${projectList[i].id}&name=${projectList[i].name}`;
            });
        }
    } catch (e) {
        alert('Failed to fetch projects data');
        throw e;
    }
};

export const renderProjectDetail = async projectID => {
    try {
        const projectDetails = await getProjectDetails(projectID);
        const projectDetailElement = document.getElementById(
            'project-detail-container'
        );

        /* Render divider */
        projectDetailElement.appendChild(
            createNewElement('div', ['project-top-divider'])
        );

        /* Render project */
        const project = createNewElement('div', [
            'project-detail',
            'slideIn--left2right',
        ]);
        project.appendChild(
            createNewElement('h1', 'project-name', projectDetails.name)
        );
        project.appendChild(
            createNewElement('span', 'project-type', projectDetails.type)
        );
        projectDetailElement.appendChild(project);

        /* Render description */
        const descriptionEle = createNewElement('div', [
            'project-detail-description',
        ]);
        const paragraphs = createParagraphsWithNewLinekey(
            projectDetails.description
        );
        paragraphs?.map(p => {
            descriptionEle.appendChild(
                createNewElement('div', 'project-detail-description__p', p)
            );
        });
        projectDetailElement.appendChild(descriptionEle);

        /* Render image */
        const projectImg = createNewElement(
            'img',
            ['project-detail-img'],
            projectDetails.description
        );
        projectImg.src = `../../assets/images/${projectDetails.imgFileName}`;
        projectDetailElement.appendChild(projectImg);
    } catch (e) {
        alert('Failed to fetch project deatils data');
        throw e;
    }
};

export const renderLandingPage = async () => {
    const info = await getBaseInfo();
    for (let key in info) {
        console.log(key);
    }
};
