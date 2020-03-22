import styled, { keyframes, css } from 'styled-components';

// Constants
import lineSides from './constants';

const getTransformStyles = ({ lineSide }) => `translateX(${lineSide === lineSides.left ? '-' : ''}100%)`;

const getStartPosition = ({ lineSide }) => `
    ${lineSide}: 0;
    transform: ${getTransformStyles({ lineSide })};
`;

const getEndPosition = ({ lineSide }) => `
    ${lineSide}: 100%;
    transform: translateX(2px);
`;

const slideOut = ({ lineSide }) => keyframes`
  from { ${getStartPosition({ lineSide })} }
  
  to { ${getEndPosition({ lineSide })} }
`;

const slideIn = ({ lineSide }) => keyframes`
  from { ${getEndPosition({ lineSide })} }
  
  to { ${getStartPosition({ lineSide })} }
`;

const ButtonContainer = styled.div`
    position: relative;

    padding: 10px;

    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    user-select: none;
    outline: none;
    
    &:before {
      width: 35px;
      height: 1px;
      
      position: absolute;
      top: 50%;
      
      content: "";
      
      background-color: #fff;
      
      animation: ${slideIn} 0.6s ease;
      
      ${getStartPosition}
    }
    
    ${({ disabled, ...props }) => !disabled && css`
      &:hover {
        &:before {
          animation: ${slideOut(props)} 0.6s ease;
          
          ${getEndPosition(props)}
        }
      }
    `}
`;

export default ButtonContainer;
