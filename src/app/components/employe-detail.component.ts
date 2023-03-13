import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { EMPLOY_FONT_ICONS } from './employe.const/employ-font-icons.const';
import { IEmployeGetDTO } from './employe.model';
import { EmployService } from './employe.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss'],
})
export class EmployeDetailComponent {
  title = 'Employ Detail';
  id: number;
  employ$!: Observable<IEmployeGetDTO>;
  heads = ['Name', 'Last Name', 'Age', 'Work', 'Roll', 'Gender','Email', 'Suspended'];
  fontIcons = EMPLOY_FONT_ICONS;
  constructor(
    private route: ActivatedRoute,
    private employeService: EmployService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employ$ = this.employeService.getById(this.id);
  }
}
