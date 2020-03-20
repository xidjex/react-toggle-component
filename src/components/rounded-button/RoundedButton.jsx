import React from 'react';
import PropTypes from 'prop-types';

// Styled
import { RoundedButtonContainer } from './styles';

// Default Props
const defaultProps = {};

// Prop Types
const propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const RoundedButton = ({ children, onClick }) => {
    return (
        <RoundedButtonContainer onClick={onClick}>
            {children}
        </RoundedButtonContainer>
    );
};

RoundedButton.defaultProps = defaultProps;
RoundedButton.propTypes = propTypes;

export default RoundedButton;
