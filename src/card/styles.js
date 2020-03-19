import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardContainer = styled(motion.div)`
    position: relative;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
    background: #ffffff;
    padding: 7px;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
    
    > img {
      display: block;
      width: ${({ isHorizontal }) => (isHorizontal ? 'auto' : `30vh`)};
      height: ${({ isHorizontal }) => (isHorizontal ? `30vh` : 'auto')};
    }
`;

export { CardContainer };
