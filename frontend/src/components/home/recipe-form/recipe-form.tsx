import React, { useState } from 'react';
import './recipe-form.scss'

const RecipeForm = () => {
    const [recipeData, setRecipeData] = useState({
        name: '',
        ingredients: '',
        description: '',
        imageUrl: '',
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setRecipeData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(recipeData);
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
                        <label htmlFor="imageUrl">URL изображения:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={recipeData.imageUrl}
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