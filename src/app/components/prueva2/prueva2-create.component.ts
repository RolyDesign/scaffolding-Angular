import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PRUEVA2_GENDER_ENUM, PRUEVA2_OPTION_ENUM } from './prueva2.enums'; 
import { PRUEVA2_VALIDATION_FORMS } from './prueva2.const/prueva2-validation-form.const';
import { IPrueva2CreateDTO } from './prueva2.model';
import { Prueva2Service } from './prueva2.service';

@Component({
  selector: 'scfld-prueva2-create',
  templateUrl: './prueva2-create.component.html',
  styleUrls: ['./prueva2-create.component.scss'],
})
export class Prueva2CreateComponent implements OnInit {
  title = 'Create Prueva2';
  genderOptions = [ PRUEVA2_GENDER_ENUM.Mele, PRUEVA2_GENDER_ENUM.Female ];
  optionOptions = [ PRUEVA2_OPTION_ENUM.opt1, PRUEVA2_OPTION_ENUM.opt2, PRUEVA2_OPTION_ENUM.opt3, PRUEVA2_OPTION_ENUM.opt4, PRUEVA2_OPTION_ENUM.opt5 ];

 
  addPrueva2!: FormGroup;
  validationForms = PRUEVA2_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private prueva2Service: Prueva2Service,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addPrueva2 = this.fb.group({
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
    this.prueva2Service.create(this.addPrueva2.getRawValue() as IPrueva2CreateDTO);
    this.router.navigate(['/prueva2s']);
  }

  get fm() {
    return this.addPrueva2.controls;
  }
}
