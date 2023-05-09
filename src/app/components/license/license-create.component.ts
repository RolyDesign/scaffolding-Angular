import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  AbstractControlOptions,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { LICENSE_VALIDATION_FORMS } from './license.const/license-validation-form.const';
import { ILicenseCreateDTO } from './license.model';
import { LicenseService } from './license.service';
import { CommonModule } from '@angular/common';

import { minDate } from 'src/app/shared/validators-forms/validator-min-date';
import { maxDate } from 'src/app/shared/validators-forms/validator-max-date';

@Component({
  selector: 'scfld-license-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './license-create.component.html',
  styleUrls: ['./license-create.component.scss'],
})
export class LicenseCreateComponent implements OnInit {
  title = 'Create License';
  addLicense!: FormGroup;
  validationForms = LICENSE_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private licenseService: LicenseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addLicense = this.fb.group(
      {
        createdOn: [''],
        activationDate: ['', minDate(new Date(Date.now()))],
        canceledOn: [''],
        deactivationDate: [
          '',
          [
            minDate(
              new Date(
                new Date(Date.now()).getFullYear(),
                new Date(Date.now()).getMonth(),
                new Date(Date.now()).getDate() + 1
              )
            ),
            maxDate(new Date(new Date(Date.now()).getFullYear() + 5, 1, 1)),
          ],
        ],
        from: [''],
        to: [''],
        deviceId: [''],
      },
      { validator: this.actLessThanDeact } as AbstractControlOptions
    );
  }

  actLessThanDeact(c: AbstractControl): ValidationErrors | null {
    let forbidden = false;
    const actDate = c.get('activationDate');
    const deactDate = c.get('deactivationDate');
    if (actDate?.value != '' && deactDate?.value != '') {
      const actDateAsNum = new Date(actDate?.value).setHours(0, 0, 0, 0);
      const deactDateAsNum = new Date(deactDate?.value).setHours(0, 0, 0, 0);
      if (actDateAsNum >= deactDateAsNum) {
        forbidden = true;
      }
    }
    return forbidden ? { actLessThanDeact: true } : null;
  }

  add() {
    this.licenseService
      .create$(this.addLicense.getRawValue() as ILicenseCreateDTO)
      .subscribe((res) => {
        this.router.navigate(['/licenses']);
      });
  }

  get fm() {
    return this.addLicense.controls;
  }
}
