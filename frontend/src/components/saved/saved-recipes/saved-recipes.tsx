import './saved-recipes.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RecipeCrad, removeRecipe } from '../../../store/recipeSlice';
import RecipeCard from '../../shared/recipe-card/recipe-card';
import { useEffect, useState } from 'react';

const SavedRecipes = () => {

    const dispatch = useDispatch();

    const deleteRecipe = (item: RecipeCrad) => {
        dispatch(removeRecipe(item))
        console.log(item)
    }


    const data = useSelector((state: any) => state.recipe.savedRecipes)
    
    return (
        <section className='recipesSaved'>
            <div className='recipesSavedContainer container'>
                {
                    data.map((item:any, index:number) => (
                        <RecipeCard index={index} item={item}>
                            {
                                <button onClick={() => deleteRecipe(item)} className='delete'>
                                    Delete
                                </button>
                            }
                        </RecipeCard>
                    ))
                }
            </div>
        </section>
    );
};

export default SavedRecipes;