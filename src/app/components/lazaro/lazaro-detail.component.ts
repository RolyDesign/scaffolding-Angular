import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { LAZARO_FONT_ICONS } from './lazaro.const/lazaro-font-icons.const';
import { ILazaroGetDTO } from './lazaro.model';
import { LazaroService } from './lazaro.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './lazaro-detail.component.html',
  styleUrls: ['./lazaro-detail.component.scss'],
})
export class LazaroDetailComponent {
  title = 'Lazaro Detail';
  id: number;
  lazaro$!: Observable<ILazaroGetDTO>;
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
  fontIcons = LAZARO_FONT_ICONS;
  constructor(
    private route: ActivatedRoute,
    private lazaroService: LazaroService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.lazaro$ = this.lazaroService.getById(this.id);
  }
}