import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeCreateComponent } from './components/employ/employe-create.component';
import { EmployeDeleteComponent } from './components/employ/employe-delete.component';
import { EmployeDetailComponent } from './components/employ/employe-detail.component';
import { EmployeEditComponent } from './components/employ/employe-edit.component';
import { EmployeListComponent } from './components/employ/employe-list.component';
import { HomeComponent } from './components/home/home.component';
import { LazaroCreateComponent } from './components/lazaro/lazaro-create.component';
import { LazaroDeleteComponent } from './components/lazaro/lazaro-delete.component';
import { LazaroDetailComponent } from './components/lazaro/lazaro-detail.component';
import { LazaroEditComponent } from './components/lazaro/lazaro-edit.component';
import { LazaroListComponent } from './components/lazaro/lazaro-list.component';
import { LicenseCreateComponent } from './components/license/license-create.component';
import { LicenseDeleteComponent } from './components/license/license-delete.component';
import { LicenseDetailComponent } from './components/license/license-detail.component';
import { LicenseEditComponent } from './components/license/license-edit.component';
import { LicenseListComponent } from './components/license/license-list.component';
import { ProductCreateComponent } from './components/product/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete.component';
import { ProductDetailComponent } from './components/product/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit.component';
import { ProductListComponent } from './components/product/product-list.component';
import { VehiculoCreateComponent } from './components/vehiculo/vehiculo-create.component';
import { VehiculoDeleteComponent } from './components/vehiculo/vehiculo-delete.component';
import { VehiculoDetailComponent } from './components/vehiculo/vehiculo-detail.component';
import { VehiculoEditComponent } from './components/vehiculo/vehiculo-edit.component';
import { VehiculoListComponent } from './components/vehiculo/vehiculo-list.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"employes",
    component:EmployeListComponent
  },
  {
    path:"employes/add",
    component:EmployeCreateComponent
  },
  {
    path:"employes/:id",
    component:EmployeDetailComponent
  },
  {
    path:"employes/:id/edit",
    component:EmployeEditComponent
  },
  {
    path:"employes/:id/delete",
    component:EmployeDeleteComponent
  },
  {
    path:"licenses",
    component:LicenseListComponent
  },
  {
    path:"licenses/add",
    component:LicenseCreateComponent
  },
  {
    path:"licenses/:id",
    component:LicenseDetailComponent
  },
  {
    path:"licenses/:id/edit",
    component:LicenseEditComponent
  },
  {
    path:"licenses/:id/delete",
    component:LicenseDeleteComponent
  },
  {
    path:"products",
    component:ProductListComponent
  },
  {
    path:"products/add",
    component:ProductCreateComponent
  },
  {
    path:"products/:id",
    component:ProductDetailComponent
  },
  {
    path:"products/:id/edit",
    component:ProductEditComponent
  },
  {
    path:"products/:id/delete",
    component:ProductDeleteComponent
  },
  {
    path:"vehiculos",
    component:VehiculoListComponent
  },
  {
    path:"vehiculos/add",
    component:VehiculoCreateComponent
  },
  {
    path:"vehiculos/:id",
    component:VehiculoDetailComponent
  },
  {
    path:"vehiculos/:id/edit",
    component:VehiculoEditComponent
  },
  {
    path:"vehiculos/:id/delete",
    component:VehiculoDeleteComponent
  }
  ,
  {
    path:"lazaros",
    component:LazaroListComponent
  },
  {
    path:"lazaros/add",
    component:LazaroCreateComponent
  },
  {
    path:"lazaros/:id",
    component:LazaroDetailComponent
  },
  {
    path:"lazaros/:id/edit",
    component:LazaroEditComponent
  },
  {
    path:"lazaros/:id/delete",
    component:LazaroDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
