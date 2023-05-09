import { Routes } from "@angular/router";

export const  LICENSE_ROUTES: Routes = [
  {
    path:"licenses",
    loadComponent: () =>
      import('../license-list.component')
        .then(m => m.LicenseListComponent)
  },
  {
    path:"licenses/add",
    loadComponent: () =>
    import('../license-create.component')
      .then(m => m.LicenseCreateComponent)
  },
  {
    path:"licenses/:id",
    loadComponent: () =>
    import('../license-detail.component')
      .then(m => m.LicenseDetailComponent)
  },
  {
    path:"licenses/:id/edit",
    loadComponent: () =>
    import('../license-edit.component')
      .then(m => m.LicenseEditComponent)
  },
  {
    path:"licenses/:id/delete",
    loadComponent: () =>
    import('../license-delete.component')
      .then(m => m.LicenseDeleteComponent)
  },
]






