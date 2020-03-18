import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import card1 from './assets/1.jpeg';
import card2 from './assets/2.jpeg';
import card3 from './assets/3.jpeg';
import card4 from './assets/4.jpeg';
import card5 from './assets/5.jpeg';
import card6 from './assets/6.jpeg';
import card7 from './assets/7.jpeg';
import card8 from './assets/8.jpeg';
import card9 from './assets/9.jpeg';
import Button from './button/Button';
import Card from './card/Card';

const GlobalStyles = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #212121;
`;

const ButtonNext = styled.div`
position: absolute;
z-index: 5;
right: 10%;
`;
const ButtonPrev = styled.div`
position: absolute;
z-index: 5;
left: 10%;
`;

const list = [[card1, 1], [card2, 2], [card3, 3], [card4, 4], [card5, 5], [card6, 6], [card7, 7], [card8, 8], [card9, 9]];

function App() {
    const [state, setState] = useState(list);
    const [initial, setInitial] = useState(true);
    const [hiddenStack, setStack] = useState([]);

    const handleNextClick = () => {
        const last = state.pop();

        setState(state);
        setStack([...hiddenStack, last]);
    };

    const handlePrevClick = () => {
        const last = hiddenStack.pop();

        setState([...state, last]);
        setStack(hiddenStack);
    };

    useEffect(() => {
        setInitial(false);
    }, []);


    return (
        <Container>
            <GlobalStyles/>
            <ButtonPrev><Button onClick={handlePrevClick} disabled={!hiddenStack.length} lineSide={Button.lineSides.right}>Prev</Button></ButtonPrev>
            <ButtonNext><Button onClick={handleNextClick} disabled={state.length === 1}>Next</Button></ButtonNext>
            <AnimatePresence>
                {
                    state.map(([link, index]) => (
                        <Card
                            index={index}
                            initial={initial}
                            src={link}
                            key={link}
                        />
                    ))
                }
            </AnimatePresence>
        </Container>
    );
}

export default App;
