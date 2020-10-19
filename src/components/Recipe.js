import React, { Component } from 'react';

class Recipe extends Component {

    state = {
        show: false,
    };

    render() {
        return (
            <div className="recipe">
                <h2 className="recipe-title">{this.props.name}</h2>
                <div className="ingredients">{this.props.ingredients.join(', ')}</div>
            </div>
        );
    };

}

export default Recipe