import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipeSelected: boolean = true;
  doNavigate(navigateTo: string){
    if(navigateTo === 'shopping-list'){
      this.recipeSelected = false;
    }
    else{
      this.recipeSelected = true;
    }
  }
}
