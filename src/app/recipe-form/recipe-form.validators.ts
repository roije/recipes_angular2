/**
 * Created by roije on 20/12/2016.
 */
import {FormControl} from '@angular/forms';

export class RecipeFormValidators{

  static getRecipeNameLengthValidator() {
    return function nameValidator(control: FormControl): { [s: string]: boolean} {

      if(control.value.length < 2 || control.value.length > 60){
        return {invalidLenght: true}
      }
    }
  }
}
