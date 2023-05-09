import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';

// import { VehicleCreateComponent } from './components/vehicle/vehicle-create.component';
// import { VehicleDeleteComponent } from './components/vehicle/vehicle-delete.component';
// import { VehicleDetailComponent } from './components/vehicle/vehicle-detail.component';
// import { VehicleEditComponent } from './components/vehicle/vehicle-edit.component';
// import { VehicleListComponent } from './components/vehicle/vehicle-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    // when simple components
    // VehicleCreateComponent,
    // VehicleDeleteComponent,
    // VehicleDetailComponent,
    // VehicleEditComponent,
    // VehicleListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmComponent,
    SidenavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//"http://tenant1.localhost:5000/api/"
