const getJson = async path => {
    const response = await fetch(path);
    const json = await response.json();
    return json;
};

export const getProjects = async () => {
    return await getJson('../../service/projectsList.json');
};

export const getProjectsDetails = async () => {
    return await getJson('../../service/projectsDetails.json');
};

export const getBaseInfo = async () => {
    return await getJson('../../service/baseInfo,json');
};

export const getProjectList = async except => {
    const json = await getProjects();
    const list = json.projectList;
    const res = list.filter(p => p.id != except.id);
    return res;
};

export const getProjectDetails = async id => {
    const json = await getProjectsDetails();
    const list = json.projectDetails;
    const res = list.find(p => p.id == id);
    return res;
};
