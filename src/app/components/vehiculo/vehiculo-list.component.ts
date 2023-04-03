import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VEHICULO_FONT_ICONS } from './vehiculo.const/vehiculo-font-icons.const';
import { IVehiculoGetDTO } from './vehiculo.model';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'scfld-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.scss'],
})
export class VehiculoListComponent implements OnInit {
  title = 'Vehiculos';
  listVehiculos$!: Observable<IVehiculoGetDTO[]>;
  headsTable = [
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
 
  constructor(private vehiculoService: VehiculoService) {
    this.listVehiculos$ = this.vehiculoService.getAll();
  }
  ngOnInit(): void {}
}