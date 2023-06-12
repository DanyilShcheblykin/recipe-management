import { useState } from 'react';
import './recipe-form.scss'
import { saveRecipe } from '../../../store/recipeSlice';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

interface RecipeFormData {
    name: string,
    ingredients: Array<string>,
    description: string,
    image: string,
    imageUrl: string;
}

const RecipeForm = () => {

    const dispatch = useDispatch();


    const [recipeData, setRecipeData] = useState<RecipeFormData>({
        name: '',
        ingredients: [''],
        description: '',
        image: '',
        imageUrl: ''
    });

    const handleChange = (event: React.ChangeEvent<any>) => {
        const { name, value, files } = event.target;
        if (name === 'imageFile') {
          if (files && files.length > 0) {
            const selectedImage = files[0];
            const imageUrl = URL.createObjectURL(selectedImage);
            setRecipeData((prevState) => ({
              ...prevState,
              image: imageUrl,
              imageUrl: imageUrl,
            }));
          } else {
            setRecipeData((prevState) => ({
              ...prevState,
              image: '',
              imageUrl: '',
            }));
          }
        } else if (name === 'ingredients') {
          const ingredientsArray = value
            .split(/[^\wа-яА-ЯёЁ]+/)
            .filter((ingredient:any) => ingredient.trim() !== '');
    
          setRecipeData((prevState) => ({
            ...prevState,
            ingredients: ingredientsArray,
          }));
        } else {
          setRecipeData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
      };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(saveRecipe({ ...recipeData, liked: false, id: uuidv4() }))
    };

    return (
        <section>
            <div className='container'>
                <form className="recipe-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name">Название блюда:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={recipeData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="ingredients">Ингредиенты:</label>
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            value={recipeData.ingredients}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="description">Описание блюда:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={recipeData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="imageFile">Выберете изображения:</label>
                        <input
                            accept="image/jpeg, image/png"
                            type="file"
                            id="imageFile"
                            name="imageFile"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-button">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RecipeForm;