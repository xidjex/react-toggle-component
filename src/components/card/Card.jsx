import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import { CardStyled } from './styles';

// Default Props
const defaultProps = {
    absolute: false,
    onClick: null
};

// Prop Types
const propTypes = {
    absolute: PropTypes.bool,
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

const Card = ({ absolute, src, onClick, ...props }) => {
    const [{ width, height, left, top }, setImgProps] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    const [isError, setIsError] = useState(false);

    const isHorizontal = width > height;

    const handleLoad = (event) => {
        setImgProps(event.target.getBoundingClientRect());
    };

    const handleError = () => {
        setIsError(true);
    };

    if (isError) {
        return null;
    }

    return (
        <CardStyled
            {...props}
            absolute={absolute}
            alt="Card"
            left={left}
            src={src}
            top={top}
            isHorizontal={isHorizontal}
            onClick={onClick}
            onError={handleError}
            onLoad={handleLoad}
        />
    );
};

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;

export default Card;
