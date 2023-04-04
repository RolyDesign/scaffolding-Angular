import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { EMPLOY_ROUTES } from './components/employ/employe.const/employ-routes.const';
import { PRUEVA2_ROUTES } from './components/prueva2/prueva2.const/prueva2-routes.const';


const routes: Routes = [
  {
    path:"",
    redirectTo:'/home',
    pathMatch: 'full'
  },
  ...EMPLOY_ROUTES,
  ...PRUEVA2_ROUTES,
  {
    path:"home",
    component:HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
