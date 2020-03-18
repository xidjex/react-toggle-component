import { motion } from 'framer-motion';
import styled from 'styled-components';

// Utils
import { random } from './utils';

const CardContainer = styled(motion.div)`
    position: absolute;
    top: 100%;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
    background: #ffffff;
    padding: 10px;
    opacity: 0;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
    
    > img {
      display: block;
      max-width: ${({ isHorizontal, maxSize }) => (isHorizontal ? 'auto' : `${maxSize}px`)};
      height: ${({ isHorizontal, maxSize }) => (isHorizontal ? `${maxSize}px` : 'auto')};
    }
`;

const makeVariants = (index = 0, withDelay = false ) => {
    const randomX = random(200);
    const randomAngle = random(10);

    return ({
        show: {
            x: [`${randomX}%`, '-50%'],
            y: ['100%', '-50%'],
            top: '50%',
            left: '50%',
            rotate: [-45, randomAngle],
            opacity: [1, 1],
            transition: {
                duration: 0.6,
                delay: withDelay ? index * 0.2 : 0
            }
        },
        hide: {
            x: ['-50%', '100%'],
            y: ['-50%', '100%'],
            rotate: 25,
            left: randomX,
            top: '100%',
            transition: {
                duration: 0.6
            }
        }
    });
};

export { CardContainer, makeVariants };
