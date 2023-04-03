import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazaroDetailComponent } from './lazaro-detail.component';

describe('LazaroDetailComponent', () => {
  let component: LazaroDetailComponent;
  let fixture: ComponentFixture<LazaroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazaroDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazaroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});