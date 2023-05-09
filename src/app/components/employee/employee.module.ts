import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  EmployeeCreateComponent } from './employee-create.component';
import {  EmployeeDeleteComponent } from './employee-delete.component';
import {  EmployeeDetailComponent } from './employee-detail.component';
import {  EmployeeEditComponent } from './employee-edit.component';
import {  EmployeeListComponent } from './employee-list.component';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';


@NgModule({
  declarations: [
 EmployeeCreateComponent,
 EmployeeDeleteComponent,
 EmployeeDetailComponent,
 EmployeeEditComponent,
 EmployeeListComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    EmployeeRoutingModule,
    ConfirmComponent
  ]
})
export class EmployeeModule { }