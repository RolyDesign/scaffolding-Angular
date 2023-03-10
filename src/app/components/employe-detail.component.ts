import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { EmployeModel } from './employe.model';
import { EmployService } from './employe.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss'],
})
export class EmployeDetailComponent {
  title = 'Employ Detail';
  id: number;
  employ$!: Observable<EmployeModel>;
  heads = ['Name', 'Last Name', 'Age', 'Work', 'Roll', 'Gender', 'Suspended'];
  faSquareCheck = faSquareCheck;
  faSquare = faSquare;
  constructor(
    private route: ActivatedRoute,
    private employeService: EmployService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.employ$ = this.employeService.getById(this.id);
  }
}
