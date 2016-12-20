import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../entities/recipe.entity";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipeForm: FormGroup;
  private recipe;

  constructor(private route: ActivatedRoute,
              private router : Router)
  {

  }

  ngOnInit() {
    this.recipe = new Recipe("", "", [], [], "", "", 0, "", 0);
  }

  onChange(){
    console.log(this.recipe)
  }

}
