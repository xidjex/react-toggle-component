import styled from 'styled-components';
import { motion } from 'framer-motion';

// Assets
import noise from '../../assets/noise.png';

const CategoriesContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: background-color 0.6s ease;
    
    background-color: ${({ backgroundColor }) => backgroundColor};
    background-image: url(${noise});
    background-size: 120px;
`;

const CardsContainer = styled.div`
    > div > div {
        align-items: center;
        justify-content: space-between;
        display: flex;
    
        width: calc(100% + ${({ imagesCount }) => imagesCount * 20}px);
        margin-left: -${({ imagesCount }) => imagesCount * 10}px;
    }
`;

const Header = styled(motion.div)`
    width: 100%;
    height: 85px;
    z-index: 10;
    position: absolute;
    top: -85px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
   margin: 0;
   padding: 0;
   width: max-content;
   text-transform: uppercase;
   letter-spacing: 8px;
   font-size: 24px;
   font-weight: 200;
   color: #fff;
`;

const LeftSide = styled(motion.div)`
    width: 85px;
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: -85px
`;

const RightSide = styled(motion.div)`
    width: 85px;
    height: 100%;
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: -85px;
    
    > div {
      position: fixed;
      transform: rotate(-90deg);
    }
`;

const Controls = styled(motion.div)`
  position: absolute;
  top: 50%;
  opacity: 0;
  z-index: 10;
  transform: translateY(-50%);
  left: ${({ left }) => left};
`;

export {
    Header,
    Title,
    LeftSide,
    RightSide,
    Controls,
    CategoriesContainer,
    CardsContainer,
};
