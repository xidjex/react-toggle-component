import React from 'react';

// Assets
import RoundedButton from './RoundedButton';

export const DefaultRoundedButton = () => {
    return (
        <div>
            <RoundedButton onClick={() => alert('clicked')}>
                View
            </RoundedButton>
        </div>
    )
};

export default {
    title: 'RoundedButton',
    id: 'RoundedButton',
};
