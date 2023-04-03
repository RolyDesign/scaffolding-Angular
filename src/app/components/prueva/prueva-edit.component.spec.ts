import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruevaEditComponent } from './prueva-edit.component';

describe('PruevaEditComponent', () => {
  let component: PruevaEditComponent;
  let fixture: ComponentFixture<PruevaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruevaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruevaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});