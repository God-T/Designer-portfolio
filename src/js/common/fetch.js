// import(
//     `${document.body.getAttribute(
//         'data-root'
//     )}/${SERVICE_ID}/projectsDetails.json`
// );

import personalDetails from '../../assets/jsons/personalDetails.json';

/* Change service for different data source */
export const SERVICE_ID = 'service-monica';

const getJson = async path => {
    try {
        const response = await fetch(path);
        const json = await response.json();
        return json;
    } catch (e) {
        throw e;
    }
};

export const getProjectsDetails = async relative => {
    try {
        return await getJson(
            `${document.body.getAttribute(
                'data-root'
            )}/${SERVICE_ID}/projectsDetails.json`
        );
    } catch (e) {
        alert('Failed to fetch projects details from service');
        console.log(e);
    }
};

export const getPersonalDetails = () => {
    try {
        return personalDetails;
    } catch (e) {
        alert('Failed to fetch personal details from service');
        console.log(e);
    }
};

export const getProjectList = async except => {
    try {
        const json = await getProjectsDetails();
        let list = json.projectDetails;
        list = list.filter(p => p.id != except.id);
        const res = list.map(p => {
            return {
                id: p.id,
                name: p.name,
                type: p.type,
            };
        });
        return res;
    } catch (e) {
        alert('Failed to fetch project list');
        console.log(e);
    }
};

export const getProjectDetails = async id => {
    try {
        const json = await getProjectsDetails();
        const list = json.projectDetails;
        const res = list.find(p => p.id == id);
        return res;
    } catch (e) {
        alert('Failed to fetch project details');
        console.log(e);
    }
};

export const getLandingDetails = async id => {
    try {
        const json = await getPersonalDetails();
        const res = json.landing;
        return res;
    } catch (e) {
        alert('Failed to fetch landing details');
        console.log(e);
    }
};

export const getAboutDetails = async id => {
    try {
        const json = await getPersonalDetails();
        const res = json.about;
        return res;
    } catch (e) {
        alert('Failed to fetch about details');
        console.log(e);
    }
};

/* get relative img path */
export const getRelativeImgSrc = fileName => {
    try {
        return (
            document.body.getAttribute('data-root') +
            `/assets/images/${fileName}`
        );
    } catch (e) {
        alert('Failed to load image assets');
        console.log(e);
    }
};
