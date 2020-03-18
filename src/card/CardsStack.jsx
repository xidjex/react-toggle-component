import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import card5 from '../assets/5.jpeg';
import card4 from '../assets/6.jpeg';
import card3 from '../assets/7.jpeg';
import card2 from '../assets/8.jpeg';
import card1 from '../assets/9.jpeg';
import Card from './Card';

// Default Props
const defaultProps = {};

// Prop Types
const propTypes = {};

const Container = styled.div`
    position: relative;
`;

const initialState = [[card1, true], [card2, true], [card3, true], [card4, true], [card5, true]];

class CardsStack extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: initialState,
        };
    }

    handleClick = (link) => () => {
        this.state.list[link][1] = !this.state.list[link][1];

        this.setState({
            list: this.state.list
        });
    };

    render() {
        const { list } = this.state;

        return (
            <Container onClick={this.handleClick}>
                {
                    list.map(([link, isVisible], index) => (
                        <Card
                            src={link}
                            key={link}
                            isVisible={isVisible}
                            onClick={this.handleClick(index)}
                        />
                    ))
                }
            </Container>
        );
    }
};

CardsStack.defaultProps = defaultProps;
CardsStack.propTypes = propTypes;

export default CardsStack;
