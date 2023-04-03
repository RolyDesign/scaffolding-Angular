import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Prueva2ListComponent } from './prueva2-list.component';

describe(' Prueva2ListComponent', () => {
  let component:  Prueva2ListComponent;
  let fixture: ComponentFixture< Prueva2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  Prueva2ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( Prueva2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});