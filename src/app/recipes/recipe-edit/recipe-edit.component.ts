import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode:boolean = false;
  recipeForm:FormGroup;


  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    ) { }

  ngOnInit() {

  this.route.params
  .subscribe((updatedParams:Params) => {
    this.id = +updatedParams.id
    this.editMode = updatedParams.id != undefined
    
    //initialize the form everytime the params chamge
    this.initForm()
  })

  }

  onSubmit(){
      
    const newRecipe= new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients)


    if(this.editMode){
      this.recipeService.updateRecipe(this.id,newRecipe)
    } else{
      this.recipeService.addRecipe(newRecipe)
    }

    this.router.navigate(["../"], {relativeTo: this.route })
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required)
      })
    )
  }

 onCancel(){
   this.router.navigate(["../"], {relativeTo: this.route })
  }

  onDeleteIngredient(idx:number){

    (<FormArray>this.recipeForm.get('ingredients')).removeAt(idx)

  }
  //reactive form handling
  private initForm(){
  

    let recipeName = ""
    let recipeImagePath = ""
    let recipeDescription = ""
    let recipeIngredients = new FormArray ([])

  if(this.editMode){

    const recipe = this.recipeService.getRecipe(this.id)

    recipeName = recipe.name
    recipeImagePath = recipe.imagePath
    recipeDescription =  recipe.description
    
    //we create a formgruop iterating over the ingredients is the recipe does have ingredients
    if(recipe.ingredients){
      for(let ingredient of recipe.ingredients){
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, Validators.required),
          })
        )
      }
    }
    
  }

  this.recipeForm= new FormGroup({
    'name': new FormControl(recipeName, Validators.required),
    'imagePath': new FormControl(recipeImagePath, Validators.required),
    'description': new FormControl(recipeDescription, Validators.required),
    'ingredients': recipeIngredients
  })
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }



}
