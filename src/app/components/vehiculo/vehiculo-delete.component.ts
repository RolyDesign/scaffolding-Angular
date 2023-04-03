import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VEHICULO_FONT_ICONS } from './vehiculo.const/vehiculo-font-icons.const';
import { VEHICULO_CONFIRM_MESSAGE } from './vehiculo.const/vehiculo-confirm-message.const';
import { IVehiculoGetDTO } from './vehiculo.model';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'scfld-vehiculo-delete',
  templateUrl: './vehiculo-delete.component.html',
  styleUrls: ['./vehiculo-delete.component.scss'],
})
export class VehiculoDeleteComponent {
  title = 'Vehiculo Delete';
  id: number;
  vehiculo$!: Observable<IVehiculoGetDTO>;
  heads = [
    'name',
    'lastName',
    'age',
    'work',
    'roll',
    'gender',
    'option',
    'email',
    'suspended',
  ];
  fontIcons = VEHICULO_FONT_ICONS;
  confirmMessage = VEHICULO_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehiculo$ = this.vehiculoService.getById(this.id);
  }

  deleteVehiculo() {
    this.vehiculoService.delete(this.id);
    this.router.navigate(['/vehiculos']);
  }
}
