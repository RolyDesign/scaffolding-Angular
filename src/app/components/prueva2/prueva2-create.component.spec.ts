import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueva2CreateComponent } from './prueva2-create.component';

describe('Prueva2CreateComponent', () => {
  let component: Prueva2CreateComponent;
  let fixture: ComponentFixture<Prueva2CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueva2CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prueva2CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
