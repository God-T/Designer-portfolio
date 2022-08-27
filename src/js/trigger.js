function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector);
    /* NodeList to Array */
    els = Array.from(els);
    els.forEach(el => {
        /* Add trigger observers */
        addObserver(el, options);
    });
}

function addObserver(el, options) {
    /* Check if "IntersectionObserver" is supported */
    if (!('IntersectionObserver' in window)) {
        /* Call/trigger  animation/callback immediately */
        if (options.cb) options.cb(el);
        return;
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            /* Check if element in view */
            if (entry.isIntersecting) {
                /* Excute callback */
                if (options.cb) options.cb(el);
                /* Unsubscribe observer */
                observer.unobserve(entry.target);
            }
        });
    }, options);
    /* Subscribe observer */
    observer.observe(el);
}

scrollTrigger('.loader', {
    rootMargin: '-200px',
    cb: function (el) {
        el.classList.add('active');
    },
});
