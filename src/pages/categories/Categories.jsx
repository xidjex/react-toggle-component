import OnImagesLoaded from 'react-on-images-loaded';
import { useAnimation } from 'framer-motion';
import { useWindowSize } from 'react-use';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import {
    CategoriesContainer,
    CardsContainer,
    Header,
    Title,
    LeftSide,
    RightSide,
    Controls,
} from './styles';

// Components
import Card from '../../components/card/Card';
import Counter from '../../components/counter/Counter';
import Toggle from '../../components/toggle/Toggle';
import Button from '../../components/button/Button';

// Utils
import randomNumber from '../../utils/randomNumber';

// Animation utils
import { getAppearingAnimation } from './animations';

// Default Props
const defaultProps = {
    title: '',
};

// Prop Types
const propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    })),
    title: PropTypes.string,
};

const listTypes = [
    {
        id: '1',
        title: 'Cards'
    },
    {
        id: '2',
        title: 'Grid'
    }
];

function Categories({ list, title }) {
    const [isAbsolute, setAbsolute] = useState(false);
    const [hiddenList, setHiddenList] = useState([]);
    const [listType, setListType] = useState(listTypes[0]);

    const cardControls = useAnimation();
    const headerControls = useAnimation();
    const leftControls = useAnimation();
    const rightControls = useAnimation();
    const buttonsControls = useAnimation();

    const { width } = useWindowSize();

    const handleNextClick = () => {
        cardControls.start((cardIndex, currentState) => {
            if (cardIndex !== list.length - hiddenList.length) {
                return {
                    ...currentState,
                    rotate: currentState.rotate * -1,
                    transition: {
                        duration: 0.6,
                    }
                };
            }

            setHiddenList([
                ...hiddenList,
                [cardIndex, currentState]
            ]);

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

    const handleBackClick = () => {
        const lastCard = hiddenList.pop();

        if (!lastCard) return;

        cardControls.start((cardIndex) => {
            const [index, props] = lastCard;

            if (cardIndex === index) {
                return {
                    ...props,
                    opacity: 1,
                    rotate: [30, randomNumber(12)],
                    transition: {
                        duration: 0.4,
                        ease: 'easeOut',
                    }
                };
            }

            return {};
        });

        setHiddenList([...hiddenList]);
    };

    const initialAnimation = async () => {
        await cardControls.start(() => ({
            left: width / 2,
            x: '-50%',
            transition: {
                duration: 1,
                delay: 0.5
            },
        }));

        headerControls.start(getAppearingAnimation({ top: 0 }));
        leftControls.start(getAppearingAnimation({ left: 0 }));
        rightControls.start(getAppearingAnimation({ right: 0 }));
        buttonsControls.start(getAppearingAnimation({ opacity: 1 }));

        return await cardControls.start(() =>
            getAppearingAnimation({ rotate: randomNumber(12) })
        );
    };

    const handleLoaded = () => {
        setAbsolute(true);

        initialAnimation();
    };

    const color = list[list.length - hiddenList.length - 1].color;

    return (
        <CategoriesContainer backgroundColor={color}>
            <Header animate={headerControls}>
                {title && <Title>{title}</Title>}
            </Header>
            <LeftSide animate={leftControls}>
                <Counter current={hiddenList.length + 1} max={list.length} />
            </LeftSide>
            <RightSide animate={rightControls}>
                <div>
                    <Toggle
                        variants={listTypes}
                        onChange={setListType}
                    />
                </div>
            </RightSide>
            <Controls animate={buttonsControls} left="20%">
                <Button
                    disabled={!hiddenList.length}
                    lineSide={Button.lineSides.right}
                    onClick={handleBackClick}
                >
                    Prev
                </Button>
            </Controls>
            <Controls animate={buttonsControls} left="80%">
                <Button
                    disabled={(list.length - hiddenList.length) === 1}
                    onClick={handleNextClick}
                >
                    Next
                </Button>
            </Controls>
            <CardsContainer imagesCount={list.length}>
                <OnImagesLoaded
                    timeout={3000}
                    onLoaded={handleLoaded}
                    onTimeout={() => alert('Something went wrong!')}
                >
                    {
                        list.map(({ image, title, color }, index) => {
                            return (
                                <Card
                                    absolute={isAbsolute}
                                    animate={cardControls}
                                    custom={index + 1}
                                    key={image}
                                    src={image}
                                />
                            );
                        })
                    }
                </OnImagesLoaded>
            </CardsContainer>
        </CategoriesContainer>
    );
};

Categories.defaultProps = defaultProps;
Categories.propTypes = propTypes;

export default Categories;
