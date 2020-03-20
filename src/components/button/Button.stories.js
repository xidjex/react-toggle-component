import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Inline = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const defaultButton = () => (
    <Inline>
        <Button
            onClick={() => alert('Prev')}
            lineSide={Button.lineSides.right}
        >
            Prev
        </Button>
        <Button onClick={() => alert('Next')}>Next</Button>
    </Inline>
);

export const disabledButton = () => (
    <Inline>
        <Button disabled onClick={() => alert('Next')}>Disabled</Button>
    </Inline>
);

export default {
    title: 'Button',
    id: 'Button',
};
