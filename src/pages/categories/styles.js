import styled from 'styled-components';

const CategoriesContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const CardsContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    
    > *:not(:last-of-type) {
        display: inline-block;
        margin: auto 40px auto 0;
    }
`;

const Header = styled.div`
    width: 100%;
    height: max-content;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
   margin: 0;
   padding: 0;
   width: max-content;
   text-transform: uppercase;
   letter-spacing: 5px;
   font-size: 24px;
   color: #fff;
`;

export {
    Header,
    Title,
    CategoriesContainer,
    CardsContainer,
};
