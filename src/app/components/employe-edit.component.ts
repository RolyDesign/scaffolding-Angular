import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VALIDATION_FORMS } from './employe.const/validation-form.const';
import { Genderenum } from './employe.enum/gender.enum';
import { EmployeModel, IEmployeUpdateDTO } from './employe.model';
import { EmployService } from './employe.service';
import {
  TErrorMessageValidation,
  TValidator,
} from './employe.type/error-message-validation.type';

@Component({
  selector: 'scfld-license-edit',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.scss'],
})
export class EmployeEditComponent implements OnInit, OnDestroy {
  genderOptions = [Genderenum.female, Genderenum.male];
  editEmploy!: FormGroup;
  title = 'Edit Employ';
  validationForms = VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
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
  lastValues!: IEmployeUpdateDTO;
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
        age: [res.age, [Validators.required,Validators.min(120), Validators.max(120)]],
        work: [res.work, [Validators.required]],
        roll: [res.roll, [Validators.required]],
        gender: [res.gender, [Validators.required]],
        email: [
          res.email,
          [Validators.pattern(this.patternValidator), Validators.required],
        ],
        suspended: [res.suspended],
      });
    });

    const form = this.editEmploy;
    this.lastValues = form.value;

    this.editEmploy.valueChanges.subscribe((v) => {
      for (const key in this.lastValues) {
        if (Object.prototype.hasOwnProperty.call(this.lastValues, key)) {
          const value = this.lastValues[key as keyof IEmployeUpdateDTO];
          if (v[key] !== this.lastValues[key as keyof IEmployeUpdateDTO]) {
            this.setMessage(form.get(`${key}`), key);
          }
        }
      }
      this.lastValues = v;
    });
  }

  edit() {
    this.employeService.update(
      this.id,
      this.editEmploy.getRawValue() as EmployeModel
    );
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
    return this.editEmploy.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
