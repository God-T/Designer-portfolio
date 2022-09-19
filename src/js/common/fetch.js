import {
    personalDetails,
    projectsDetails,
    projectsImageFramesMap,
    aboutComponentHtmlContent,
} from './loadData.js';

export const getProjectList = except => {
    try {
        let list = projectsDetails.projectsDetails;
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
        alert('Failed to load project list');
        console.log(e);
    }
};

export const getProjectDetails = id => {
    try {
        let list = projectsDetails.projectsDetails;
        const res = list.find(p => p.id == id);
        return res;
    } catch (e) {
        alert('Failed to load project details');
        console.log(e);
    }
};

export const getLandingDetails = () => {
    try {
        const res = personalDetails.landing;
        return res;
    } catch (e) {
        alert('Failed to load landing details');
        console.log(e);
    }
};

export const getAboutDetails = () => {
    try {
        const res = personalDetails.about;
        return res;
    } catch (e) {
        alert('Failed to load about details');
        console.log(e);
    }
};

export const getProjectImageSrc = path => {
    try {
        return projectsImageFramesMap.get(path);
    } catch (e) {
        alert('Failed to load project image src');
        console.log(e);
    }
};

export const getAboutComponentHtmlContent = () => {
    try {
        return aboutComponentHtmlContent;
    } catch (e) {
        alert('Failed to load about component content');
        console.log(e);
    }
};
