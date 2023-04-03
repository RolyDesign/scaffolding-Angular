import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PRUEVA_FONT_ICONS } from './prueva.const/prueva-font-icons.const';
import { PRUEVA_CONFIRM_MESSAGE } from './prueva.const/prueva-confirm-message.const';
import { IPruevaGetDTO } from './prueva.model';
import { PruevaService } from './prueva.service';

@Component({
  selector: 'scfld-prueva-delete',
  templateUrl: './prueva-delete.component.html',
  styleUrls: ['./prueva-delete.component.scss'],
})
export class PruevaDeleteComponent {
  title = 'Prueva Delete';
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
  confirmMessage = PRUEVA_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private pruevaService: PruevaService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.prueva$ = this.pruevaService.getById(this.id);
  }

  deletePrueva() {
    this.pruevaService.delete(this.id);
    this.router.navigate(['/pruevas']);
  }
}
