import { Subject } from 'rxjs';


import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>()

    startedEditing = new Subject<number>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('lettuce', 10)
      ];


    getIngredients(){
        return [...this.ingredients]
    }

    getIngredient(index:number){
        return this.ingredients[index]
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next([...this.ingredients])
    }

    addIngredients(ingredients: Ingredient[]){

    this.ingredients = [...this.ingredients, ...ingredients]
    this.ingredientsChanged.next([...this.ingredients])

    }

    updateIngredient(index:number, newIngredient){
        this.ingredients[index] = newIngredient
        this.ingredientsChanged.next([...this.ingredients])
    }

    deteleIngredient(index:number){
        this.ingredients.splice(index,1)
        this.ingredientsChanged.next([...this.ingredients])
    }

}