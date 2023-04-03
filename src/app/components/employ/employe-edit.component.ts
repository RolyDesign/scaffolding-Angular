import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EMPLOY_GENDER_ENUM } from './employ.enums';
import { EMPLOY_VALIDATION_FORMS } from './employe.const/employ-validation-form.const';

import { IEmployeUpdateDTO } from './employe.model';
import { EmployService } from './employe.service';

@Component({
  selector: 'scfld-license-edit',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.scss'],
})
export class EmployeEditComponent implements OnInit, OnDestroy {
  genderOptions = [EMPLOY_GENDER_ENUM.female, EMPLOY_GENDER_ENUM.male];
  editEmploy!: FormGroup;
  title = 'Edit Employ';
  validationForms = EMPLOY_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private employeService: EmployService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.employeService.getById(this.id).subscribe((res) => {
      this.editEmploy = this.fb.group({
        name: [res.name, [Validators.required, Validators.minLength(3)]],
        lastName: [
          res.lastName,
          [Validators.required, Validators.minLength(3)],
        ],
        age: [
          res.age,
          [Validators.required, Validators.min(18), Validators.max(120)],
        ],
        work: [res.work, [Validators.required]],
        roll: [res.roll, [Validators.required]],
        gender: [res.gender, [Validators.required]],
        email: [
          res.email,
          [
            Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"),
            Validators.required
          ],
        ],
        suspended: [res.suspended]
      });
    });
  }

  edit() {
    this.employeService.update(
      this.id,
      this.editEmploy.getRawValue() as IEmployeUpdateDTO
    );
    this.router.navigate(['/employes']);
  }
  get fm() {
    return this.editEmploy.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
