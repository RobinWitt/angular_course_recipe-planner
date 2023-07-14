import { Component, EventEmitter, Output } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
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

  selectedRecipe: Recipe = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
  };

  @Output() recipeWasSelected = new EventEmitter<string>();

  onRecipeSelected(currentId: string) {
    [this.selectedRecipe] = this.recipes.filter(({ id }) => id === currentId);
  }
}
