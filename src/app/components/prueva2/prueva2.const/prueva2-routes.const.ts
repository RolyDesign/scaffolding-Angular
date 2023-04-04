import { Route } from "@angular/router";
import { Prueva2ListComponent } from "../prueva2-list.component";
import { Prueva2CreateComponent } from "../prueva2-create.component";
import { Prueva2DetailComponent } from "../prueva2-detail.component";
import { Prueva2EditComponent } from "../prueva2-edit.component";
import { Prueva2DeleteComponent } from "../prueva2-delete.component";

export const  PRUEVA2_ROUTES: Route[] = [
  {
    path:"prueva2s",
    component:Prueva2ListComponent
  },
  {
    path:"prueva2s/add",
    component:Prueva2CreateComponent
  },
  {
    path:"prueva2s/:id",
    component:Prueva2DetailComponent
  },
  {
    path:"prueva2s/:id/edit",
    component:Prueva2EditComponent
  },
  {
    path:"prueva2s/:id/delete",
    component:Prueva2DeleteComponent
  },
]