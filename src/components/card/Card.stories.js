import React from 'react';
import styled from 'styled-components';

// Components
import Card from './Card';

// Assets
import card1 from '../../assets/5.jpeg';
import card2 from '../../assets/3.jpeg';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  align-items: center;
  justify-content: center;
  
  > img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
  }
`;

export const DefaultCard = () => {
    return (
        <Container>
            <Card src={card1} />
            <Card src={card2} />
        </Container>
    )
};

export default {
    title: 'Card',
    id: 'Card',
};
