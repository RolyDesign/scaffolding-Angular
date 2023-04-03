import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueva2EditComponent } from './prueva2-edit.component';

describe('Prueva2EditComponent', () => {
  let component: Prueva2EditComponent;
  let fixture: ComponentFixture<Prueva2EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueva2EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueva2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});