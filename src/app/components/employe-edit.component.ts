import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subscription } from 'rxjs';
import { EMPLOY_VALIDATION_FORMS } from './employe.const/employ-validation-form.const';
import { EployGenderEnum } from './employe.enum/employ-gender.enum';
import { EmployeModel, IEmployeUpdateDTO } from './employe.model';
import { EmployService } from './employe.service';
import { TEmployErrorMessageValidation } from './employe.type/employ-error-message-validation.type';
import { TEmployValidator } from './employe.type/employ-validator.type';

@Component({
  selector: 'scfld-license-edit',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.scss'],
})
export class EmployeEditComponent implements OnInit, OnDestroy {
  genderOptions = [EployGenderEnum.female, EployGenderEnum.male];
  editEmploy!: FormGroup;
  title = 'Edit Employ';
  validationForms = EMPLOY_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  patternValidator =
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";

  errorMessage: TEmployErrorMessageValidation = {
    name: '',
    lastName: '',
    age: '',
    work: '',
    roll: '',
    gender: '',
    email: '',
  };

  lastValue!: IEmployeUpdateDTO;
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
          [Validators.required, Validators.min(120), Validators.max(120)],
        ],
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
    this.lastValue = form.value;

    form.valueChanges.subscribe((v) => {
      for (const key in this.lastValue) {
        if (Object.prototype.hasOwnProperty.call(this.lastValue, key)) {
          if (v[key] !== this.lastValue[key as keyof IEmployeUpdateDTO]) {
            this.setMessage(form.get(`${key}`), key);
          }
        }
      }
      this.lastValue = v;
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
        this.errorMessage[key as keyof TEmployErrorMessageValidation] =
          Object.keys(c.errors)
            .map((key) => this.validationForms[key as keyof TEmployValidator])
            .join(' ');
      } else {
        this.errorMessage[key as keyof TEmployErrorMessageValidation] = '';
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
