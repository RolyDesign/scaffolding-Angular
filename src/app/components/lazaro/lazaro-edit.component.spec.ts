import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazaroEditComponent } from './lazaro-edit.component';

describe('LazaroEditComponent', () => {
  let component: LazaroEditComponent;
  let fixture: ComponentFixture<LazaroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazaroEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazaroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});