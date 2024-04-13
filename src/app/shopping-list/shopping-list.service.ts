import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // how to add array into other array 
        // if you add using loop then you will emit lot of events which are unneccesary 

        // directly all ingredients in one go using spread operator

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }


    getIngredeints(index:number){
        return this.ingredients[index];
    }


    updateIngredient(item:Ingredient,index:number){
        this.ingredients[index] = item;
        this.ingredientsChanged.next(this.ingredients.slice());
    }


    deleteIngredient(index){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    
}