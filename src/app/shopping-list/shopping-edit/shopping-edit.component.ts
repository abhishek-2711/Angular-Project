import { Component, ElementRef, EventEmitter, OnInit, ViewChild,} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  subscription: Subscription;

  editMode : boolean = false;

  editItemIndex : number;

  editItem: Ingredient;

  submitType : string = "ADD";

  @ViewChild('f') slForm : NgForm;

  constructor(private shoppingListService: ShoppingListService) { }




  ngOnInit() {

    this.subscription = this.shoppingListService.startedEditing.subscribe((index)=>{
      this.editMode  = true;
      this.editItemIndex = index;
      this.editItem = this.shoppingListService.getIngredeints(index);
      this.slForm.setValue({
        name: this.editItem.name,
        amount : this.editItem.amount
      })
      this.submitType = "UPDATE";

    })
  }
  onAddItem(form : NgForm){

    if(this.editMode){
      this.updateItem(form.value,this.editItemIndex);
      this.slForm.reset();
      return;
    }

    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    this.shoppingListService.addIngredient(newIngredient);
    this.slForm.reset();
  }

  updateItem(item:Ingredient,index:number){
    this.shoppingListService.updateIngredient(item,index);
    this.editMode = false;
    this.submitType = "ADD";
    this.slForm.reset();
  }

  clearClickHandler(){
    this.slForm.reset();
    this.editMode = false;
  }

  deleteIngredient(){
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.slForm.reset();
    this.editMode = false;
  }

}
