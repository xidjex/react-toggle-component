import React, { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import OnImagesLoaded from 'react-on-images-loaded';

// Styles
import { CardsGridContainer } from './styles';

// Default Props
const defaultProps = {};

// Prop Types
const propTypes = {
    card: PropTypes.elementType.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
    })).isRequired,
    onReady: PropTypes.func.isRequired
};

// Calculate cards absolute positions for grid view

const GridPreCalculate = ({ card: Card, list, onReady }) => {
    const [isReady, setIsReady] = useState(false);
    const gridRef = useRef(null);

    const handleLoadedGrid = () => {
        if (gridRef.current) {
            const childs = Array.from(gridRef.current.children);

            const positions = childs.map((node) => {
                const { left, top, width, height } = node.children[0].getBoundingClientRect();

                return { left, top, width, height };
            });

            onReady(positions);
            setIsReady(true);
        }
    };

    if (isReady) {
        return null;
    }

    return (
        <OnImagesLoaded
            timeout={3000}
            onLoaded={handleLoadedGrid}
            onTimeout={() => alert('Something went wrong!')}
        >
            <CardsGridContainer ref={gridRef}>
                {
                    list.map(({ image  }) => {
                        return (
                            <div key={image}>
                                <Card key={image} src={image} />
                            </div>
                        );
                    })
                }
            </CardsGridContainer>
        </OnImagesLoaded>
    );
};

GridPreCalculate.defaultProps = defaultProps;
GridPreCalculate.propTypes = propTypes;

export default memo(GridPreCalculate, () => true);
