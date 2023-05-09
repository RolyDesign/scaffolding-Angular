import { Component} from '@angular/core';
import { ActivatedRoute, Router , RouterModule } from '@angular/router';
import {  Observable} from 'rxjs';
import { VEHICLE_FONT_ICONS } from './vehicle.const/vehicle-font-icons.const';
import { IVehicleGetDTO } from './vehicle.model';
import { VehicleService } from './vehicle.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'scfld-license-detail',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'],
})
export class VehicleDetailComponent {
  title = 'Vehicle Detail';
  id: number;
  vehicle$!: Observable<IVehicleGetDTO>;
  fontIcons = VEHICLE_FONT_ICONS;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicle$ = this.vehicleService.getById$(this.id);
  }
}