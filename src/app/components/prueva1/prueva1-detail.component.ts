import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { PRUEVA1_FONT_ICONS } from './prueva1.const/prueva1-font-icons.const';
import { IPrueva1GetDTO } from './prueva1.model';
import { Prueva1Service } from './prueva1.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './prueva1-detail.component.html',
  styleUrls: ['./prueva1-detail.component.scss'],
})
export class Prueva1DetailComponent {
  title = 'Prueva1 Detail';
  id: number;
  prueva1$!: Observable<IPrueva1GetDTO>;
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
  fontIcons = PRUEVA1_FONT_ICONS;
  constructor(
    private route: ActivatedRoute,
    private prueva1Service: Prueva1Service,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.prueva1$ = this.prueva1Service.getById(this.id);
  }
}