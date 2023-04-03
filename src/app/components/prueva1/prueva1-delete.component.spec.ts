import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueva1DeleteComponent } from './prueva1-delete.component';

describe('Prueva1DeleteComponent', () => {
  let component: Prueva1DeleteComponent;
  let fixture: ComponentFixture<Prueva1DeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueva1DeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueva1DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
