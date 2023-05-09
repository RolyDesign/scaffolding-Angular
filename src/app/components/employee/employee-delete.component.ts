import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { EMPLOYEE_FONT_ICONS } from './employee.const/employee-font-icons.const';
import { EMPLOYEE_CONFIRM_MESSAGE } from './employee.const/employee-confirm-message.const';
import { IEmployeeGetDTO } from './employee.model';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'scfld-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss'],
})
export class EmployeeDeleteComponent {
  title = 'Employee Delete';
  id: number;
  employee$!: Observable<IEmployeeGetDTO>;
  heads = [
    'name',
    'lastName',
    'avatar',
    'thumbnail',
    'contract',
    'cv',
  ];
  fontIcons = EMPLOYEE_FONT_ICONS;
  confirmMessage = EMPLOYEE_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee$ = this.employeeService.getById$(this.id);
  }

  deleteEmployee() {
    this.employeeService.delete$(this.id).subscribe(res => {
     this.router.navigate(['/employees']);
    });
  }
}
