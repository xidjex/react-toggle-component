import PropTypes from 'prop-types';

// Component Types
import { componentType as elseType } from './Else';

// Utils
import { filterChilds } from './utils';

// Default Props
const defaultProps = {
    display: false,
};

// Prop Types
const propTypes = {
    children: PropTypes.node.isRequired,
    display: PropTypes.bool,
};

const DisplayContent = ({ children, display }) => {
    if (Array.isArray(children)) {
        const [childs, elseComponents] = filterChilds(children);

        return display ? childs : elseComponents;
    }

    return display && children?.type?.componentType !== elseType ? children : null;
};

DisplayContent.defaultProps = defaultProps;
DisplayContent.propTypes = propTypes;

export default DisplayContent;
