import personalDetailsRaw from '../../assets/json/personalDetails.json';
import projectsDetailsRaw from '../../assets/json/projectsDetails.json';

const personalDetails = JSON.parse(personalDetailsRaw);
const projectsDetails = JSON.parse(projectsDetailsRaw);
console.log(projectsDetails.projectDetails);

const loadImagesForWebpack = () => {
    console.log('new', personalDetails.about.photo.src);
    const aboutImg = personalDetails.about.photo.src;
    import(`../../assets/images/about.jpg`);
    projectsDetails.projectDetails.map(p => {
        const folderName = p.image.folderName;
        const fileNames = p.image.fileNames;
        fileNames.map(img => {
            import(`../../assets/images/${folderName}/${img}`);
        });
    });
};
loadImagesForWebpack();

/* Change service for different data source */
export const SERVICE_ID = 'service-monica';

const getJson = async path => {
    try {
        //TODO
        return path;
    } catch (e) {
        throw e;
    }
};

export const getProjectsDetails = async relative => {
    try {
        return await getJson(projectsDetails);
    } catch (e) {
        alert('Failed to fetch projects details from service');
        console.log(e);
    }
};

export const getPersonalDetails = async () => {
    try {
        return await getJson(personalDetails);
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
