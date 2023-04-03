import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EMPLOY_GENDER_ENUM } from './employ.enums';
import { EMPLOY_VALIDATION_FORMS } from './employe.const/employ-validation-form.const';

import { IEmployeCreateDTO } from './employe.model';


import { EmployService } from './employe.service';

@Component({
  selector: 'scfld-employe-create',
  templateUrl: './employe-create.component.html',
  styleUrls: ['./employe-create.component.scss'],
})
export class EmployeCreateComponent implements OnInit {
  title = 'Create Employ';
  genderOptions = [EMPLOY_GENDER_ENUM.female, EMPLOY_GENDER_ENUM.male];
  addEmploy!: FormGroup;
  validationForms = EMPLOY_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private employeService: EmployService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addEmploy = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
      work: ['', [Validators.required]],
      roll: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.minLength(2),
          Validators.pattern(
            "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
          ),
          Validators.required,
        ],
      ],
      suspended: [false],
    });
  }

  add() {
    this.employeService.create(this.addEmploy.getRawValue() as IEmployeCreateDTO);
    this.router.navigate(['/employes']);
  }

  get fm() {
    return this.addEmploy.controls;
  }
}
