import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDeleteComponent } from './employe-delete.component';

describe('LicenseDeleteComponent', () => {
  let component: EmployeDeleteComponent;
  let fixture: ComponentFixture<EmployeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
