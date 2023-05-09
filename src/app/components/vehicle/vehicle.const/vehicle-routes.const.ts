import { Routes } from "@angular/router";

export const  VEHICLE_ROUTES: Routes = [
  {
    path:"vehicles",
    loadComponent: () =>
      import('../vehicle-list.component')
        .then(m => m.VehicleListComponent)
  },
  {
    path:"vehicles/add",
    loadComponent: () =>
    import('../vehicle-create.component')
      .then(m => m.VehicleCreateComponent)
  },
  {
    path:"vehicles/:id",
    loadComponent: () =>
    import('../vehicle-detail.component')
      .then(m => m.VehicleDetailComponent)
  },
  {
    path:"vehicles/:id/edit",
    loadComponent: () =>
    import('../vehicle-edit.component')
      .then(m => m.VehicleEditComponent)
  },
  {
    path:"vehicles/:id/delete",
    loadComponent: () =>
    import('../vehicle-delete.component')
      .then(m => m.VehicleDeleteComponent)
  },
]






