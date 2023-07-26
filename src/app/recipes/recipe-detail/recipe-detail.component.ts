import { Component, Input } from '@angular/core';
import Recipe from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    ingredients: [],
  };

  constructor(private recipeService: RecipeService) {}

  onAddIngredientsToShoppingList(id: string) {
    this.recipeService.addIngredientsToShoppingList(id);
  }
}
