import { Injectable } from '@angular/core';

import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    
    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'The Schintzel is a breard beef loin with french fries typical from Austria and Switzerland',
            'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/1:1/w_768,h_768,c_limit/chicken-schnitzel.jpg',
            [
                new Ingredient("Meat", 1),
                new Ingredient("Frech Fries", 10)
            ]
              ),

              new Recipe(
                'Berger',
                'The Burger is a an American Classic not world famous. recomended with french fries and a milkshake',
                'https://purewows3.imgix.net/images/articles/2017_02/dallas_best_burgers_CAT1.png?auto=format,compress&cs=strip',
                [
                    new Ingredient("Meat", 1),
                    new Ingredient("Bead", 1),
                    new Ingredient("Meat", 1),
                    new Ingredient("Frech Fries", 10)
                ]
                  )
            ];
    
    constructor(private shoppingListService: ShoppingListService){}
            
     getRecipes(){
        return [...this.recipes]
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){

        this.shoppingListService.addIngredients(ingredients)

    }

    getRecipe(id){
        return this.recipes[id]
    }

}