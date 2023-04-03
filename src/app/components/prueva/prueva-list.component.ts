import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PRUEVA_FONT_ICONS } from './prueva.const/prueva-font-icons.const';
import { IPruevaGetDTO } from './prueva.model';
import { PruevaService } from './prueva.service';

@Component({
  selector: 'scfld-prueva-list',
  templateUrl: './prueva-list.component.html',
  styleUrls: ['./prueva-list.component.scss'],
})
export class PruevaListComponent implements OnInit {
  title = 'Pruevas';
  listPruevas$!: Observable<IPruevaGetDTO[]>;
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
  fontIcons = PRUEVA_FONT_ICONS;
 
  constructor(private pruevaService: PruevaService) {
    this.listPruevas$ = this.pruevaService.getAll();
  }
  ngOnInit(): void {}
}