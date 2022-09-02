import { scrollTrigger } from './trigger.js';

export const bindAnimations = () => {
    scrollTrigger('.fadeIn', {
        rootMargin: '-20px -50px -50px -50px',
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

    scrollTrigger('.slideIn--bottom-up', {
        cb: function (el) {
            el.classList.add('slideIn--bottom-up--active');
        },
    });

    scrollTrigger('.slideIn--bottom-up__large-box', {
        rootMargin: '0px -100px -100px -100px',
        cb: function (el) {
            el.classList.add('slideIn--bottom-up__large-box--active');
        },
    });

    scrollTrigger('.slideIn--left2right--slow', {
        rootMargin: '0px -100px -200px -100px',
        cb: function (el) {
            console.log('inininini', el);
            el.classList.add('slideIn--left2right--slow--active');
        },
    });
};
