import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Recipte comes from the Recipes.models.
  
  @Output()  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('a Text Recipe', 'this is a test', 'https://i5.walmartimages.ca/images/Enlarge/006/949/6000196006949.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }


}
