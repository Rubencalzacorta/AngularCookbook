import { Injectable } from '@angular/core';

import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>()
    
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

    addRecipe(newRecipe:Recipe){
        this.recipes.push(newRecipe)
        this.recipesChanged.next([...this.recipes])
    }

    updateRecipe(id:number, updatedRecipe: Recipe){
        this.recipes[id] = updatedRecipe
        this.recipesChanged.next([...this.recipes])
    }

    deleteRecipe(id){
        this.recipes.splice(id,1)
        this.recipesChanged.next([...this.recipes])

    }

}