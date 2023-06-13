import './saved-recipes.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RecipeCrad, removeRecipe } from '../../../store/recipeSlice';
import RecipeCard from '../../shared/recipe-card/recipe-card';
import Like from '../../../assets/saved/like.svg'

const SavedRecipes = () => {

    const dispatch = useDispatch();

    const deleteRecipe = (item: RecipeCrad) => {
        dispatch(removeRecipe(item))
    }

    const data: Array<RecipeCrad> = useSelector((state: any) => state.recipe.savedRecipes)

    return (
        <section className='recipesSaved'>
            <div className='recipesSavedContainer container'>
                {
                    data.map((item:RecipeCrad, index: number) => (
                        <RecipeCard index={index} item={item}>
                            {
                                <>
                                    <button onClick={() => deleteRecipe(item)} className='delete'>
                                        Delete
                                    </button>
                                    {item.liked ? <img

                                        className={`likedCard`}
                                        src={Like}
                                        alt='like'
                                    /> : ''}
                                </>
                            }
                        </RecipeCard>
                    ))
                }
            </div>
        </section>
    );
};

export default SavedRecipes;