import React from 'react';
import './styles/global.scss'
import Header from './components/home/header/header';
import Recipes from './components/home/recipes/recipes';
import RecipeForm from './components/home/recipe-form/recipe-form';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import SavedPage from './pages/saved';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage></HomePage>}></Route>
        <Route path='/saved' element={ <SavedPage></SavedPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
