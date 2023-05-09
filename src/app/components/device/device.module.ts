import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceRoutingModule } from './device-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  DeviceCreateComponent } from './device-create.component';
import {  DeviceDeleteComponent } from './device-delete.component';
import {  DeviceDetailComponent } from './device-detail.component';
import {  DeviceEditComponent } from './device-edit.component';
import {  DeviceListComponent } from './device-list.component';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';


@NgModule({
  declarations: [
 DeviceCreateComponent,
 DeviceDeleteComponent,
 DeviceDetailComponent,
 DeviceEditComponent,
 DeviceListComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DeviceRoutingModule,
    ConfirmComponent
  ]
})
export class DeviceModule { }