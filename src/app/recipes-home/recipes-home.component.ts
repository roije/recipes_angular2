import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../entities/category.entity";
import {error} from "util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipes-home',
  templateUrl: './recipes-home.component.html',
  styleUrls: ['./recipes-home.component.css']
})
export class RecipesHomeComponent implements OnInit {

  private categories : Category[];
  private loadingMessage : string;

  constructor(private categoryService : CategoryService, private router : Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getAllLocalCategories();

    if(!this.categories){
      this.loadingMessage = "Retrieving categories..."

      this.categoryService.getAllRemoteCategories().subscribe(
        (categories) => {
          this.categories = categories;
          console.log(this.categories);
          this.loadingMessage = "";
        },
      )
    }
  }

  goToRecipeList(id){
    let link = ['/recipes/category', id];
    this.router.navigate(link);
  }

}
