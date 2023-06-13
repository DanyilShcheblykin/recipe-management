import React, { useState } from 'react';
import Header from '../../components/home/header/header';
import Recipes from '../../components/home/recipes/recipes';
import RecipeForm from '../../components/home/recipe-form/recipe-form';
import Modal from '../../components/shared/modal/modal';

const HomePage = () => {
  
    return (
        <div>
            <Header></Header>
            <Recipes></Recipes>
            <RecipeForm></RecipeForm>
            <Modal></Modal>
        </div>
    );
};

export default HomePage;