import { Component} from '@angular/core';
import { ActivatedRoute, Router , RouterModule } from '@angular/router';
import {  Observable} from 'rxjs';
import { ILicenseGetDTO } from './license.model';
import { LicenseService } from './license.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'scfld-license-detail',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.scss'],
})
export class LicenseDetailComponent {
  title = 'License Detail';
  id: string;
  license$!: Observable<ILicenseGetDTO>;

  constructor(
    private route: ActivatedRoute,
    private licenseService: LicenseService,
    private router: Router
  ) {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.license$ = this.licenseService.getById$(this.id);
  }
}