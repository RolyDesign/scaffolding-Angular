import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueva1CreateComponent } from './prueva1-create.component';

describe('Prueva1CreateComponent', () => {
  let component: Prueva1CreateComponent;
  let fixture: ComponentFixture<Prueva1CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueva1CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueva1CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
