import React, { Component } from 'react';

import '../css/Recipe.css';

class Recipe extends Component {

    state = {
        show: false,
    };

    render() {
        const ingredients = this.props.ingredients.map((ingredient, index) => {
            return (
                <li key={index}>
                    {ingredient}
                </li>
            );
        });

        return (
            <div className="recipe">
                <div className="recipe-title">
                    <h2>{this.props.name}</h2>
                    <button>Show</button>
                </div>
                <ul className="ingredients">{ingredients}</ul>
            </div>
        );
    };

}

export default Recipe