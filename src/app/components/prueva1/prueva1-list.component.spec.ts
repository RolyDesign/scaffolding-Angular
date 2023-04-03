import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Prueva1ListComponent } from './prueva1-list.component';

describe(' Prueva1ListComponent', () => {
  let component:  Prueva1ListComponent;
  let fixture: ComponentFixture< Prueva1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  Prueva1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( Prueva1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});