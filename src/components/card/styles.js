import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardStyled = styled(motion.img)`
    display: block;
    box-shadow: 1px 1px 10px #00000020;
    
    width: ${({ isHorizontal }) => (isHorizontal ? 'auto' : '40vh')};
    height: ${({ isHorizontal }) => (isHorizontal ? '30vh' : 'auto')};
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
    top: ${({ top }) => top || 0}px;
    left: ${({ left }) => left || 0}px;
    position: ${({ absolute }) => absolute ? 'absolute' : 'initial'};
`;

export { CardStyled };
