import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueva2DeleteComponent } from './prueva2-delete.component';

describe('Prueva2DeleteComponent', () => {
  let component: Prueva2DeleteComponent;
  let fixture: ComponentFixture<Prueva2DeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueva2DeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueva2DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
