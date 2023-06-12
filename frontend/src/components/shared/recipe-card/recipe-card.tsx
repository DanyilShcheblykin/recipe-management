import React from 'react';
import { RecipeDataProps } from '../../home/recipes/recipes';
import './recipe-card.scss'

interface RecipeCradProps {
    index: number,
    item: RecipeDataProps
    children: React.ReactNode
}

const RecipeCard = ({ index, item, children }: RecipeCradProps) => {

    return (
        <div key={index} className='recipeCard'>
            <img className='dishImage' src={item.image} alt="" />
            <div className='recipeCardBlock'>
                <h2 className='title'>{item.name}</h2>
                <span className='subTitle'>{item.description}</span>
                <ul className='ingredient'>
                    {item.ingredients.map((ingredient: any, i: number) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                </ul>
                <div className='buttonBlock'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;