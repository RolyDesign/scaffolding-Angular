import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruevaDeleteComponent } from './prueva-delete.component';

describe('PruevaDeleteComponent', () => {
  let component: PruevaDeleteComponent;
  let fixture: ComponentFixture<PruevaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruevaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruevaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
