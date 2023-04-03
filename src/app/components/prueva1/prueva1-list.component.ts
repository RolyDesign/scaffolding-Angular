import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PRUEVA1_FONT_ICONS } from './prueva1.const/prueva1-font-icons.const';
import { IPrueva1GetDTO } from './prueva1.model';
import { Prueva1Service } from './prueva1.service';

@Component({
  selector: 'scfld-prueva1-list',
  templateUrl: './prueva1-list.component.html',
  styleUrls: ['./prueva1-list.component.scss'],
})
export class Prueva1ListComponent implements OnInit {
  title = 'Prueva1s';
  listPrueva1s$!: Observable<IPrueva1GetDTO[]>;
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
  fontIcons = PRUEVA1_FONT_ICONS;
 
  constructor(private prueva1Service: Prueva1Service) {
    this.listPrueva1s$ = this.prueva1Service.getAll();
  }
  ngOnInit(): void {}
}