import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';

 const recipeStore = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export default recipeStore;