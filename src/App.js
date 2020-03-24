import React from 'react';
import { createGlobalStyle } from 'styled-components';

import card2 from './assets/2.jpeg';
import card4 from './assets/4.jpeg';
import card5 from './assets/5.jpeg';
import card6 from './assets/6.jpeg';
import card7 from './assets/8.jpeg';
import card9 from './assets/9.jpeg';

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
        color: '#ad7460',
        title: 'Art'
    },
    {
        src: card6,
        id: 6,
        color: '#171616',
        title: 'Portraits'
    },
    {
        src: card2,
        id: 2,
        color: '#bf9b70',
        title: 'Group photos'
    },
    {
        src: card4,
        id: 4,
        color: '#263f4a',
        title: 'Commercial'
    },
];

function App() {
    return (
        <>
            <GlobalStyles />
            <Categories
                title="Adam Sorensen"
                list={list.map(({ src, color, title }) => ({ image: src, title, color }))}
            />
        </>
    );
}

export default App;
