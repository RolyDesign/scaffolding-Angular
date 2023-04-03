import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazaroCreateComponent } from './lazaro-create.component';

describe('LazaroCreateComponent', () => {
  let component: LazaroCreateComponent;
  let fixture: ComponentFixture<LazaroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazaroCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazaroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
