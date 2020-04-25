import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';


export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe('a Text Recipe', 'this is a test', 'https://i5.walmartimages.ca/images/Enlarge/006/949/6000196006949.jpg' )
      ];
    

    getRecipes(){
        return [...this.recipes]
    }

}