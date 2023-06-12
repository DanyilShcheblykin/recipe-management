import '../recipes/recipes.scss'
import Gulush from '../../../assets/home/gulush.png'
import Like from '../../../assets/home/like.svg'
import { useDispatch } from 'react-redux';
import { saveRecipe } from '../../../store/recipeSlice';
import RecipeCard from '../../shared/recipe-card/recipe-card';
import { recipesData } from '../../../data/recipesData';

export interface RecipeDataProps {
    id:string,
    image: string,
    name: string,
    description: string,
    ingredients: Array<string>,
}

const Recipes = () => {
    const dispatch = useDispatch();

    const handleSaveRecipe = (item: RecipeDataProps, likedRecipe: boolean) => {
        dispatch(saveRecipe({ ...item, liked: likedRecipe }));
    };


    return (
        <section className='recipes'>
            <div className='recipesContainer container'>
                {
                    recipesData.map((item: RecipeDataProps, index) => (
                        <RecipeCard index={index} item={item}>
                            {
                                <>
                                    <button onClick={() => handleSaveRecipe(item, false)} className='save'>
                                        Save
                                    </button>
                                    <img
                                        onClick={() => handleSaveRecipe(item, true)}
                                        className='addFavourite'
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