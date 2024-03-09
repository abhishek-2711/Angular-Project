import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepEditComponent } from './reciep-edit.component';

describe('ReciepEditComponent', () => {
  let component: ReciepEditComponent;
  let fixture: ComponentFixture<ReciepEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciepEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReciepEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
