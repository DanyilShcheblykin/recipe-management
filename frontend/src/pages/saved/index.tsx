import React from 'react';
import Header from '../../components/home/header/header';
import SavedRecipes from '../../components/saved/saved-recipes/saved-recipes';

const SavedPage = () => {
    return (
        <div>
            <Header></Header>
            <SavedRecipes></SavedRecipes> 
        </div>
    );
};

export default SavedPage;