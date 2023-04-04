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
import { Prueva2CreateComponent } from './components/prueva2/prueva2-create.component';
import { Prueva2DeleteComponent } from './components/prueva2/prueva2-delete.component';
import { Prueva2DetailComponent } from './components/prueva2/prueva2-detail.component';
import { Prueva2EditComponent } from './components/prueva2/prueva2-edit.component';
import { Prueva2ListComponent } from './components/prueva2/prueva2-list.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeListComponent,
    EmployeEditComponent,
    EmployeDetailComponent,
    EmployeDeleteComponent,
    EmployeCreateComponent,
    Prueva2CreateComponent,
    Prueva2DeleteComponent,
    Prueva2DetailComponent,
    Prueva2EditComponent,
    Prueva2ListComponent
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
