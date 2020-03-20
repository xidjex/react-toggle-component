import React from 'react';
import PropTypes from 'prop-types';

// Default Props
const defaultProps = {
    initialAnimation: null,
};

// Prop Types
const propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
    })),
    initialAnimation: PropTypes.object,
    actionTitle: PropTypes.string,
};

const CardsStack = () => {
    return ();
};

CardsStack.defaultProps = defaultProps;
CardsStack.propTypes = propTypes;

export default CardsStack;
