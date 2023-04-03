import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LICENSE_GENDER_ENUM } from './license.enums'; 
import { LICENSE_VALIDATION_FORMS } from './license.const/license-validation-form.const';
import { ILicenseUpdateDTO } from './license.model';
import { LicenseService } from './license.service';

@Component({
  selector: 'scfld-license-edit',
  templateUrl: './license-edit.component.html',
  styleUrls: ['./license-edit.component.scss'],
})
export class LicenseEditComponent implements OnInit, OnDestroy {
  genderOptions = [ LICENSE_GENDER_ENUM.Mele, LICENSE_GENDER_ENUM.Female ];
  optionOptions = [ "opt1", "opt2", "opt3", "opt4", "opt5" ];
  editLicense!: FormGroup;
  title = 'Edit License';
  validationForms = LICENSE_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private licenseService: LicenseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.licenseService.getById(this.id).subscribe((res) => {
      this.editLicense = this.fb.group({
        name: [res.name, [Validators.required, Validators.minLength(5)]],
        lastName: [res.lastName, [Validators.required, Validators.minLength(5)]],
        age: [res.age, [Validators.required, Validators.min(5), Validators.max(120)]],
        work: [res.work, Validators.required ],
        roll: [res.roll, Validators.required ],
        gender: [res.gender, Validators.required ],
        option: [res.option, Validators.required ],
        email: [res.email, [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"), Validators.email]],
        suspended: [res.suspended],
      });
    });
  }

  edit() {
    this.licenseService.update(
      this.id,
      this.editLicense.getRawValue() as ILicenseUpdateDTO
    );
    this.router.navigate(['/licenses']);
  }
  get fm() {
    return this.editLicense.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}