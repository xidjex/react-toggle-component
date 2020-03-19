import React from 'react';
import Card from './Card';

// Assets
import card1 from '../assets/5.jpeg';

export const DefaultCard = () => {
    return (
        <div>
            <Card src={card1} />
        </div>
    )
};

export default {
    title: 'Card',
    id: 'Card',
};
