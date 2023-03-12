import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeModel, IEmployeCreateDTO } from './employe.model';
import { EmployService } from './employe.service';
import { Genderenum } from './employe.enum/gender.enum';
import {
  TErrorMessageValidation,
  TValidator,
} from './employe.type/error-message-validation.type';
import { VALIDATION_FORMS } from './employe.const/validation-form.const';


@Component({
  selector: 'scfld-employe-create',
  templateUrl: './employe-create.component.html',
  styleUrls: ['./employe-create.component.scss'],
})
export class EmployeCreateComponent implements OnInit {
  genderOptions = [Genderenum.female, Genderenum.male];
  addEmploy!: FormGroup;
  title = 'Create Employ';
  validationForms = VALIDATION_FORMS;
  patternValidator =
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
  errorMessage: TErrorMessageValidation = {
    name: '',
    lastName: '',
    age: '',
    work: '',
    roll: '',
    gender: '',
    email: '',
  };
  values!: IEmployeCreateDTO;

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
        [Validators.pattern(this.patternValidator), Validators.required],
      ],
      suspended: [false],
    });
    const form = this.addEmploy;
    this.values = form.value;

    this.addEmploy.valueChanges.subscribe((v) => {
      for (const key in this.values) {
        if (Object.prototype.hasOwnProperty.call(this.values, key)) {
          const value = this.values[key as keyof IEmployeCreateDTO];
          if (v[key] !== this.values[key as keyof IEmployeCreateDTO]) {
            this.setMessage(form.get(`${key}`), key);
          }
        }
      }
      this.values = v;
    });
  }

  add() {
    this.employeService.create(this.addEmploy.getRawValue() as EmployeModel);
    this.router.navigate(['/employes']);
  }

  setMessage(c: AbstractControl | null, key: string): void {
    if (c !== null) {
      if ((c.touched || c.dirty) && c.errors) {
        this.errorMessage[key as keyof TErrorMessageValidation] = Object.keys(
          c.errors
        )
          .map((key) => this.validationForms[key as keyof TValidator])
          .join(' ');
      } else {
        this.errorMessage[key as keyof TErrorMessageValidation] = '';
      }
    }
  }

  get fm() {
    return this.addEmploy.controls;
  }
}
