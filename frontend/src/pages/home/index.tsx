import React from 'react';
import Header from '../../components/home/header/header';
import Recipes from '../../components/home/recipes/recipes';
import RecipeForm from '../../components/home/recipe-form/recipe-form';
import { useDispatch } from 'react-redux';
import { likeRecipe, saveRecipe } from '../../store/recipeSlice';

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