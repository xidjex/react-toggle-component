import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// Styles
import { CardWrapper, makeStackVariants } from './styles';

// Default Props
const defaultProps = {
    index: 1,
    initial: false,
};

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number,
    initial: PropTypes.bool,
};

const StackCardLayout = ({ children, index, initial }) => {
    const variants = useMemo(() => makeStackVariants(index, initial), [index, initial]);

    return (
        <CardWrapper
            animate="show"
            exit="hide"
            variants={variants}
        >
            {children}
        </CardWrapper>
    );
};

StackCardLayout.defaultProps = defaultProps;
StackCardLayout.propTypes = propTypes;

export default StackCardLayout;
