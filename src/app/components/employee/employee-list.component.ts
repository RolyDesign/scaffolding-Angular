import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EMPLOYEE_FONT_ICONS } from './employee.const/employee-font-icons.const';
import { IEmployeeGetDTO } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'scfld-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  title = 'Employees';
  listEmployees$!: Observable<IEmployeeGetDTO[]>;
  headsTable = [
    'Name',
    'Last Name',
    'Avatar',
    'Thumbnail',
    'Contract',
    'CV',
  ];
  fontIcons = EMPLOYEE_FONT_ICONS;
 
  constructor(private employeeService: EmployeeService) {
    this.listEmployees$ = this.employeeService.getAll$;
  }
  ngOnInit(): void {}
}