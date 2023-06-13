import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RecipeDataProps } from '../components/home/recipes/recipes';
import { v4 as uuidv4 } from 'uuid';

export interface RecipeCrad extends RecipeDataProps {
    liked: boolean
}

interface RecipeState {
    savedRecipes: RecipeCrad[];
}

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        savedRecipes: [],
    } as RecipeState,
    reducers: {
        saveRecipe: (state, action: PayloadAction<RecipeCrad>) => {
            state.savedRecipes.push({...action.payload , id:uuidv4()});
        },
        removeRecipe(state, action: PayloadAction<RecipeCrad>) {
            state.savedRecipes = state.savedRecipes.filter((item: RecipeCrad) => {
                return item.id !== action.payload.id
            })     
        }
    },
});

export const { removeRecipe, saveRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;