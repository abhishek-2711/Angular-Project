import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscribable, Subscription } from 'rxjs';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(
    private shoppingListService: ShoppingListService,
    private logginService: LogginService
  ) {
    console.log('shopping-list component');
  }
  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    // After storing values for the first time we need to subscribe for subsequent changes in the array
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.logginService.printLog('Hello from Component Shopping-list ngOnINit');
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
