import styled, { css } from 'styled-components';
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
    
    transition: background-color 0.8s ease;
    
    background-color: ${({ backgroundColor }) => backgroundColor};
    // background-image: url(${noise});
    background-size: 120px;
`;

const gridMixin = css`
    display: grid;
    top: 85px;
    left: 0;
    right: 0;
    height: calc(100% - 95px);
    margin: 0 10px 10px 10px;
    position: absolute;
    overflow-y: auto;
    grid-template-rows: max-content;
    grid-template-columns: repeat(auto-fit, minmax(155px, auto));
    gap: 10px;
`;

const stackMixin = css`
    align-items: center;
    justify-content: space-between;
    display: flex;
    
    width: calc(100% + ${({ imagesCount }) => imagesCount * 20}px);
    margin-left: -${({ imagesCount }) => imagesCount * 10}px;
`;

const CardsContainer = styled.div`
    > div > div {
        ${({ isGrid }) => isGrid ? gridMixin : stackMixin}
    }
`;

const CardsGridContainer = styled.div`
    visibility: hidden;
    ${gridMixin}
    
    > div > img {
      width: 100% !important;
      height: 100%;
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
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    
    width: ${({ isMobile }) => isMobile ? '40px' : '20%'};
`;

const RightSide = styled(motion.div)`
    height: 100%;
    display: flex;
    z-index: 10;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    
    transition: opacity 0.6s ease;
    
    opacity: ${({ isTranslucent }) => isTranslucent ? 0.4 : 1};
    width: ${({ isMobile }) => isMobile ? '40px' : '20%'};
    
    > div {
      position: fixed;
      transform: rotate(-90deg);
    }
    
    :hover {
        opacity: 1;
    }
`;

const ControlsContainer = styled(motion.div)`
  position: absolute;
  opacity: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  transform: translate(-50%, -50%);
  
  bottom: ${({ isMobile }) => isMobile ? '30px' : 'unset'};
  top: ${({ isMobile }) => isMobile ? 'unset' : '50%'};
  width: ${({ isMobile }) => isMobile ? '80%' : '70vh'};
`;

export {
    Header,
    Title,
    LeftSide,
    RightSide,
    ControlsContainer,
    CardsGridContainer,
    CategoriesContainer,
    CardsContainer,
};
