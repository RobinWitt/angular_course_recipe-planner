import { Component, EventEmitter, Input, Output } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css'],
})
export class RecipeListItemComponent {
  @Input() recipe: Recipe = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    ingredients: [],
  };

  @Output() recipeSelected = new EventEmitter<string>();

  onSelected(id: string) {
    this.recipeSelected.emit(id);
  }
}
