import { Component } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Falafel',
      'This is a falafel recipe',
      'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d'
    ),
    new Recipe(
      'Bananabread',
      'This is a bananabread recipe',
      'https://images.unsplash.com/photo-1675712843856-ba2cb7d33f3c'
    ),
  ];
}
