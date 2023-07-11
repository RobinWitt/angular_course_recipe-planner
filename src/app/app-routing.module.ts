import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './shopping-list/overview/overview.component';

const routes: Routes = [
  {
    path: 'shopping-list',
    component: OverviewComponent,
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
