import { scrollTrigger } from './trigger.js';

export const bindAnimations = () => {
    scrollTrigger('.fadeIn', {
        rootMargin: '-50px',
        cb: function (el) {
            el.classList.add('fadeIn--active');
        },
    });

    scrollTrigger('.slideIn--left2right', {
        rootMargin: '-50px',
        cb: function (el) {
            el.classList.add('slideIn--left2right--active');
        },
    });

    scrollTrigger('.slideIn--right2left', {
        rootMargin: '-50px',
        cb: function (el) {
            el.classList.add('slideIn--right2left--active');
        },
    });

    scrollTrigger('.slideIn--bottom2up', {
        rootMargin: '-50px',
        cb: function (el) {
            el.classList.add('slideIn--bottom2up--active');
        },
    });

    scrollTrigger('.slideIn--bottom2up__large-box', {
        rootMargin: '-200px',
        cb: function (el) {
            el.classList.add('slideIn--bottom2up__large-box--active');
        },
    });

    scrollTrigger('.slideIn--left2right__far', {
        rootMargin: '-200px',
        cb: function (el) {
            el.classList.add('slideIn--left2right__far--active');
        },
    });
};
