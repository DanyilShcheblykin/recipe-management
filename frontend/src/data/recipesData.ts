import { RecipeDataProps } from "../components/home/recipes/recipes";
import Gulash from '../assets/home/gulush.png'

export const recipesData: Array<RecipeDataProps> =
        [
            {
                id:'0',
                image: Gulash,
                name: "Gulash1",
                description: 'Gulash very good 1',
                ingredients: ['potato', 'meat', 'oil'],
            },
            {
                id:'1',
                image: Gulash,
                name: "Gulash2",
                description: 'Gulash very good 2',
                ingredients: ['potato', 'meat', 'oil'],
            },
            {
                id:'2',
                image: Gulash,
                name: "Gulash3",
                description: 'Gulash very good 3',
                ingredients: ['potato', 'meat', 'oil'],
            },
        ]