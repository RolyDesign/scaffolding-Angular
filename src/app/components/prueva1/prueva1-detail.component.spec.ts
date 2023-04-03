import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueva1DetailComponent } from './prueva1-detail.component';

describe('Prueva1DetailComponent', () => {
  let component: Prueva1DetailComponent;
  let fixture: ComponentFixture<Prueva1DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueva1DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueva1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});