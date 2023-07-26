import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  showPreview: boolean = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getAllRecipes();
  }

  selectedRecipe: Recipe = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    ingredients: [],
  };

  onPreviewRecipe(currentId: string) {
    this.selectedRecipe = this.recipeService.getOneRecipe(currentId);
    this.showPreview = true;
  }

  onClosePreviewRecipe() {
    this.showPreview = false;
  }
}
