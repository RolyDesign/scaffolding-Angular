import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruevaDetailComponent } from './prueva-detail.component';

describe('PruevaDetailComponent', () => {
  let component: PruevaDetailComponent;
  let fixture: ComponentFixture<PruevaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruevaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruevaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});