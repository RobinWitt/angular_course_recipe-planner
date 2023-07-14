import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: 'recipes',
    component: RecipesListComponent,
  },
  {
    path: 'recipe-detail',
    component: RecipeDetailComponent,
  },
  {
    path: '',
    redirectTo: 'shopping-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
