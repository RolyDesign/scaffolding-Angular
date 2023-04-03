import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  PruevaListComponent } from './prueva-list.component';

describe(' PruevaListComponent', () => {
  let component:  PruevaListComponent;
  let fixture: ComponentFixture< PruevaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  PruevaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( PruevaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});