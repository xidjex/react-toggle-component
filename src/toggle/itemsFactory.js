import React from 'react';

// Styles
import { Item } from './styles';

const itemsFactory = (variants, onClick = () => {}) => {
    return variants.map(({ id, title }, index) => {
        return (
            <Item key={`${id}-${title}`} onClick={onClick(index)}>
                {title}
            </Item>
        );
    })
};

export default itemsFactory;
