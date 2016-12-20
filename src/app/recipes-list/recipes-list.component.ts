import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "../../entities/recipe.entity";
import {RecipeService} from "../../services/recipe.service";
import {RecipesFilter} from '../../pipes/recipes-filter.pipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  private recipes : Recipe[];
  private title : string;


  constructor(private router: Router,
              private route: ActivatedRoute, private recipeService : RecipeService) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) =>
    {
      const categoryId = params['id'];
      console.log(this.title);
      this.recipeService.getRemoteRecipes(categoryId).subscribe(
        (recipes) => {
          this.recipes = recipes;
          console.log(this.recipes);
        }
      )
    });
  }

  public goToRecipe(recipe: Recipe) : void{
    let link = ['recipe', recipe._id];
    this.router.navigate(link);
  }

}
