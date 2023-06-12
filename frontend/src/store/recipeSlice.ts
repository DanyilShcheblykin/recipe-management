import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RecipeDataProps } from '../components/home/recipes/recipes';

export interface RecipeCrad extends RecipeDataProps {
    liked: boolean
}

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        savedRecipes: [],
    },
    reducers: {
        saveRecipe: (state: any, action: PayloadAction<RecipeCrad>) => {
            state.savedRecipes.push(action.payload);
        },
        removeRecipe(state, action: PayloadAction<RecipeCrad>) {
            console.log(state.savedRecipes)
            state.savedRecipes = state.savedRecipes.filter((item: RecipeCrad) => {
                return item.id !== action.payload.id
            })
        }
    },
});

export const { removeRecipe, saveRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;