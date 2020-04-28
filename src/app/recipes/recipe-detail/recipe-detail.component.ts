import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  
      this.route.params
    .subscribe((updatedParams:Params) => {

      this.id = +updatedParams.id

      this.recipe = this.recipeService.getRecipe(this.id)


    })




  }

  ngOnCheck(){
    console.log(this.recipe.imagePath)
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)

  }

  onEditRecipe(){
    this.router.navigate(["edit"], {relativeTo: this.route})
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(["/"])
  }



}
