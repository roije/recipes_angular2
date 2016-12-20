import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../entities/recipe.entity";
import {RecipeFormValidators} from "./recipe-form.validators";
import {Category} from "../../entities/category.entity";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipeForm: FormGroup;
  private categories : Category[];

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private router : Router, private categoryService : CategoryService)
  {

  }

  ngOnInit() {

    //Get categories name for the select input field
    this.categoryService.getAllRemoteCategories().subscribe(
      (categories) => {
        this.categories = categories;
        console.log(this.categories);
      },
    );

    this.recipeForm = this.fb.group({
      'recipeTitle': ['', Validators.compose([
        Validators.required, RecipeFormValidators.getRecipeNameLengthValidator()
      ])],
      'recipeProcedure' : [''],
      'ingredients' : this.fb.array([
        this.initIngredients(),
      ]),
      'recipeCategory' : [''],
      'recipeTags' : [''],
      'recipeAmountPersons' : [''],
      'recipePicture' : ['']
    });
  }

  initIngredients() {
    return this.fb.group({
      amount: [''],
      ingredient: ['']
    })
  }

  addIngredient() {
    const control = <FormArray>this.recipeForm.controls['ingredients'];
    control.push(this.initIngredients());
  }

  removeIngredient(i : number) {
    const control = <FormArray>this.recipeForm.controls['ingredients'];
    control.removeAt(i);
  }


  onSubmit(recipeForm) : void {
    var recipe = new Recipe("", "", [], [], "", "", 0, "", 0);
    console.log("This is the empty recipe: ", recipe);
    console.log("Same recipe with values will be saved in db: ----\n");

    //Values from form
    var title = recipeForm.controls['recipeTitle'].value;
    var ingredientArray = recipeForm.controls['ingredients'].value;
    var category = recipeForm.controls['recipeCategory'].value;
    var tags = recipeForm.controls['recipeTags'].value.split(',');
    var numPersons = recipeForm.controls['recipeAmountPersons'].value;
    var picture = recipeForm.controls['recipePicture'].value;
    console.log(tags);
    console.log(numPersons);
    console.log(picture);

    //Assign values from form to recipe object
    recipe.title = title;
    ingredientArray.map((ingredient) => recipe.ingredients.push(ingredient));
    recipe.category = category;

    console.log(recipe);
  }


}
