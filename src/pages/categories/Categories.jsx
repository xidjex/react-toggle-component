import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useWindowSize } from 'react-use';

// Components
import Card from '../../components/card/Card';
import { random } from '../../components/card/layouts/utils';
import useToggleToAbsolute from '../../utils/useToggleToAbsolute';

// Styles
import {
    CategoriesContainer,
    CardsContainer, Header, Title,
} from './styles';

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

const Categories = ({ list, title }) => {
    const controls = useAnimation();
    const { width } = useWindowSize();
    const containerRef = useToggleToAbsolute();

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

    useEffect(() => {
        //sequence();
    }, []);

    const handleCardClick = () => (event) => {
        console.log(event.target.getBoundingClientRect());
    };

    return (
        <CategoriesContainer>
            <Header>
                {title && <Title>{title}</Title>}
            </Header>
            <CardsContainer ref={containerRef}>
                {
                    list.map(({ image, title, color }, index) => {
                        return (
                            <Card
                                src={image}
                                key={image}
                                custom={index}
                                animate={controls}
                                onClick={handleCardClick(index)}
                            />
                        );
                    })
                }
            </CardsContainer>
        </CategoriesContainer>
    );
};

Categories.defaultProps = defaultProps;
Categories.propTypes = propTypes;

export default Categories;
