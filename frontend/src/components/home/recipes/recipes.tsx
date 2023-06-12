import React from 'react';
import './recipes.scss'
import Gulush from '../../assets/home/gulush.png'
import Like from '../../assets/home/like.svg'
const Recipes = () => {
    return (
        <section className='recipes'>
            <div className='recipesContainer container'>
                <div className='recipeCard '>
                    <img src={Gulush} alt="" />
                    <div className='recipeCardBlock'>
                        <h2 className='title'>Gulash</h2>
                        <span className='subTitle'>Gulash very testy</span>
                        <div className='favourite'>
                            <img className='addFavourite' src={Like} alt="like" />
                        </div>
                    </div>
                </div>
                <div className='recipeCard '>
                    <img src={Gulush} alt="" />
                    <div className='recipeCardBlock'>
                        <h2 className='title'>Gulash</h2>
                        <span className='subTitle'>Gulash very testy</span>
                        <div className='favourite'>
                            <img className='addFavourite' src={Like} alt="like" />
                        </div>
                    </div>
                </div>
                <div className='recipeCard '>
                    <img src={Gulush} alt="" />
                    <div className='recipeCardBlock'>
                        <h2 className='title'>Gulash</h2>
                        <span className='subTitle'>Gulash very testy</span>
                        <div className='favourite'>
                            <img className='addFavourite' src={Like} alt="like" />
                        </div>
                    </div>
                </div>
                <div className='recipeCard '>
                    <img src={Gulush} alt="" />
                    <div className='recipeCardBlock'>
                        <h2 className='title'>Gulash</h2>
                        <span className='subTitle'>Gulash very testy</span>
                        <div className='favourite'>
                            <img className='addFavourite' src={Like} alt="like" />
                        </div>
                    </div>
                </div>
                <div className='recipeCard '>
                    <img src={Gulush} alt="" />
                    <div className='recipeCardBlock'>
                        <h2 className='title'>Gulash</h2>
                        <span className='subTitle'>Gulash very testy</span>
                        <div className='favourite'>
                            <img className='addFavourite' src={Like} alt="like" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Recipes;