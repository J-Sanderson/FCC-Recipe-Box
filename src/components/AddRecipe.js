import React, { Component } from 'react';

import '../css/AddRecipe.css';

class AddRecipe extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleCancel = () => {}

    render(){
        return (
            <div className="add-recipe">
                <h2>Add Recipe</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Name:</span>
                        <input type='text' id='add-name' required ref='newName'/>
                    </label>
                    <label>
                        <span>Ingredients (seperated by commas, e.g. "eggs, milk, flour"):</span>
                        <input type='text' id='add-ingredients' required ref='newIngredients'/>
                    </label>
                    <input type='submit' id='add-submit' value='Add recipe' />
                </form>
                <button onClick={this.handleCancel}>
                    Cancel
                </button>
            </div>
        );
    };
}

export default AddRecipe;
