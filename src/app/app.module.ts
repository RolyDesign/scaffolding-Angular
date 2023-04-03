import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeCreateComponent } from './components/employ/employe-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './shared/confirm/confirm.component';
import { EmployeListComponent } from './components/employ/employe-list.component';
import { EmployeEditComponent } from './components/employ/employe-edit.component';
import { EmployeDetailComponent } from './components/employ/employe-detail.component';
import { EmployeDeleteComponent } from './components/employ/employe-delete.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';

import { LicenseEditComponent } from './components/license/license-edit.component';
import { LicenseDeleteComponent } from './components/license/license-delete.component';
import { LicenseDetailComponent } from './components/license/license-detail.component';
import { LicenseCreateComponent } from './components/license/license-create.component';
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
import { LazaroCreateComponent } from './components/lazaro/lazaro-create.component';
import { LazaroDetailComponent } from './components/lazaro/lazaro-detail.component';
import { LazaroEditComponent } from './components/lazaro/lazaro-edit.component';
import { LazaroDeleteComponent } from './components/lazaro/lazaro-delete.component';
import { LazaroListComponent } from './components/lazaro/lazaro-list.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    EmployeEditComponent,
    EmployeDetailComponent,
    EmployeDeleteComponent,
    EmployeCreateComponent,
    LicenseListComponent,
    LicenseEditComponent,
    LicenseDeleteComponent,
    LicenseDetailComponent,
    LicenseCreateComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    VehiculoCreateComponent,
    VehiculoDeleteComponent,
    VehiculoDetailComponent,
    VehiculoEditComponent,
    VehiculoListComponent,
    VehiculoEditComponent,

    LazaroCreateComponent,
    LazaroDetailComponent,
    LazaroEditComponent,
    LazaroDeleteComponent,
    LazaroListComponent,
    LazaroEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmComponent,
    SidenavComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
