import styled from 'styled-components';

const CounterContainer = styled.div`
  width: 40px;
  height: max-content;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Digit = styled.span`
    font-size: 16px;
    color: #fff;
`;

const DigitsContainer = styled.div`
  width: 40px;
  height: 20px;
  
  position: relative;
  
  overflow: hidden;
`;

const DigitsList = styled.div`
  width: 40px;
  height: max-content;
  
  position: absolute;
  top: -${({ top }) => top || 0}px;
  transform: translateY(2px);
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  
  transition: top 0.6s ease;
`;

const ProgressContainer = styled.div`
  width: 2px;
  height: 200px;
  
  margin: 4px 0;

  overflow: hidden;
  
  border-radius: 2px;
  background: #ffffff60;
    
  :after {
    width: 2px;
    height: ${({ percent }) => percent || 0}%;
    
    display: block;
    content: "";
    
    border-radius: 2px;
    background: #fff;
    
    transition: height 0.6s ease;
  }
`;

export {
    CounterContainer,
    Digit,
    DigitsContainer,
    DigitsList,
    ProgressContainer
}
