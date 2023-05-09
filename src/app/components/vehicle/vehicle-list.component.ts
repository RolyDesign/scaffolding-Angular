import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VEHICLE_FONT_ICONS } from './vehicle.const/vehicle-font-icons.const';
import { IVehicleGetDTO } from './vehicle.model';
import { VehicleService } from './vehicle.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'scfld-vehicle-list',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  title = 'Vehicles';
  listVehicles$!: Observable<IVehicleGetDTO[]>;
  headsTable = [
    'Maker',
    'Model',
    'Year',
    'Tag',
    'Vin',
    'Service Status',
    'Notes',
    'Operational Status',
    'Capacity',
    'Alias',
    'Color',
    'Autonomy',
    'Fuel Capacity',
    'Picture2',
    'Picture',
  ];
  fontIcons = VEHICLE_FONT_ICONS;
 
  constructor(private vehicleService: VehicleService) {
    this.listVehicles$ = this.vehicleService.getAll$;
  }
  ngOnInit(): void {}
}