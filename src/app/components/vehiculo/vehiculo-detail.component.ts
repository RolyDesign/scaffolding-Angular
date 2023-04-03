import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { VEHICULO_FONT_ICONS } from './vehiculo.const/vehiculo-font-icons.const';
import { IVehiculoGetDTO } from './vehiculo.model';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './vehiculo-detail.component.html',
  styleUrls: ['./vehiculo-detail.component.scss'],
})
export class VehiculoDetailComponent {
  title = 'Vehiculo Detail';
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
  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehiculo$ = this.vehiculoService.getById(this.id);
  }
}