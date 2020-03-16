import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Toggle from './toggle/Toggle';

const GlobalStyles = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #212121;
`;

const Rotated = styled.div`
`;

function App() {
    return (
        <Container>
            <GlobalStyles/>
            <Rotated>
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
            </Rotated>
        </Container>
    );
}

export default App;
