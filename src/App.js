import React from 'react';
import { createGlobalStyle } from 'styled-components';

import card2 from './assets/2.jpeg';
import card4 from './assets/4.jpeg';
import card5 from './assets/5.jpeg';
import card6 from './assets/6.jpeg';

// Components
import Categories from './pages/categories/Categories';

const GlobalStyles = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #171616;
  
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
}
`;

const list = [
    {
        src: card5,
        id: 5,
        color: '#ad7460'
    },
    {
        src: card6,
        id: 6,
        color: '#171616'
    },
    {
        src: card2,
        id: 2,
        color: '#bf9b70'
    },
    {
        src: card4,
        id: 4,
        color: '#263f4a'
    },
];

function App() {
    return (
        <>
            <GlobalStyles />
            <Categories
                title="Adam Sorensen"
                list={list.map(({ src, color }) => ({ image: src, title: src, color }))}
            />
        </>
    );
}

export default App;
