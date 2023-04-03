import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { PRUEVA2_FONT_ICONS } from './prueva2.const/prueva2-font-icons.const';
import { IPrueva2GetDTO } from './prueva2.model';
import { Prueva2Service } from './prueva2.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './prueva2-detail.component.html',
  styleUrls: ['./prueva2-detail.component.scss'],
})
export class Prueva2DetailComponent {
  title = 'Prueva2 Detail';
  id: number;
  prueva2$!: Observable<IPrueva2GetDTO>;
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
  fontIcons = PRUEVA2_FONT_ICONS;
  constructor(
    private route: ActivatedRoute,
    private prueva2Service: Prueva2Service,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.prueva2$ = this.prueva2Service.getById(this.id);
  }
}