import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // Recipte comes from the Recipes.models.
  
  recipes: Recipe[]
  subcription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.subcription =  this.recipeService.recipesChanged
    .subscribe((updatedRecipes: Recipe[]) => {
      this.recipes = updatedRecipes
    })
    this.recipes = this.recipeService.getRecipes()
  }
  
  onNewRecipe(){
    this.router.navigate(["new"], {relativeTo: this.route})  
  }
  
    ngOnDestroy(){
      this.subcription.unsubscribe()
    }


}
