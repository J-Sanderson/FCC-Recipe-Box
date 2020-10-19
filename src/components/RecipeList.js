import React from 'react';

import Recipe from './Recipe';

const RecipeList = (props) => {

    const rows = props.recipes?.length
        ? (
            props.recipes.map((recipe, index) => {
                return (
                    <Recipe key={index} name={recipe.name} ingredients={recipe.ingredients} />
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