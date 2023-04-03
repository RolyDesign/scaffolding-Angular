import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LAZARO_FONT_ICONS } from './lazaro.const/lazaro-font-icons.const';
import { ILazaroGetDTO } from './lazaro.model';
import { LazaroService } from './lazaro.service';

@Component({
  selector: 'scfld-lazaro-list',
  templateUrl: './lazaro-list.component.html',
  styleUrls: ['./lazaro-list.component.scss'],
})
export class LazaroListComponent implements OnInit {
  title = 'Lazaros';
  listLazaros$!: Observable<ILazaroGetDTO[]>;
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
  fontIcons = LAZARO_FONT_ICONS;
 
  constructor(private lazaroService: LazaroService) {
    this.listLazaros$ = this.lazaroService.getAll();
  }
  ngOnInit(): void {}
}