import { use, useState } from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import {getRecipeFromChefAI} from '../ai'
export default function MainContent() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    async function onGetRecipe() {
        const generatedRecipe = await getRecipeFromChefAI(ingredients)
        setRecipe(generatedRecipe)

    }
    return (
        <>
            <main>
                <form action={handleSubmit} className="ingredient-form">
                    <input 
                    aria-label="Add Ingredients" 
                    type="text" 
                    placeholder="Add ingredients (e.g - onion)" 
                    name="ingredient" />

                    <button>+ Add Ingredient</button>
                </form>

                {
                ingredients.length > 0 && (
                <IngredientsList 
                ingredients={ingredients} 
                onGetRecipe={onGetRecipe} />
                )}
                {recipe && <Recipe recipe={recipe}/>}
            </main>
        </>
    )
}