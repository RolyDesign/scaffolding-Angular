import { Routes } from "@angular/router";
import { EmployeeListComponent } from "../employee-list.component";
import { EmployeeCreateComponent } from "../employee-create.component";
import { EmployeeDetailComponent } from "../employee-detail.component";
import { EmployeeEditComponent } from "../employee-edit.component";
import { EmployeeDeleteComponent } from "../employee-delete.component";

export const  EMPLOYEE_ROUTES: Routes = [
   {
    path:"",
    component:EmployeeListComponent
  },
  {
    path:"add",
    component:EmployeeCreateComponent
  },
  {
    path:":id",
    component:EmployeeDetailComponent
  },
  {
    path:":id/edit",
    component:EmployeeEditComponent
  },
  {
    path:":id/delete",
    component:EmployeeDeleteComponent
  },
]






