import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PRUEVA1_GENDER_ENUM, PRUEVA1_OPTION_ENUM } from './prueva1.enums'; 
import { PRUEVA1_VALIDATION_FORMS } from './prueva1.const/prueva1-validation-form.const';
import { IPrueva1CreateDTO } from './prueva1.model';
import { Prueva1Service } from './prueva1.service';

@Component({
  selector: 'scfld-prueva1-create',
  templateUrl: './prueva1-create.component.html',
  styleUrls: ['./prueva1-create.component.scss'],
})
export class Prueva1CreateComponent implements OnInit {
  title = 'Create Prueva1';
  genderOptions = [ PRUEVA1_GENDER_ENUM.Mele, PRUEVA1_GENDER_ENUM.Female ];
  optionOptions = [ PRUEVA1_OPTION_ENUM.opt1, PRUEVA1_OPTION_ENUM.opt2, PRUEVA1_OPTION_ENUM.opt3, PRUEVA1_OPTION_ENUM.opt4, PRUEVA1_OPTION_ENUM.opt5 ];

 
  addPrueva1!: FormGroup;
  validationForms = PRUEVA1_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private prueva1Service: Prueva1Service,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addPrueva1 = this.fb.group({
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
    this.prueva1Service.create(this.addPrueva1.getRawValue() as IPrueva1CreateDTO);
    this.router.navigate(['/prueva1s']);
  }

  get fm() {
    return this.addPrueva1.controls;
  }
}
