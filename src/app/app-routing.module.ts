import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RecipesHomeComponent} from "./recipes-home/recipes-home.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recipes_home',
    component: RecipesHomeComponent
  },
  {
    path: 'recipes',
    component: RecipesListComponent
  },
  {
    path: 'recipes/category/:id',
    component: RecipesListComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeDetailsComponent
  },
  {
    path: 'recipe_form',
    component: RecipeFormComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RecipeAppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
