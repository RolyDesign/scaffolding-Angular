import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  LazaroListComponent } from './lazaro-list.component';

describe(' LazaroListComponent', () => {
  let component:  LazaroListComponent;
  let fixture: ComponentFixture< LazaroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  LazaroListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( LazaroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});