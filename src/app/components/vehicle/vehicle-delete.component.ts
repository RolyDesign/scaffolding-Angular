import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router , RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { VEHICLE_FONT_ICONS } from './vehicle.const/vehicle-font-icons.const';
import { VEHICLE_CONFIRM_MESSAGE } from './vehicle.const/vehicle-confirm-message.const';
import { IVehicleGetDTO } from './vehicle.model';
import { VehicleService } from './vehicle.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';


@Component({
  selector: 'scfld-vehicle-delete',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule, ConfirmComponent, RouterModule],
  templateUrl: './vehicle-delete.component.html',
  styleUrls: ['./vehicle-delete.component.scss'],
})
export class VehicleDeleteComponent {
  title = 'Vehicle Delete';
  id: number;
  vehicle$!: Observable<IVehicleGetDTO>;
  heads = [
    'maker',
    'model',
    'year',
    'tag',
    'vin',
    'serviceStatus',
    'serviceStatusNote',
    'operationalStatus',
    'capacity',
    'alias',
    'color',
    'autonomy',
    'fuelCapacity',
    'picture2',
    'picture',
  ];
  fontIcons = VEHICLE_FONT_ICONS;
  confirmMessage = VEHICLE_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicle$ = this.vehicleService.getById$(this.id);
  }

  deleteVehicle() {
    this.vehicleService.delete$(this.id).subscribe(res => {
     this.router.navigate(['/vehicles']);
    });
  }
}
