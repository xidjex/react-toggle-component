import styled from 'styled-components';

const RoundedButtonContainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffffcc;
    color: #000000a6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    
    :after {
      content: "";
      display: block;
      position: absolute;
      width: 68px;
      height: 68px;
      background-color: #ffffff00;
      border: 1px solid  #ffffffcc;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
`;

export { RoundedButtonContainer };
