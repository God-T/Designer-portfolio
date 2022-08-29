export function scrollTrigger(selector, options, forward = () => {}) {
    let els = document.querySelectorAll(selector);
    /* NodeList to Array */
    els = Array.from(els);
    console.log(els, '?');
    els.forEach(el => {
        /* Excute forward callback */
        forward(el);
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
                /* Unsubscribe observer*/
                observer.unobserve(entry.target);
            }
        });
    }, options);
    /* Start observing */
    observer.observe(el);
}
