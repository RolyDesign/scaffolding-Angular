import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LAZARO_FONT_ICONS } from './lazaro.const/lazaro-font-icons.const';
import { LAZARO_CONFIRM_MESSAGE } from './lazaro.const/lazaro-confirm-message.const';
import { ILazaroGetDTO } from './lazaro.model';
import { LazaroService } from './lazaro.service';

@Component({
  selector: 'scfld-lazaro-delete',
  templateUrl: './lazaro-delete.component.html',
  styleUrls: ['./lazaro-delete.component.scss'],
})
export class LazaroDeleteComponent {
  title = 'Lazaro Delete';
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
  confirmMessage = LAZARO_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private lazaroService: LazaroService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.lazaro$ = this.lazaroService.getById(this.id);
  }

  deleteLazaro() {
    this.lazaroService.delete(this.id);
    this.router.navigate(['/lazaros']);
  }
}
