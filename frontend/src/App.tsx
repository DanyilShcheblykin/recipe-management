import React from 'react';
import './styles/global.scss'
import Header from './components/home/header/header';
import Recipes from './components/home/recipes/recipes';

function App() {
  return (
    <div>
      <Header></Header>
  <Recipes></Recipes>
    </div>
  );
}

export default App;
