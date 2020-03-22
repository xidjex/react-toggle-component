const getAppearingAnimation = (properties) => ({
    ...properties,
    transition: {
        duration: 1,
        delay: 0.5,
        easing: 'easeIn'
    }
});

export {
    getAppearingAnimation,
};
