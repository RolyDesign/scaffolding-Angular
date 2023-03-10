import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FONT_ICONS } from './employe.const/font-icons.const';
import { EmployeModel } from './employe.model';
import { EmployService } from './employe.service';

@Component({
  selector: 'scfld-license-delete',
  templateUrl: './employe-delete.component.html',
  styleUrls: ['./employe-delete.component.scss']
})
export class EmployeDeleteComponent {
  title = 'Employ Delete';
  id: number;
  employ$!: Observable<EmployeModel>;
  heads = ['Name', 'Last Name', 'Age', 'Work', 'Roll', 'Gender', 'Suspended'];
  fontIcons = FONT_ICONS;

  constructor(
    private route: ActivatedRoute,
    private employeService: EmployService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employ$ = this.employeService.getById(this.id);
  }

  delete(){
    this.employeService.delete(this.id)
    this.router.navigate(['/employes']);
  }
}
