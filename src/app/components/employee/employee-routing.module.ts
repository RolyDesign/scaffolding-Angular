import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMPLOYEE_ROUTES } from './employee.const/employee-routes.const';

const routes: Routes = [
  ...EMPLOYEE_ROUTES
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }