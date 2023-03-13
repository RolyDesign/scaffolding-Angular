import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EMPLOY_CONFIRM_MESSAGE } from './employe.const/employ-confirm-message.const';
import { EMPLOY_FONT_ICONS } from './employe.const/employ-font-icons.const';
import { IEmployeGetDTO } from './employe.model';
import { EmployService } from './employe.service';

@Component({
  selector: 'scfld-license-delete',
  templateUrl: './employe-delete.component.html',
  styleUrls: ['./employe-delete.component.scss'],
})
export class EmployeDeleteComponent {
  title = 'Employ Delete';
  id: number;
  employ$!: Observable<IEmployeGetDTO>;
  heads = [
    'Name',
    'Last Name',
    'Age',
    'Work',
    'Roll',
    'Gender',
    'Email',
    'Suspended',
  ];
  fontIcons = EMPLOY_FONT_ICONS;
  confirmMessage = EMPLOY_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private employeService: EmployService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employ$ = this.employeService.getById(this.id);
  }
  hidenModal(v: boolean) {
    this.showConfirm = v;
  }
  showModal(v: boolean) {
    this.showConfirm = v;
  }
  confirmDelete() {
    this.employeService.delete(this.id);
    this.router.navigate(['/employes']);
  }
}
