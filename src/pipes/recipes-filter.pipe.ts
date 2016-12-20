/**
 * Created by roije on 10/12/2016.
 */
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../entities/recipe.entity';
import {element} from "protractor";
import {el} from "@angular/platform-browser/testing/browser_util";

@Pipe({
  name : 'recipesFilter'
})

@Injectable()
export class RecipesFilter implements PipeTransform{
  transform(items: Recipe[], args: string): any {
    if (args && items.length > 0) {

      //If args starts with hashtag, search for tags
      if(this.hasHastag(args)){
        var placeholderArray = args.split(' ');
        var tagsArray = [];

        //Remove leading '#' from every element in placeholder array and add to ingredientsArray
        placeholderArray.map(element => {
          element = element.substring(1);
          tagsArray.push(element)
        });

        if(tagsArray[0] !== '') {
          var test = [];
          for(var i = 0; i < items.length; i++){

            if(this.arrayContainsArray(items[i].tags, tagsArray)){
              test.push(items[i]);
            }

          }

          if (test && test.length > 0 ){
            return test;
          }
          return [-2]
        }

      }

      //If it's not a hashtag, search for the title of a recipe
      let itemsFound = items.filter(
        item => item.title && item.title.toLowerCase().includes(args.toLowerCase()) );

      if (itemsFound && itemsFound.length > 0 ){
        return itemsFound;
      }

      return [-1]; // to display error message (none found) in view.
    }
    return items;
  }

  arrayContainsArray(superset, subset) {
    return subset.every(function (value) {
      return (superset.indexOf(value) >= 0);
  });
}

  hasHastag(args) : boolean{
    return args.indexOf('#') == 0;
  }
}

