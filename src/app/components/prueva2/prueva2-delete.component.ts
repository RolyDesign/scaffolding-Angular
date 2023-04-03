import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PRUEVA2_FONT_ICONS } from './prueva2.const/prueva2-font-icons.const';
import { PRUEVA2_CONFIRM_MESSAGE } from './prueva2.const/prueva2-confirm-message.const';
import { IPrueva2GetDTO } from './prueva2.model';
import { Prueva2Service } from './prueva2.service';

@Component({
  selector: 'scfld-prueva2-delete',
  templateUrl: './prueva2-delete.component.html',
  styleUrls: ['./prueva2-delete.component.scss'],
})
export class Prueva2DeleteComponent {
  title = 'Prueva2 Delete';
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
  confirmMessage = PRUEVA2_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private prueva2Service: Prueva2Service,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.prueva2$ = this.prueva2Service.getById(this.id);
  }

  deletePrueva2() {
    this.prueva2Service.delete(this.id);
    this.router.navigate(['/prueva2s']);
  }
}
