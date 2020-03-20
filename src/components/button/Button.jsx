import React from 'react';
import PropTypes from 'prop-types';

// Styles
import ButtonContainer from './styles';

// Constants
import lineSides from './constants';

// Default Props
const defaultProps = {
    disabled: false,
    lineSide: lineSides.left,
};

// Prop Types
const propTypes = {
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    lineSide: PropTypes.oneOf(Object.values(lineSides)),
    onClick: PropTypes.func.isRequired
};

const Button = ({ children, disabled, lineSide, onClick }) => {
    return (
        <ButtonContainer
            disabled={disabled}
            lineSide={lineSide}
            onClick={!disabled ? onClick : undefined}
        >
            {children}
        </ButtonContainer>
    );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
Button.lineSides = lineSides;

export default Button;
