import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OverviewComponent } from './shopping-list/overview/overview.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OverviewComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
