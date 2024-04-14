import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

    recipeAdded = new Subject<Recipe[]>();
    constructor(private shoppingListService: ShoppingListService){}
    private recipes: Recipe[] = [
        new Recipe('Milk Shake', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Banana',2),
            new Ingredient('Apple',10),
        ]),
        new Recipe('Badam Shake', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
            new Ingredient('badam',20),
            new Ingredient('kaju',40)
        ])
      ];
    
      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipeById(index:number){
        return this.recipes[index];
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeAdded.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipeAdded.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeAdded.next(this.recipes.slice());
      }

}