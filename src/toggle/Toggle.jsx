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
    active: null,
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
    })),
    onChange: PropTypes.func.isRequired
};

const Toggle = ({ variants, active, onChange }) => {
    const [data, setData] = useState({ width: 0, x: 1 });

    const containerRef = useRef(null);

    const handleClick = (index) => (event) => {
        const { offsetLeft: x } = event.target;
        const { width, height } = event.target.getBoundingClientRect();

        // If component rotated then use height instead of width
        setData({ width: width < height ? height : width, x });

        onChange(variants[index]);
    };

    const getChildrenIndex = (id) => {
        const index = variants.findIndex(({ id: itemId }) => itemId === id);

        return index >= 0 ? index : 0
    };

    // Select active item
    useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.children[getChildrenIndex(active)].click();
        }
    }, []);

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
