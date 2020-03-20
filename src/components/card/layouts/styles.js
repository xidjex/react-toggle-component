import { motion } from 'framer-motion';
import styled from 'styled-components';

// Utils
import { random } from './utils';

const CardWrapper = styled(motion.div)`
    position: absolute;
    width: max-content;
    height: max-content;
    top: 100%;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
    opacity: 0;
`;

const GridContainer = styled.div`
width: 100%;
height: 100%;
overflow-y: auto;
overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GridColumn = styled.div`
    margin: 30px;
    padding: 0 4px;
`;

const CardGridContainer = styled(motion.div)`
display: flex;
margin-top: 30px;
align-items: center;
opacity: 0;
justify-content: center;
transform: rotate(${({ angle }) => angle}deg);
`;

const makeStackVariants = (index = 0, withDelay = false ) => {
    const randomX = random(300);
    const randomAngle = random(10);

    return ({
        show: {
            x: [`${randomX}%`, '-50%'],
            y: ['100%', '-50%'],
            top: '50%',
            left: '50%',
            rotate: [0, 0, randomAngle],
            opacity: [0, 1, 1],
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
        },
        fullscreen: {
            rotate: 0,
        }
    });
};

const makeGridVariants = (index = 0) => {
    const randomX = random(300);
    const randomAngle = random(2);

    return ({
        show: {
            x: [`${randomX}%`, '0%'],
            y: ['500%', '0%'],
            top: '0%',
            left: '0%',
            rotate: [-45, randomAngle],
            opacity: [0, 1, 1],
            transition: {
                duration: 0.6,
                delay: index * 0.3
            }
        },
        hide: {
            x: ['0%', '500%'],
            y: ['0%', '500%'],
            rotate: 25,
            left: randomX,
            top: '100%',
            transition: {
                duration: 0.6
            }
        }
    });
};



export {
    GridColumn,
    GridContainer,
    CardWrapper,
    CardGridContainer,
    makeStackVariants,
    makeGridVariants
};
