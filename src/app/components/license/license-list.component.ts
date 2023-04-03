import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LICENSE_FONT_ICONS } from './license.const/license-font-icons.const';
import { ILicenseGetDTO } from './license.model';
import { LicenseService } from './license.service';

@Component({
  selector: 'scfld-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss'],
})
export class LicenseListComponent implements OnInit {
  title = 'Licenses';
  listLicenses$!: Observable<ILicenseGetDTO[]>;
  headsTable = [
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
 
  constructor(private licenseService: LicenseService) {
    this.listLicenses$ = this.licenseService.getAll();
  }
  ngOnInit(): void {}
}