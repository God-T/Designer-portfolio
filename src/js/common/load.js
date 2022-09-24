/* Caputure by Webpack */
import personalDetailsRaw from '../../assets/json/personalDetails.json';
import projectsDetailsRaw from '../../assets/json/projectsDetails.json';
import aboutComponent from '../../html/components/about.component.html';
import navMenuComponent from '../../html/components/nav-menu.component.html';
import logoComponent from '../../html/components/logo.component.html';
import footerComponent from '../../html/components/footer.component.html';
import contactComponent from '../../html/components/contact.component.html';

/* Export data as json objects */
export const personalDetails = JSON.parse(personalDetailsRaw);
export const projectsDetails = JSON.parse(projectsDetailsRaw);

/* Export shared HTML content */
export const aboutComponentHtmlContent = aboutComponent;
export const navMenuComponentHtmlContent = navMenuComponent;
export const logoComponentHtmlContent = logoComponent;
export const footerComponentHtmlContent = footerComponent;
export const contactComponentHtmlContent = contactComponent;

/**
 * Load all images
 * @param {Function} context - require.context
 * @returns {Array<string>} all images
 */
function loadFrames(context) {
    const framesMap = new Map();
    context.keys().forEach(k => {
        framesMap.set(k.slice(2), context(k));
    });
    return framesMap;
}

/* Export images from map with input path */
export const imageFramesMap = loadFrames(
    require.context('../../assets/images', true, /\.(png|jpg|ico|gif)$/)
);

// require.context(
//     directory: String,
//     includeSubdirs: Boolean /* default: true */,
//     filter: RegExp /* default: /^\.\/.*$/，all files */,
//     mode: String  /* 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once'，default: 'sync' */
// )

/* Alternative way to load images*/
// const loadImagesForWebpack = () => {
//     const aboutImg = personalDetails.about.photo.src;
//     import(`../../assets/images/about.jpg`);
//     projectsDetails.projectDetails.map(p => {
//         const folderName = p.image.folderName;
//         const fileNames = p.image.fileNames;
//         fileNames.map(img => {
//             import(`../../assets/images/${folderName}/${img}`);
//         });
//     });
// };
// loadImagesForWebpack();
