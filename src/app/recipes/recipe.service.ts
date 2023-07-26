import { Injectable } from '@angular/core';
import Recipe from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      '1',
      'Falafel',
      'This is a falafel recipe',
      'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d'
    ),
    new Recipe(
      '2',
      'Bananabread',
      'This is a bananabread recipe',
      'https://images.unsplash.com/photo-1675712843856-ba2cb7d33f3c'
    ),
  ];

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
}
