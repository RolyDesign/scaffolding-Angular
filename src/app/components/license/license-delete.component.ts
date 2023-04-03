import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LICENSE_FONT_ICONS } from './license.const/license-font-icons.const';
import { LICENSE_CONFIRM_MESSAGE } from './license.const/license-confirm-message.const';
import { ILicenseGetDTO } from './license.model';
import { LicenseService } from './license.service';

@Component({
  selector: 'scfld-license-delete',
  templateUrl: './license-delete.component.html',
  styleUrls: ['./license-delete.component.scss'],
})
export class LicenseDeleteComponent {
  title = 'License Delete';
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
  confirmMessage = LICENSE_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private licenseService: LicenseService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.license$ = this.licenseService.getById(this.id);
  }

  deleteLicense() {
    this.licenseService.delete(this.id);
    this.router.navigate(['/licenses']);
  }
}
