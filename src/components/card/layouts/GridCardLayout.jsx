import React from 'react';
import PropTypes from 'prop-types';

// Components
import Card from '../Card';

// Styles
import {
    CardGridContainer,
    GridColumn,
    GridContainer,
    makeGridVariants
} from './styles';

// Utils
import { chunk } from './utils';
import randomString from '../../../utils/randomString';

// Default Props
const defaultProps = {};

// Prop Types
const propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        src: PropTypes.string
    }))
};

const GridCardLayout = ({ images }) => {
    return (
       <GridContainer>
           {
               chunk(images, 3).map((imagesChunk, chunkIndex) => {
                   return (
                       <GridColumn key={randomString()}> {
                           imagesChunk.map(({ src, id }, index) => (
                               <CardGridContainer
                                   animate="show"
                                   exit="hide"
                                   key={id}
                                   variants={makeGridVariants(index + chunkIndex)}
                               >
                                   <Card src={src} />
                               </CardGridContainer>
                           ))
                       }
                       </GridColumn>
                   );
               })
           }
       </GridContainer>
    );
};

GridCardLayout.defaultProps = defaultProps;
GridCardLayout.propTypes = propTypes;

export default GridCardLayout;
