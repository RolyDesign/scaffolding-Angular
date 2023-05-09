import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



 //When standalone or simple
import { VEHICLE_ROUTES } from './components/vehicle/vehicle.const/vehicle-routes.const';
import { LICENSE_ROUTES } from './components/license/license.const/license-routes.const';

 //import { DEVICE_ROUTES } from './components/device/device.const/device-routes.const';

const routes: Routes = [
  {
    path:"",
    redirectTo:'/home',
    pathMatch: 'full'
  },
  // ...EMPLOY_ROUTES,

  {
    path:"home",
    component:HomeComponent
  },

  //When standalone or simple
...VEHICLE_ROUTES,
...LICENSE_ROUTES,
  //...DEVICE_ROUTES,
// When module
  // {
  //   path:"vehicles",
  //   loadChildren:() =>
  //    import("./components/vehicle/vehicle.module")
  //    .then(m => m.VehicleModule)
  // },

  //   {
  //   path:"licenses",
  //   loadChildren:() =>
  //    import("./components/license/license.module")
  //    .then(m => m.LicenseModule)
  // },
  {
    path:"devices",
    loadChildren:() =>
     import("./components/device/device.module")
     .then(m => m.DeviceModule)
  },

  {
    path:"employees",
    loadChildren:() =>
     import("./components/employee/employee.module")
     .then(m => m.EmployeeModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
