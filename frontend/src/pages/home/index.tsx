import React from 'react';
import Header from '../../components/home/header/header';
import Recipes from '../../components/home/recipes/recipes';
import RecipeForm from '../../components/home/recipe-form/recipe-form';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Recipes></Recipes>
            <RecipeForm></RecipeForm>
        </div>
    );
};

export default HomePage;