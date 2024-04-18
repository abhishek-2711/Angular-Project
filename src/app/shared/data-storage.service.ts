import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeSerive: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeSerive.getRecipes();
    return this.http
      .put(
        'https://shoppinglist-2b487-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchRecipes() {
    return this.http
      .get(
        'https://shoppinglist-2b487-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes: Recipe[]) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeSerive.storeRecipes(recipes);
        })
      );
  }
}
