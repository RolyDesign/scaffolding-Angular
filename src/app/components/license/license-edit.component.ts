import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
  , ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
 
import { LICENSE_VALIDATION_FORMS } from './license.const/license-validation-form.const';
import { ILicenseUpdateDTO } from './license.model';
import { LicenseService } from './license.service';
import { CommonModule } from '@angular/common';
import { formatDate } from '@angular/common';
   import { minDate } from 'src/app/shared/validators-forms/validator-min-date';
  import { maxDate } from 'src/app/shared/validators-forms/validator-max-date';



@Component({
  selector: 'scfld-license-edit',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule, RouterModule],
  templateUrl: './license-edit.component.html',
  styleUrls: ['./license-edit.component.scss'],
})
export class LicenseEditComponent implements OnInit, OnDestroy {
  editLicense!: FormGroup;
  title = 'Edit License';
  validationForms = LICENSE_VALIDATION_FORMS;
  id = String(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
    constructor(
    private fb: FormBuilder,
    private licenseService: LicenseService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
   this.editLicense = this.fb.group({
      createdOn: [''],
      activationDate: ['', minDate(new Date(Date.now())) ],
      canceledOn: [''],
      deactivationDate: ['', [minDate(new Date(new Date(Date.now()).getFullYear(),new Date(Date.now()).getMonth(),new Date(Date.now()).getDate() + 1)), maxDate(new Date(new Date(Date.now()).getFullYear()+5,1,1))]],
      from: [''],
      to: [''],
      deviceId: [''],
      });
    this.sub = this.licenseService.getById$(this.id).subscribe((res) => {
        this.editLicense.setValue({
            createdOn: res.createdOn ? formatDate(res.createdOn,"yyyy-MM-dd", "en") : "",
            activationDate: res.activationDate ? formatDate(res.activationDate,"yyyy-MM-dd", "en") : "",
            canceledOn: res.canceledOn ? formatDate(res.canceledOn,"yyyy-MM-dd", "en") : "",
            deactivationDate: res.deactivationDate ? formatDate(res.deactivationDate,"yyyy-MM-dd", "en") : "",
            from: res.from ? formatDate(res.from,"yyyy-MM-dd", "en") : "",
            to: res.to ? formatDate(res.to,"yyyy-MM-dd", "en") : "",
            deviceId: res.deviceId,
          })
    });
  }

  edit() {
    this.licenseService.update$( this.editLicense.getRawValue() as ILicenseUpdateDTO,this.id)
    .subscribe(res => {
     this.router.navigate(['/licenses']);
    });
  }
  get fm() {
    return this.editLicense.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}