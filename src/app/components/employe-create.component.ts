import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeModel } from './employe.model';
import { EmployService } from './employe.service';
import { Genderenum } from './employe.enum/gender.enum';
import { VALIDATION_FORMS } from '../shared/validation.const';

@Component({
  selector: 'scfld-employe-create',
  templateUrl: './employe-create.component.html',
  styleUrls: ['./employe-create.component.scss'],
})
export class EmployeCreateComponent implements OnInit {
  genderOptions = [Genderenum.female, Genderenum.male];
  addEmploy!: FormGroup;
  title = 'Create Employ'
  validationForms =VALIDATION_FORMS

  constructor(
    private fb: FormBuilder,
    private employeService: EmployService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addEmploy = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.max(120)]],
      work: ['', [Validators.required]],
      roll: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      suspended: [false],
    });
  }

  add() {
    this.employeService.create(this.addEmploy.getRawValue() as EmployeModel);
    this.router.navigate(['/employes']);
  }
}
