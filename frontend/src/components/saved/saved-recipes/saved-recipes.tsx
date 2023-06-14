import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeCrad, removeRecipe } from '../../../store/recipeSlice';
import Like from '../../../assets/saved/like.svg';
import './saved-recipes.scss';
import RecipeCard from '../../shared/recipe-card/recipe-card';

const SavedRecipes = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState('asc');

  const deleteRecipe = (item: RecipeCrad) => {
    dispatch(removeRecipe(item));
  };

  const data: Array<RecipeCrad> = useSelector((state: any) => state.recipe.savedRecipes);

  const sortRecipes = () => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === 'asc') {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      } else {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      }

      return 0;
    });

    return sortedData;
  };

  return (
    <section className='recipesSaved'>
      <div className='recipesSaved__container container'>
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className='recipesSaved__sortButton'>
          Sort({sortOrder === 'asc' ? 'Asc' : 'Desc'})
        </button>
        {sortRecipes().map((item: RecipeCrad, index: number) => (
          <RecipeCard index={index} item={item}>
            <>
              <button onClick={() => deleteRecipe(item)} className='recipesSaved__delete'>
                Delete
              </button>
              {item.liked ? (
                <img className='recipesSaved__likedCard' src={Like} alt='like' />
              ) : (
                ''
              )}
            </>
          </RecipeCard>
        ))}
      </div>
    </section>
  );
};

export default SavedRecipes;