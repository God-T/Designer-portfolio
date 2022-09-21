import { scrollTrigger } from './trigger.js';

const testFunc = el => {
    var rect = el.getBoundingClientRect();
    var availableWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    var availableHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    console.log(el, rect.top, rect.right, rect.bottom, rect.left);
    console.log(availableWidth, availableHeight);
};

export const bindGeneralAnimations = () => {
    scrollTrigger('.fadeIn', {
        rootMargin: '-20px -20px -50px -20px',
        cb: function (el) {
            el.classList.add('fadeIn--active');
        },
    });

    scrollTrigger('.slideIn--left2right', {
        rootMargin: '0px -50px -50px -50px',
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

    scrollTrigger('.slideIn--bottom-up--slow', {
        cb: function (el) {
            el.classList.add('slideIn--bottom-up--slow--active');
        },
    });

    scrollTrigger('.slideIn--bottom-up__large-box', {
        rootMargin: '0px -100px -100px -100px',
        cb: function (el) {
            el.classList.add('slideIn--bottom-up__large-box--active');
        },
    });

    scrollTrigger('.slideIn--left2right__large-box', {
        rootMargin: '-50px -100px -200px -100px',
        cb: function (el) {
            el.classList.add('slideIn--left2right__large-box--active');
        },
    });

    scrollTrigger('.fadeIn--slow', {
        rootMargin: '-20px -20px -50px -20px',
        cb: function (el) {
            el.classList.add('fadeIn--slow--active');
        },
    });

    bindNavMenuAnimation();
};

export function bindNavMenuAnimation() {
    scrollTrigger('.nav-menu__link', {
        cb: function (el) {
            el.classList.add('slideIn--bottom-up--active');
        },
        isLooping: true,
    });
}

export const resetAnimationStates = (targetSelecter, activedAnimationClass) => {
    document
        .querySelectorAll(targetSelecter)
        .forEach(el => el.classList.remove(activedAnimationClass + '--active'));
};

export const triggerAnimation = (targetSelecter, animationClass) => {
    document
        .querySelectorAll(targetSelecter)
        .forEach(el => el.classList.add(animationClass + '--active'));
};

export const triggerAnimationInTurn = (
    targetSelecter,
    animationClass,
    interval
) => {
    document.querySelectorAll(targetSelecter).forEach((el, index) => {
        setTimeout(
            () => el.classList.add(animationClass + '--active'),
            index * interval
        );
    });
};
