import OnImagesLoaded from 'react-on-images-loaded';
import { useAnimation } from 'framer-motion';
import { useWindowSize, useMedia } from 'react-use';
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
} from './styles';

// Components
import Card from '../../components/card/Card';
import Controls from './Controls';
import Counter from '../../components/counter/Counter';
import GridPreCalculate from './GridPreCalculate';
import Toggle from '../../components/toggle/Toggle';
import CategoryTitleGrid from './CategoryTitleGrid';
import CategoryTitleStack from './CategoryTitleStack';

// Utils
import randomNumber from '../../utils/randomNumber';

// Animation utils
import { getAppearingAnimation, useControls } from './animations';

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
        id: 1,
        title: 'Cards',
    },
    {
        id: 2,
        title: 'Grid',
    },
];

const cardsListType = 1;

function Categories({ list, title }) {
    const [isAbsolute, setAbsolute] = useState(false);
    const [hiddenList, setHiddenList] = useState([]);
    const [cardsGrid, setCardsGrid] = useState(null);
    const [isGrid, setIsGrid] = useState(false);

    const cardControls = useAnimation();
    const [headerControls, headerShow] = useControls({ top: 0 }, { top: -85 });
    const [categoryControls, categoryShow, categoryHide] = useControls({ opacity: 1 }, { opacity: 0 });
    const [leftControls, leftShow, leftHide] = useControls({ x: '0%' }, { x: '-100%' });
    const [rightControls, rightShow] = useControls({ x: '0%' }, { x: '100%' });
    const [stackControls, stackControlsShow, stackControlsHide] = useControls({ opacity: 1 }, { opacity: 0 });

    const { width } = useWindowSize();
    const isMobile = useMedia('(min-width: 320px) and (max-width: 480px)');

    const handleNextClick = () => {
        cardControls.start((cardIndex, currentState) => {
            if (cardIndex !== list.length - hiddenList.length) {
                return {
                    ...currentState,
                    rotate: randomNumber(10),
                    transition: {
                        duration: 0.6,
                    },
                };
            }

            setHiddenList([
                ...hiddenList,
                [cardIndex, currentState],
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
            const [index, prevProps] = lastCard;

            if (cardIndex === index) {
                return {
                    ...prevProps,
                    opacity: 1,
                    rotate: [30, randomNumber(12)],
                    transition: {
                        duration: 0.4,
                        ease: 'easeOut',
                    },
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
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5,
            },
        }));

        headerShow();
        leftShow();
        rightShow();
        stackControlsShow();
        categoryShow();

        return await cardControls.start(() =>
            getAppearingAnimation({ rotate: randomNumber(12) }),
        );
    };

    const handleLoaded = () => {
        setAbsolute(true);

        initialAnimation();
    };

    const handleListTypeChange = async ({ id }) => {
        if (id === cardsListType) {
            await setIsGrid(false);
            stackControlsShow(false);
            categoryShow(false);

            cardControls.start(() => ({
                height: null,
                left: width / 2,
                opacity: 1,
                rotate: randomNumber(12),
                scale: 1,
                top: '50%',
                width: null,
                x: '-50%',
                y: '-50%',
                transition: {
                    duration: 1,
                },
            }));

            leftShow(false);
        } else {
            leftHide();
            stackControlsHide();
            categoryHide();

            await cardControls.start((i) => {
                const { left, top, width, height } = cardsGrid[i - 1];

                return {
                    height,
                    left,
                    opacity: 1,
                    rotate: 0,
                    top,
                    width,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 1,
                    },
                };
            });

            setHiddenList([]);
            setIsGrid(true);
        }
    };

    const backgroundColor = list[list.length - hiddenList.length - 1].color;

    return (
        <CategoriesContainer backgroundColor={backgroundColor}>
            {/* Header */}
            <Header animate={headerControls}>
                {title && <Title>{title}</Title>}
            </Header>

            {/* Left Controls */}
            <LeftSide animate={leftControls} isMobile={isMobile}>
                <Counter current={hiddenList.length + 1} max={list.length}/>
            </LeftSide>

            {/* Right Controls */}
            <RightSide
                animate={rightControls}
                isMobile={isMobile}
                isTranslucent={isGrid}
            >
                <div>
                    <Toggle variants={listTypes} onChange={handleListTypeChange}/>
                </div>
            </RightSide>

            {/* Stack Controls */}
            <Controls
                animate={stackControls}
                isNextDisabled={(list.length - hiddenList.length) === 1}
                isPrevDisabled={!hiddenList.length}
                onNextClick={handleNextClick}
                onPrevClick={handleBackClick}
            />

            {/* Cards List*/}
            <CardsContainer imagesCount={list.length} isGrid={isGrid}>
                <OnImagesLoaded
                    timeout={3000}
                    onLoaded={handleLoaded}
                    onTimeout={() => alert('Something went wrong!')}
                >
                    {
                        list.map(({ image, title, color }, index) => {
                            return (
                                <div key={image}>
                                    <Card
                                        absolute={!isGrid && isAbsolute}
                                        animate={cardControls}
                                        custom={index + 1}
                                        src={image}
                                    />
                                </div>
                            );
                        })
                    }
                    {
                        isGrid && cardsGrid && cardsGrid.map(({ left, top }, index) => {
                            const category = list[index].title;

                            return <CategoryTitleGrid
                                key={category}
                                initial={{
                                    left,
                                    top: top - 100,
                                }}
                                animate={{
                                    top: `${top - 75}px`,
                                    opacity: 1,
                                    left: `${left}px`,
                                    transition: {
                                        duration: 0.6
                                    }
                                }}
                            >
                                {category}
                            </CategoryTitleGrid>
                        })
                    }
                    <CategoryTitleStack animate={categoryControls}>
                        {list[list.length - hiddenList.length - 1].title}
                    </CategoryTitleStack>

                    {/* Grid Prerender */}
                    <GridPreCalculate card={Card} list={list} onReady={setCardsGrid}/>
                </OnImagesLoaded>
            </CardsContainer>
        </CategoriesContainer>
    );
}

Categories.defaultProps = defaultProps;
Categories.propTypes = propTypes;

export default Categories;
