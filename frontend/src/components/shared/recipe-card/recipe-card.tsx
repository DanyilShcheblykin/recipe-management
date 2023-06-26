import React from 'react';
import { RecipeDataProps } from '../../home/recipes/recipes';
import './recipe-card.scss';

interface RecipeCardProps {
  index: number;
  item: RecipeDataProps;
  children: React.ReactNode;
  loggedIn?:boolean
}

const RecipeCard: React.FC<RecipeCardProps> = ({ index, item, children, loggedIn }) => {
  return (
    <div key={index} className='recipe-card'>
      <img className='recipe-card__image' src={item.image} alt="" />
      <div className='recipe-card__content'>
        <h2 className='recipe-card__title'>{item.name}</h2>
        <span className='recipe-card__sub-title'>{item.description}</span>
        <ul className='recipe-card__ingredient-list'>
          {item.ingredients.map((ingredient: any, i: number) => (
            <li key={i} className='recipe-card__ingredient'>{ingredient}</li>
          ))}
        </ul>
        <div className='recipe-card__button-block'>
          {children}
        </div>
        {!loggedIn ? <div className="recipe-card_login-popup">Log In</div> : ""}
      </div>
    </div>
  );
};

export default RecipeCard;