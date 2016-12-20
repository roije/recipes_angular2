import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../entities/recipe.entity";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  private selectedRecipe : Recipe;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService : RecipeService)
  {

  }

  ngOnInit() {
    this.route.params.forEach((params : Params) => {
      let id = params['id'];
      this.selectedRecipe = this.recipeService.getLocalRecipes().find((recipe) => recipe._id === id);
      console.log(this.selectedRecipe);
    })
  }

}
