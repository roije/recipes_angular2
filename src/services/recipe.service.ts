/**
 * Created by roije on 09/12/2016.
 */
import {Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import {Recipe} from "../entities/recipe.entity";

@Injectable()
export class RecipeService{
  private recipes: Recipe[];
  private url: string;

  constructor(private http : Http){}

  public getRemoteRecipes(id : string) : Observable<Recipe[]>{
    if(id){
      this.url = "http://localhost:3000/api/recipes/category/" + id;
      return this.http.get(this.url)
        .map((res: Response) => {
          let data = res.json();
          this.recipes = data;
          return data || {};
        })
        .catch(this.handleError)
    }
    else{
      this.url = "http://localhost:3000/api/recipes";
      return this.http.get(this.url)
        .map((res: Response) => {
          let data = res.json();
          this.recipes = data;
          return data || {};
        })
        .catch(this.handleError)
    }
  }

  public getLocalRecipes() : Recipe[]{
    return this.recipes;
  }

  private handleError(error: Response | any) {
    return Observable.throw("some error message");
  }
}
