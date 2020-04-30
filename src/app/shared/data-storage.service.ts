import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../recipes/recipe.service';
import { tap} from "rxjs/operators"
 
@Injectable()

export class DataStorageService {

    constructor(private http: HttpClient,
        private recipeService: RecipeService){
}
    
    storeRecipes(){

        const recipes = this.recipeService.getRecipes()

        this.http.put("https://angularcookbook.firebaseio.com/recipes.json", recipes)
        .subscribe(response=>{
            console.log(response)
        })

    }

    fetchRecipes(){

        return this.http
        .get<Recipe[]>("https://angularcookbook.firebaseio.com/recipes.json")
        .pipe(tap(recipes => {
            this.recipeService.setRecipes(recipes)
        }))
    
    }
    

}