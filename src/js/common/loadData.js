import personalDetailsRaw from '../../assets/json/personalDetails.json';
import projectsDetailsRaw from '../../assets/json/projectsDetails.json';

/* Export data as json objects */
export const personalDetails = JSON.parse(personalDetailsRaw);
export const projectsDetails = JSON.parse(projectsDetailsRaw);

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
export const projectsImageFramesMap = loadFrames(
    require.context('../../assets/images', true, /\.(png|jpg|ico|gif)$/)
);
// console.log(projectsImageFramesMap);
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
