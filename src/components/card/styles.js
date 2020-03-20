import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardStyled = styled(motion.img)`
    position: relative;
    display: block;
    width: ${({ isHorizontal }) => (isHorizontal ? 'auto' : '25vw')};
    height: ${({ isHorizontal }) => (isHorizontal ? '30vh' : 'auto')};
    box-shadow: 1px 1px 10px #00000020;
    //border: 10px solid #FFF;
    
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

export { CardStyled };
