import React from 'react';

import Toggle from './Toggle';


export const defaultToggle = () => (
    <Toggle
        onChange={(data) => {
            console.log(data);
        }}
        variants={[
            { title: 'Grid', id: 1 },
            { title: 'List', id: 2 },
            { title: 'Cards', id: 3 },
            { title: 'Slider With Long Title', id: 4 },
        ]}
        active={2}
    />
);

export default {
    title: 'Toggle',
    id: 'Toggle',
};
