export function scrollTrigger(selector, options, forward = () => {}) {
    let els = document.querySelectorAll(selector);
    // console.log(selector, els);
    /* NodeList to Array */
    els = Array.from(els);
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
        alert('"IntersectionObserver" is supported');
        if (options.cb) options.cb(el);
        return;
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            /* Check if element in view */
            if (entry.isIntersecting) {
                /* Excute callback */
                // console.log('?entry', entry, el);
                if (options.cb) options.cb(el);
                /* Unsubscribe observer*/
                observer.unobserve(entry.target);
            }
        });
    }, options);
    /* Start observing */
    observer.observe(el);
}
