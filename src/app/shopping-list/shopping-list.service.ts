import { Subject } from 'rxjs';


import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('lettuce', 10)
      ];


    getIngredients(){
        return [...this.ingredients]
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next([...this.ingredients])
    }

    addIngredients(ingredients: Ingredient[]){

    this.ingredients = [...this.ingredients, ...ingredients]
    this.ingredientsChanged.next([...this.ingredients])

    }


}