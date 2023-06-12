import React from 'react';
import './recipes.scss'
import Gulush from '../../../assets/home/gulush.png'
import Like from '../../../assets/home/like.svg'
import { useDispatch, useSelector } from 'react-redux';
import { likeRecipe, saveRecipe } from '../../../store/recipeSlice';

export interface RecipeDataProps {
    image: any,
    name: string,
    description: string,
    ingredients: Array<string>
}

const Recipes = () => {
    const dispatch = useDispatch();

    const handleLike = (item: RecipeDataProps) => {
        dispatch(likeRecipe(item));
    };

    const handleSave = (item: RecipeDataProps) => {
        dispatch(saveRecipe(item));
    };

    const likedRecipes = useSelector((state: any) => state.recipe.likedRecipes);
    const savedRecipes = useSelector((state: any) => state.recipe.savedRecipes);

    const recipesData: Array<RecipeDataProps> =
        [
            {
                image: Gulush,
                name: "Gulash1",
                description: 'Gulash very good 1',
                ingredients: ['potato', 'meat', 'oil'],
            },
            {
                image: Gulush,
                name: "Gulash2",
                description: 'Gulash very good 2',
                ingredients: ['potato', 'meat', 'oil'],
            },
            {
                image: Gulush,
                name: "Gulash3",
                description: 'Gulash very good 3',
                ingredients: ['potato', 'meat', 'oil'],
            },
            {
                image: Gulush,
                name: "Gulash4",
                description: 'Gulash very good 4',
                ingredients: ['potato', 'meat', 'oil'],
            }
        ]

    return (
        <section className='recipes'>
            <div className='recipesContainer container'>
                {
                    recipesData.map((item, index) => (
                        <div key={index} className='recipeCard'>
                            <img src={Gulush} alt="" />
                            <div className='recipeCardBlock'>
                                <h2 className='title'>{item.name}</h2>
                                <span className='subTitle'>{item.description}</span>
                                <ul className='ingredient'>
                                    {item.ingredients.map((ingredient, i) => (
                                        <li key={i}>{ingredient}</li>
                                    ))}
                                </ul>
                                <div className='favourite'>
                                    <button onClick={() => handleSave(item)} className='save'>
                                        Save
                                    </button>
                                    <img
                                        onClick={() => handleLike(item)}
                                        className='addFavourite'
                                        src={Like}
                                        alt='like'
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default Recipes;