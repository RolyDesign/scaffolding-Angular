import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueva1EditComponent } from './prueva1-edit.component';

describe('Prueva1EditComponent', () => {
  let component: Prueva1EditComponent;
  let fixture: ComponentFixture<Prueva1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueva1EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueva1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});