export function createParagraphsWithNewLinekey(text) {
    return text?.split('\n');
}

export const createNewElement = (tagType, classNames, content = null) => {
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

export const setTextById = (id, content = '') => {
    const el = document.getElementById(id);
    if (el) el.textContent = content;
};
