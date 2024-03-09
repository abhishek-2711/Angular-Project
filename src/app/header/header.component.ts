import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedNavigation  = new EventEmitter<string>();
  navigationHappened(navigationString: string){
    this.selectedNavigation.emit(navigationString);
  }
}
