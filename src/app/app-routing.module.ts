import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeCreateComponent } from './components/employe-create.component';
import { EmployeDeleteComponent } from './components/employe-delete.component';
import { EmployeDetailComponent } from './components/employe-detail.component';
import { EmployeEditComponent } from './components/employe-edit.component';
import { EmployeListComponent } from './components/employe-list.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'/employes',
    pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
