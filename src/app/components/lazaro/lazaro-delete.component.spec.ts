import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazaroDeleteComponent } from './lazaro-delete.component';

describe('LazaroDeleteComponent', () => {
  let component: LazaroDeleteComponent;
  let fixture: ComponentFixture<LazaroDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazaroDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazaroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
