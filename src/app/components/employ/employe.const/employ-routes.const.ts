import { Route } from "@angular/router";
import { EmployeListComponent } from "../employe-list.component";
import { EmployeCreateComponent } from "../employe-create.component";
import { EmployeDetailComponent } from "../employe-detail.component";
import { EmployeEditComponent } from "../employe-edit.component";
import { EmployeDeleteComponent } from "../employe-delete.component";

export const  EMPLOY_ROUTES: Route[] = [
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
]

