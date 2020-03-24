import React from 'react';
import PropTypes from 'prop-types';

export const componentType = Symbol('else-component');

// Default Props
const defaultProps = {};

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired
};

const Else = ({ children }) => children;

Else.defaultProps = defaultProps;
Else.propTypes = propTypes;
Else.componentType = componentType;

export default Else;
