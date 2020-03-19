import React, {
    useRef,
    useState,
} from 'react';
import PropTypes from 'prop-types';

// Styles
import { CardContainer } from './styles';

// Default Props
const defaultProps = {
    onClick: null,
};

// Prop Types
const propTypes = {
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

const Card = ({ src, onClick }) => {
    const [imgProps, setImgProps] = useState({ width: 0, height: 0 });
    const [isError, setIsError] = useState(false);

    const imgRef = useRef(null);

    const isHorizontal = imgProps.width > imgProps.height;

    const handleLoad = () => {
        const {
            naturalWidth: width,
            naturalHeight: height
        } = imgRef.current;

        setImgProps({ width, height });
    };

    const handleError = () => {
        setIsError(true);
    };

    if (isError) {
        return null;
    }

    return (
        <CardContainer
            isHorizontal={isHorizontal}
            onClick={onClick}
        >
            <img
                alt="Card"
                ref={imgRef}
                src={src}
                onError={handleError}
                onLoad={handleLoad}
            />
        </CardContainer>
    );
};

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;

export default Card;
