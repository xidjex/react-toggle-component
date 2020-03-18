import React, {
    useMemo,
    useRef,
    useState
} from 'react';
import PropTypes from 'prop-types';

// Styles
import { CardContainer, makeVariants } from './styles';

// Default Props
const defaultProps = {
    index: 1,
    initial: false,
    maxSize: 400,
    onClick: null,
};

// Prop Types
const propTypes = {
    index: PropTypes.number,
    initial: PropTypes.bool,
    maxSize: PropTypes.number,
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

const Card = ({
    index,
    initial,
    maxSize,
    src,
    onClick
}) => {
    const [imgProps, setImgProps] = useState({ width: 0, height: 0 });
    const [isError, setIsError] = useState(false);

    const imgRef = useRef(null);

    const isHorizontal = imgProps.width > imgProps.height;

    const variants = useMemo(() => makeVariants(index, initial), [index, initial]);

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
            animate="show"
            exit="hide"
            isHorizontal={isHorizontal}
            maxSize={maxSize}
            variants={variants}
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
