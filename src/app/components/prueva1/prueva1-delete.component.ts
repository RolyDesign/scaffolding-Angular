import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PRUEVA1_FONT_ICONS } from './prueva1.const/prueva1-font-icons.const';
import { PRUEVA1_CONFIRM_MESSAGE } from './prueva1.const/prueva1-confirm-message.const';
import { IPrueva1GetDTO } from './prueva1.model';
import { Prueva1Service } from './prueva1.service';

@Component({
  selector: 'scfld-prueva1-delete',
  templateUrl: './prueva1-delete.component.html',
  styleUrls: ['./prueva1-delete.component.scss'],
})
export class Prueva1DeleteComponent {
  title = 'Prueva1 Delete';
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
  confirmMessage = PRUEVA1_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private prueva1Service: Prueva1Service,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.prueva1$ = this.prueva1Service.getById(this.id);
  }

  deletePrueva1() {
    this.prueva1Service.delete(this.id);
    this.router.navigate(['/prueva1s']);
  }
}
