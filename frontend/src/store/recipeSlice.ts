import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RecipeDataProps } from '../components/home/recipes/recipes';

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        likedRecipes: [],
        savedRecipes: [],
    },
    reducers: {
        likeRecipe: (state: any, action: PayloadAction<RecipeDataProps>) => {
            state.likedRecipes.push(action.payload);
        },
        saveRecipe: (state: any, action: PayloadAction<RecipeDataProps>) => {
            state.savedRecipes.push(action.payload);
        },
    },
});

export const { likeRecipe, saveRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;