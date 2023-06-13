import '../recipes/recipes.scss'
import Like from '../../../assets/home/like.svg'
import { useDispatch } from 'react-redux';
import { saveRecipe } from '../../../store/recipeSlice';
import RecipeCard from '../../shared/recipe-card/recipe-card';
import { recipesData } from '../../../data/recipesData';
import { useContext } from 'react';
import { UserContext } from '../../../App';

export interface RecipeDataProps {
    id: string,
    image: string,
    name: string,
    description: string,
    ingredients: Array<string>,
}

const Recipes = () => {
    const dispatch = useDispatch();

    const {loggedIn} = useContext(UserContext);

    const handleSaveRecipe = (item: RecipeDataProps, likedRecipe: boolean) => {
        if (loggedIn) {
            dispatch(saveRecipe({ ...item, liked: likedRecipe }));
        }
    };


    return (
        <section className='recipes'>
            <div className='recipesContainer container'>
                {
                    recipesData.map((item: RecipeDataProps, index) => (
                        <RecipeCard index={index} item={item}>
                            {
                                <>
                                    <button disabled={loggedIn ? false : true} onClick={() => handleSaveRecipe(item, false)} className={`save ${!loggedIn ? 'disableClick' : ''}`} >
                                        Save
                                    </button>

                                    <img
                                        onClick={() => handleSaveRecipe(item, true)}
                                        className={`addFavourite ${!loggedIn ? 'disableClick' : ''}`}
                                        src={Like}
                                        alt='like'
                                    />

                                </>
                            }
                        </RecipeCard>
                    ))
                }

            </div>
        </section>
    );
};

export default Recipes;