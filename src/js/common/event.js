const goToTop = () => {
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
};

export const bindBackToTopBtnEvent = () => {
    try {
        const backToTopButton = document.getElementById('back2top-Btn');
        backToTopButton.addEventListener('click', goToTop);
    } catch (e) {
        alert('Failed to bind event to back to top button');
        throw e;
    }
};

export const bindLogoClickEvent = (useRelativePath = false) => {
    try {
        const logo = document.getElementById('main-title__logo');
        logo.addEventListener('click', () => {
            window.location.href = useRelativePath
                ? `../index.html`
                : `./index.html`;
        });
    } catch (e) {
        alert('Failed to bind event to logo');
        throw e;
    }
};
