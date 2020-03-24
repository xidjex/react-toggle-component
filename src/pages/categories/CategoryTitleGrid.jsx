import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Default Props
const defaultProps = {};

// Prop Types
const propTypes = {
    children: PropTypes.string.isRequired,
};

const CategoryTitleGrid = styled(motion.h2)`
    top: 0;
    opacity: 0;
    position: absolute;
    font-weight: 200;
    text-shadow: 1px 1px 5px #00000060;
    box-shadow: 1px 1px 5px #00000060;
    border: 1px solid #FFF;
    padding: 1px 12px;
    border-radius: 16px;
    color: #FFFFFF;
    margin: 0;
    font-size: 16px;
    user-select: none;
    pointer-events: none;
`;

CategoryTitleGrid.defaultProps = defaultProps;
CategoryTitleGrid.propTypes = propTypes;

export default CategoryTitleGrid;
