import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RecipesHomeComponent } from './recipes-home/recipes-home.component';
import { HomeComponent } from './home/home.component';
import {CategoryService} from "../services/category.service";
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {RecipeService} from "../services/recipe.service";
import {RecipesFilter} from "../pipes/recipes-filter.pipe";
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RecipesHomeComponent,
    HomeComponent,
    RecipesListComponent,
    RecipesFilter,
    RecipeDetailsComponent,
    RecipeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CategoryService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
