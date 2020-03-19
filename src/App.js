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
import GridCardLayout from './card/layouts/GridCardLayout';
import StackCardLayout from './card/layouts/StackCardLayout';
import Counter from './counter/Counter';
import Toggle from './toggle/Toggle';

const GlobalStyles = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
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

const ToggleContainer = styled.div`
  position: absolute;
  z-index: 5;
  transform: rotate(-90deg);
`;

const list = [
    {
        src: card4,
        id: 4,
        width: 500,
        height: 750,
    },
    {
        src: card1,
        id: 1,
    },
    {
        src: card3,
        id: 3,
    },
    {
        src: card5,
        id: 5,
    },
    {
        src: card2,
        id: 2,
    },
    {
        src: card6,
        id: 6,
    },
    {
        src: card7,
        id: 7,
    },
    {
        src: card9,
        id: 9,
    },
    {
        src: card8,
        id: 8,
    },
];

const variants = [
    {
        id: 1,
        title: 'Cards',
    },
    {
        id: 2,
        title: 'Grid',
    },
];

function App() {
    const [state, setState] = useState([...list]);
    const [initial, setInitial] = useState(true);
    const [hiddenStack, setStack] = useState([]);
    const [grid, setGrid] = useState(variants[0]);

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
            <Counter
                current={hiddenStack.length + 1}
                max={list.length}
            />
            <ButtonPrev>
                <Button
                    disabled={!hiddenStack.length}
                    lineSide={Button.lineSides.right}
                    onClick={handlePrevClick}
                >
                    Prev
                </Button>
            </ButtonPrev>
            <ButtonNext>
                <Button
                    disabled={state.length === 1}
                    onClick={handleNextClick}
                >
                    Next
                </Button>
            </ButtonNext>
            <ToggleContainer>
                <Toggle variants={variants} onChange={setGrid} active={1}/>
            </ToggleContainer>
            <AnimatePresence>
                {
                    grid.id === 1 ? (
                        state.map(({ src: link }, index) => (
                            <StackCardLayout
                                index={index + 1}
                                initial={initial}
                                key={link}
                            >
                                <Card src={link} />
                            </StackCardLayout>
                        ))
                    ) : (
                        <GridCardLayout images={list}/>
                    )
                }
            </AnimatePresence>
        </Container>
    );
}

export default App;
