import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router , RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { LICENSE_CONFIRM_MESSAGE } from './license.const/license-confirm-message.const';
import { ILicenseGetDTO } from './license.model';
import { LicenseService } from './license.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';


@Component({
  selector: 'scfld-license-delete',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule, ConfirmComponent, RouterModule],
  templateUrl: './license-delete.component.html',
  styleUrls: ['./license-delete.component.scss'],
})
export class LicenseDeleteComponent {
  title = 'License Delete';
  id: string;
  license$!: Observable<ILicenseGetDTO>;
  heads = [
    'createdOn',
    'activationDate',
    'canceledOn',
    'deactivationDate',
    'from',
    'to',
    'deviceId',
  ];
  confirmMessage = LICENSE_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private licenseService: LicenseService,
    private router: Router
  ) {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.license$ = this.licenseService.getById$(this.id);
  }

  deleteLicense() {
    this.licenseService.delete$(this.id).subscribe(res => {
     this.router.navigate(['/licenses']);
    });
  }
}
