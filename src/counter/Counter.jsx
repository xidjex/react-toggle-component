import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// Styles
import {
    CounterContainer,
    Digit,
    DigitsContainer,
    DigitsList,
    ProgressContainer,
    digitHeight,
} from './styles';

// Default Props
const defaultProps = {
    current: null,
    min: 1,
};

// Prop Types
const propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    current: PropTypes.number,
};

const Counter = ({ min, max, current }) => {
    const count = (max - (min === 1 ? 0 : min || -1));

    const percent = Math.ceil((current || 1) / (count / 100));

    const list = useMemo(() => new Array(count)
        .fill(null)
        .map((value, index) => index + min)
    , [count]);

    return (
        <CounterContainer>
            <DigitsContainer>
                <DigitsList top={list.indexOf(current) * digitHeight}>
                    {
                        list.map((value) => {
                            return <Digit key={value}>{value}</Digit>;
                        })
                    }
                </DigitsList>
            </DigitsContainer>
            <ProgressContainer
                percent={percent}
            />
            <Digit>{max}</Digit>
        </CounterContainer>
    );
};

Counter.defaultProps = defaultProps;
Counter.propTypes = propTypes;

export default Counter;
