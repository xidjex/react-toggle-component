import { motion, useAnimation } from 'framer-motion';
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
import Button from './components/button/Button';
import noise from './assets/noise.png';
import Card from './components/card/Card';
import { random } from './components/card/layouts/utils';
import { useWindowSize } from 'react-use';
import Categories from './pages/categories/Categories';
import useToggleToAbsolute from './utils/useToggleToAbsolute';

const GlobalStyles = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #171616;
  
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${noise});
      background-size: 100px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-around;
`;

const ButtonNext = styled.div`
    position: absolute;
    z-index: 5;
    right: 10%;
    bottom: 50%;
`;
const ButtonPrev = styled.div`
    position: absolute;
    z-index: 5;
    left: 10%;
    bottom: 50%;
`;

const list = [
    {
        src: card4,
        id: 4,
    },
    // {
    //     src: card1,
    //     id: 1,
    // },
    // {
    //     src: card3,
    //     id: 3,
    // },
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
    // {
    //     src: card8,
    //     id: 8,
    // },
];

function App() {
    const controls = useAnimation();
    const containerRef = useToggleToAbsolute();
    const { width } = useWindowSize();
    const [hidden, setHidden] = useState([]);
    const [isFullscreen, setFullscreen] = useState(null);

    const handleClick = () => {
        controls.start((i, x, y) => {
            if (i !== 3 - (hidden.length)) {
                return {
                    ...x,
                    rotate: x.rotate * -1,
                    transition: {
                        duration: 0.6,
                    }
                };
            }

            setHidden([...hidden, [3 - (hidden.length), x]]);

            return {
                rotate: 30,
                x: '100%',
                opacity: 0,
                transition: {
                    duration: 0.4,
                    ease: 'easeIn',
                },
            };
        });
    };

    const handleBack = () => {
        const first = hidden.pop();

        if (!first) {
            return;
        }

        controls.start((i, x, y) => {
            const [index, props] = first;

            if (i !== index) {
                return { };
            }

            return {
                ...props,
                opacity: 1,
                rotate: [30, random(12)],
                transition: {
                    duration: 0.4,
                    ease: 'easeOut',
                }
            };
        });

        setHidden(hidden);
    };

    const sequence = async () => {
        await controls.start(() => ({
            left: width / 2,
            x: '-50%',
            transition: {
                duration: 1,
                delay: 0.5
            },
        }));

        return await controls.start(() => ({
            rotate: random(12),
            transition: {
                delay: 0.5,
                duration: 0.6,
            },
        }));
    };

    const handleImageClick = (index) => () => {
        if (!isFullscreen) {
            controls.start((i, x) => {
                if (i !== index) {
                    return {};
                }

                setFullscreen(x);

                return {
                    rotate: 0,
                    height: '100%',
                    width: 'auto',
                    transition: {
                        duration: 0.6,
                    },
                }
            });
        } else {
            controls.start((i) => {
                if (i !== index) {
                    return {};
                }

                setFullscreen(null);

                return {
                    ...isFullscreen,
                    height: null,
                    width: null,
                    transition: {
                        duration: 0.6,
                    },
                }
            });
        }
    };

    useEffect(() => {
        sequence();
    }, []);

    return (
        <>
            <GlobalStyles />
            <Categories
                title="Adam Sorensen"
                list={list.map(({ src }) => ({ image: src, title: src, color: 'red' }))}
            />
            {/*<ButtonNext>*/}
            {/*    <Button*/}
            {/*        disabled={!!isFullscreen}*/}
            {/*        onClick={handleClick}*/}
            {/*    >*/}
            {/*        Next*/}
            {/*    </Button>*/}
            {/*</ButtonNext>*/}
            {/*<ButtonPrev>*/}
            {/*    <Button*/}
            {/*        disabled={!!isFullscreen}*/}
            {/*        lineSide={Button.lineSides.right}*/}
            {/*        onClick={handleBack}*/}
            {/*    >*/}
            {/*        Prev*/}
            {/*    </Button>*/}
            {/*</ButtonPrev>*/}
            {/*<Container ref={containerRef}>*/}
            {/*    {*/}
            {/*        [list[7], list[3], list[4], list[0]].map(({ src }, index) => {*/}
            {/*            return (*/}
            {/*                <Card*/}
            {/*                    src={src}*/}
            {/*                    key={src}*/}
            {/*                    animate={controls}*/}
            {/*                    custom={index}*/}
            {/*                    onClick={handleImageClick(index)}*/}
            {/*                />*/}
            {/*            );*/}
            {/*        })*/}
            {/*    }*/}
            {/*</Container>*/}
        </>
    );
}

export default App;
