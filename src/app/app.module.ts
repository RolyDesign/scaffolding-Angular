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



@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    EmployeEditComponent,
    EmployeDetailComponent,
    EmployeDeleteComponent,
    EmployeCreateComponent,

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
