import { useAnimation } from 'framer-motion';

const getAppearingAnimation = (properties, withDelay = true) => ({
    ...properties,
    transition: {
        duration: 1,
        ...(withDelay ? { delay: 0.5 } : {}),
        easing: 'easeIn'
    }
});

const useControls = (showParams = { opacity: 1 }, hideParams = { opacity: 0 }) => {
    const controls = useAnimation();

    const show = (withDelay) =>
        controls.start(getAppearingAnimation(showParams, withDelay));

    const hide = (withDelay = false) =>
        controls.start(getAppearingAnimation(hideParams, withDelay));

    return [controls, show, hide];
};

export {
    useControls,
    getAppearingAnimation,
};
