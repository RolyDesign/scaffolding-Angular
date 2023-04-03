import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruevaCreateComponent } from './prueva-create.component';

describe('PruevaCreateComponent', () => {
  let component: PruevaCreateComponent;
  let fixture: ComponentFixture<PruevaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruevaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruevaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
