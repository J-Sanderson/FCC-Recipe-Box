import React, { Component } from 'react';

import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

import '../css/App.css';

class App extends Component {

  state = {
    recipes: [],
    showAdd: false,
  };

  toggleAdd = () => {
        const showAdd = this.state.showAdd;
        this.setState({
            showAdd: !showAdd,
        });
    }

  componentDidMount = () => {
    const defaults = [
      {name: 'Chocolate Cake', ingredients: ['flour', 'sugar', 'eggs', 'cocoa powder']},
      {name: 'Fresh Bread', ingredients: ['flour', 'yeast']},
      {name: 'Fish and Chips', ingredients: ['fish', 'chips']}
    ]
    this.setState({
      recipes: defaults,
    })
  };

  render() {
    return (
      <main>
        {
          this.state.showAdd ? <AddRecipe /> : null
        }
        <h1>Recipe Box</h1>
        <RecipeList recipes={this.state.recipes} />
        <button 
          id="add-recipe" 
          className="add-recipe"
          onClick={this.toggleAdd}
        >
            Add Recipe
        </button>
      </main>
    );
  };

}

export default App;
