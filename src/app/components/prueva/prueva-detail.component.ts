import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { PRUEVA_FONT_ICONS } from './prueva.const/prueva-font-icons.const';
import { IPruevaGetDTO } from './prueva.model';
import { PruevaService } from './prueva.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './prueva-detail.component.html',
  styleUrls: ['./prueva-detail.component.scss'],
})
export class PruevaDetailComponent {
  title = 'Prueva Detail';
  id: number;
  prueva$!: Observable<IPruevaGetDTO>;
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
  fontIcons = PRUEVA_FONT_ICONS;
  constructor(
    private route: ActivatedRoute,
    private pruevaService: PruevaService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.prueva$ = this.pruevaService.getById(this.id);
  }
}