import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../entities/recipe.entity";
import {RecipeFormValidators} from "./recipe-form.validators";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipeForm: FormGroup;
  private recipe;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private router : Router)
  {

  }

  ngOnInit() {
    this.recipe = new Recipe("", "", [], [], "", "", 0, "", 0);

    this.recipeForm = this.fb.group({
      'recipeName': ['', Validators.compose([
        Validators.required, RecipeFormValidators.getRecipeNameLengthValidator()
      ])]
    })
  }

  onChange(){
    console.log(this.recipe)
  }

}
