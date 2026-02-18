export default function IngredientsList(props){
    const ingredientList = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    return(
        <>
            <section>   
                    <h2>Ingredients on hand</h2>
                    <ul className="ingredients-list">
                        {ingredientList}
                    </ul>
                    {ingredientList.length > 3 && <div className="get-recipe-container" ref={props.ref}>
                        <div className="recipe-container-text" >
                            <h3>Ready For a Recipe?</h3>
                            <p>Generate a Recipe from your list of ingredients</p>
                        </div>
                        <button onClick={props.onGetRecipe}>Get a Recipe</button>
                    </div>
                    }
                </section>
        </>
    )
}