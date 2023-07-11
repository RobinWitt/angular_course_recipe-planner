import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './shopping-list/overview/overview.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';

const routes: Routes = [
  {
    path: 'shopping-list',
    component: OverviewComponent,
  },
  {
    path: 'recipes',
    component: RecipesListComponent,
  },
  // {
  //   path: '',
  //   redirectTo: 'shopping-list',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
