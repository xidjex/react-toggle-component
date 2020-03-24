import React, {
    useLayoutEffect,
    useRef,
    useState
} from 'react';
import PropTypes from 'prop-types';

// Styles
import {
    ActiveItem,
    InnerItemsContainer,
    ToggleContainer,
    transition,
} from './styles';

// Utils
import itemsFactory from './itemsFactory';

// Default Props
const defaultProps = {
    active: 0,
};

// Prop Types
const propTypes = {
    active: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    variants: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]).isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    onChange: PropTypes.func.isRequired
};

const Toggle = ({ variants, active, onChange }) => {
    const [data, setData] = useState({ width: 0, x: 1 });

    const containerRef = useRef(null);

    const setActive = (node) => {
        if (node) {
            const { width, height } = node.getBoundingClientRect();
            const { offsetLeft: x } = node;

            // If component rotated then use height instead of width
            setData({ width: width < height ? height : width, x });
        }
    };

    const handleClick = (index) => ({ target }) => {
        setActive(target);

        onChange(variants[index]);
    };

    const getChildrenIndex = (id) => {
        const index = variants.findIndex(({ id: itemId }) => itemId === id);

        return index >= 0 ? index : 0
    };

    // Select active item
    useLayoutEffect(() => {
        if (containerRef.current) {
            setActive(containerRef.current.children[getChildrenIndex(active)]);
        }
    }, [active]);

    return (
        <ToggleContainer ref={containerRef}>
        {itemsFactory(variants, handleClick)}

        <ActiveItem
            animate={{ x: data.x, width: data.width }}
            transition={transition}
        >
            <InnerItemsContainer
                animate={{ x: -data.x }}
                transition={transition}
            >
                {itemsFactory(variants)}
            </InnerItemsContainer>
        </ActiveItem>
        </ToggleContainer>
    );
};

Toggle.defaultProps = defaultProps;
Toggle.propTypes = propTypes;

export default Toggle;
