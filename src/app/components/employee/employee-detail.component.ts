import { Component} from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import {  Observable} from 'rxjs';
import { EMPLOYEE_FONT_ICONS } from './employee.const/employee-font-icons.const';
import { IEmployeeGetDTO } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent {
  title = 'Employee Detail';
  id: number;
  employee$!: Observable<IEmployeeGetDTO>;
  fontIcons = EMPLOYEE_FONT_ICONS;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee$ = this.employeeService.getById$(this.id);
  }
}