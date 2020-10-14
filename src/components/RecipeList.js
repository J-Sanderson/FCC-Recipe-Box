import React from 'react';

const RecipeList = (props) => {

    const rows = props.recipes?.length
        ? (
            props.recipes.map(recipe => {
                return (
                    <div className="recipe">
                        <h2 className="recipe-title">
                            { recipe.name}
                        </h2>
                        <p>{recipe.ingredients.join(', ')}</p>
                    </div>
                )
            })
        ) : (
            <p>There are no recipes listed</p>
        )

    return (
        <div>{ rows }</div>
    )
}

export default RecipeList;