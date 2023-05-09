import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEVICE_ROUTES } from './device.const/device-routes.const';

const routes: Routes = [
  ...DEVICE_ROUTES
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }