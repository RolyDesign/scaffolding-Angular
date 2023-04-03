import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PRUEVA_GENDER_ENUM, PRUEVA_OPTION_ENUM } from './prueva.enums'; 
import { PRUEVA_VALIDATION_FORMS } from './prueva.const/prueva-validation-form.const';
import { IPruevaCreateDTO } from './prueva.model';
import { PruevaService } from './prueva.service';

@Component({
  selector: 'scfld-prueva-create',
  templateUrl: './prueva-create.component.html',
  styleUrls: ['./prueva-create.component.scss'],
})
export class PruevaCreateComponent implements OnInit {
  title = 'Create Prueva';
  genderOptions = [ PRUEVA_GENDER_ENUM.Mele, PRUEVA_GENDER_ENUM.Female ];
  optionOptions = [ PRUEVA_OPTION_ENUM.opt1, PRUEVA_OPTION_ENUM.opt2, PRUEVA_OPTION_ENUM.opt3, PRUEVA_OPTION_ENUM.opt4, PRUEVA_OPTION_ENUM.opt5 ];

 
  addPrueva!: FormGroup;
  validationForms = PRUEVA_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private pruevaService: PruevaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addPrueva = this.fb.group({
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
    this.pruevaService.create(this.addPrueva.getRawValue() as IPruevaCreateDTO);
    this.router.navigate(['/pruevas']);
  }

  get fm() {
    return this.addPrueva.controls;
  }
}
