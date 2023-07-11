import { Component } from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Chickpeas', 1, 'can'),
    new Ingredient('Bananas', 5, 'x'),
  ];
}
