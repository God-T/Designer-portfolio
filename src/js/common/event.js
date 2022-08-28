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
        throw ('Failed to bind event to back to top button', e);
    }
};
