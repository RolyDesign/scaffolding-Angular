import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILicenseGetDTO } from './license.model';
import { LicenseService } from './license.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'scfld-license-list',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss'],
})
export class LicenseListComponent implements OnInit {
  title = 'Licenses';
  listLicenses$!: Observable<ILicenseGetDTO[]>;
  headsTable = [
    'Created On',
    'Activation Date',
    'Canceled On',
    'Deactivation Date',
    'From',
    'To ',
    'Device',
  ];

  constructor(private licenseService: LicenseService) {
    this.listLicenses$ = this.licenseService.getAll$;
  }
  ngOnInit(): void {}
}
