import React, { Component } from 'react';

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
                <h2 className="recipe-title">{this.props.name}</h2>
                <ul className="ingredients">{ingredients}</ul>
            </div>
        );
    };

}

export default Recipe