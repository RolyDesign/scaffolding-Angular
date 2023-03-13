import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeListComponent } from './components/employe-list.component';
import { EmployeEditComponent } from './components/employe-edit.component';
import { EmployeDetailComponent } from './components/employe-detail.component';
import { EmployeDeleteComponent } from './components/employe-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeCreateComponent } from './components/employe-create.component';
import { ReactiveFormsModule } from '@angular/forms';



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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
