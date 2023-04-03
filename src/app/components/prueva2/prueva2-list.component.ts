import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PRUEVA2_FONT_ICONS } from './prueva2.const/prueva2-font-icons.const';
import { IPrueva2GetDTO } from './prueva2.model';
import { Prueva2Service } from './prueva2.service';

@Component({
  selector: 'scfld-prueva2-list',
  templateUrl: './prueva2-list.component.html',
  styleUrls: ['./prueva2-list.component.scss'],
})
export class Prueva2ListComponent implements OnInit {
  title = 'Prueva2s';
  listPrueva2s$!: Observable<IPrueva2GetDTO[]>;
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
  fontIcons = PRUEVA2_FONT_ICONS;
 
  constructor(private prueva2Service: Prueva2Service) {
    this.listPrueva2s$ = this.prueva2Service.getAll();
  }
  ngOnInit(): void {}
}