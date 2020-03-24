import React from 'react';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';

// Styles
import { ControlsContainer } from './styles';

// Components
import Button from '../../components/button/Button';

// Default Props
const defaultProps = {
    animate: null,
    isNextDisabled: false,
    isPrevDisabled: false,
};

// Prop Types
const propTypes = {
    animate: PropTypes.object,
    isNextDisabled: PropTypes.bool,
    isPrevDisabled: PropTypes.bool,
    onNextClick: PropTypes.func.isRequired,
    onPrevClick: PropTypes.func.isRequired,
};

const Controls = ({
    animate,
    isNextDisabled,
    isPrevDisabled,
    onNextClick,
    onPrevClick,
}) => {
    const isMobile = useMedia('(min-width: 320px) and (max-width: 480px)');

    return (
        <ControlsContainer animate={animate} isMobile={isMobile}>
            <Button
                disabled={isPrevDisabled}
                lineSide={Button.lineSides.right}
                onClick={onPrevClick}
            >
                Prev
            </Button>
            <Button disabled={isNextDisabled} onClick={onNextClick}>
                Next
            </Button>
        </ControlsContainer>
    );
};

Controls.defaultProps = defaultProps;
Controls.propTypes = propTypes;

export default Controls;
