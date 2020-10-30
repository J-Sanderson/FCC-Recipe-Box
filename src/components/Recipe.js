import React, { Component } from 'react';

import '../css/Recipe.css';

class Recipe extends Component {

    state = {
        show: false,
    };

    toggleDisplay = () => {
        const show = this.state.show;
        this.setState({
            show: !show,
        });
    }

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
                    <button onClick={this.toggleDisplay}>Show</button>
                </div>
                { 
                    this.state.show
                    ? <div><ul className="ingredients">{ingredients}</ul></div>
                    : null
                }
            </div>
        );
    };

}

export default Recipe