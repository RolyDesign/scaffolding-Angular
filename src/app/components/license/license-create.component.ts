import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LICENSE_GENDER_ENUM } from './license.enums'; 
import { LICENSE_VALIDATION_FORMS } from './license.const/license-validation-form.const';
import { ILicenseCreateDTO } from './license.model';
import { LicenseService } from './license.service';

@Component({
  selector: 'scfld-license-create',
  templateUrl: './license-create.component.html',
  styleUrls: ['./license-create.component.scss'],
})
export class LicenseCreateComponent implements OnInit {
  title = 'Create License';
  genderOptions = [ LICENSE_GENDER_ENUM.Mele, LICENSE_GENDER_ENUM.Female ];
  optionOptions = [ "opt1", "opt2", "opt3", "opt4", "opt5" ];

 
  addLicense!: FormGroup;
  validationForms = LICENSE_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private licenseService: LicenseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addLicense = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(5), Validators.max(120)]],
      work: ['', Validators.required ],
      roll: ['', Validators.required ],
      gender: ['', Validators.required ],
      option: ['', Validators.required ],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"), Validators.email]],
      suspended: [false],
    });
  }

  add() {
    this.licenseService.create(this.addLicense.getRawValue() as ILicenseCreateDTO);
    this.router.navigate(['/licenses']);
  }

  get fm() {
    return this.addLicense.controls;
  }
}
