import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { LICENSE_FONT_ICONS } from './license.const/license-font-icons.const';
import { ILicenseGetDTO } from './license.model';
import { LicenseService } from './license.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.scss'],
})
export class LicenseDetailComponent {
  title = 'License Detail';
  id: number;
  license$!: Observable<ILicenseGetDTO>;
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
  fontIcons = LICENSE_FONT_ICONS;
  constructor(
    private route: ActivatedRoute,
    private licenseService: LicenseService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.license$ = this.licenseService.getById(this.id);
  }
}