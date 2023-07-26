import { Injectable } from '@angular/core';
import Recipe from './recipe.model';
import Ingredient from '../shared/ingredient.model';
import { IngredientService } from '../shared/ingredient.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      '1',
      'Falafel',
      'This is a falafel recipe',
      'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d',
      [
        new Ingredient('4330', 'Chickpeas', 2, 'cans'),
        new Ingredient('300', 'Salt', 1, 'teaspoon'),
      ]
    ),
    new Recipe(
      '2',
      'Bananabread',
      'This is a bananabread recipe',
      'https://images.unsplash.com/photo-1675712843856-ba2cb7d33f3c',
      [
        new Ingredient('301', 'Bananas', 5, 'x'),
        new Ingredient('302', 'Flour', 1, 'kg'),
      ]
    ),
  ];

  constructor(private ingredientService: IngredientService) {}

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  getOneRecipe(id: string): Recipe {
    const [selectedRecipe] = this.recipes.filter((recipe) => recipe.id === id);
    return selectedRecipe;
  }

  addNewRecipe(newRecipe: Recipe): void {
    this.recipes.push(newRecipe);
  }

  deleteOneRecipe(id: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }

  addIngredientsToShoppingList(id: string) {
    const [selectedRecipe] = this.recipes.filter((recipe) => recipe.id === id);
    const ingredients = selectedRecipe.ingredients;
    for (let index = 0; index < ingredients.length; index++) {
      this.ingredientService.addNewIngredient(ingredients[index]);
    }
  }
}
