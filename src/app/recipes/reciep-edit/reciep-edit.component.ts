import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reciep-edit',
  templateUrl: './reciep-edit.component.html',
  styleUrl: './reciep-edit.component.css'
})
export class ReciepEditComponent implements OnInit{
  constructor(private route: ActivatedRoute){
    console.log("Recide edit component");
    
  }
  editMode = false;
  id: number;
  ngOnInit(){
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] !=null;
    })
  }
}
