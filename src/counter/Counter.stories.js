import React, { useEffect, useState } from 'react';

import Counter from './Counter';

export const DefaultCounter = () => {
    const max = 8;

    const [current, setCurrent] = useState(3);

    useEffect(() => {
        if (current <= max) {
            setTimeout(() => setCurrent(current + 1), 500);
        } else {
            setCurrent(1);
        }
    }, [current]);

    return (
        <Counter
            max={max}
            current={current}
        />
    );
};

export default {
    title: 'Counter',
    id: 'Counter',
};
