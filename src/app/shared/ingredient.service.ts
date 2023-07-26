import { Injectable } from '@angular/core';
import Ingredient from './ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  ingredients: Ingredient[] = [];

  getAllIngredients(): Ingredient[] {
    return this.ingredients;
  }

  getOneIngredient(id: string): Ingredient {
    const [selectedIngredient] = this.ingredients.filter(
      (ingredient) => ingredient.id === id
    );
    return selectedIngredient;
  }

  addNewIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
  }
}
