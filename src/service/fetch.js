const getJson = async path => {
    const response = await fetch(path);
    const json = await response.json();
    return json;
};

export const getBaseInfo = async () => {
    return await getJson('./service/baseInfo,json');
};

export const getProjects = async () => {
    return await getJson('./service/projects.json');
};
