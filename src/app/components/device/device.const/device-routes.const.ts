import { Routes } from "@angular/router";
import { DeviceListComponent } from "../device-list.component";
import { DeviceCreateComponent } from "../device-create.component";
import { DeviceDetailComponent } from "../device-detail.component";
import { DeviceEditComponent } from "../device-edit.component";
import { DeviceDeleteComponent } from "../device-delete.component";

export const  DEVICE_ROUTES: Routes = [
   {
    path:"",
    component:DeviceListComponent
  },
  {
    path:"add",
    component:DeviceCreateComponent
  },
  {
    path:":id",
    component:DeviceDetailComponent
  },
  {
    path:":id/edit",
    component:DeviceEditComponent
  },
  {
    path:":id/delete",
    component:DeviceDeleteComponent
  },
]






