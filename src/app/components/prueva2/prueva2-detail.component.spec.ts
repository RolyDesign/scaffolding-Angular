import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueva2DetailComponent } from './prueva2-detail.component';

describe('Prueva2DetailComponent', () => {
  let component: Prueva2DetailComponent;
  let fixture: ComponentFixture<Prueva2DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueva2DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueva2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});