import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LAZARO_GENDER_ENUM, LAZARO_OPTION_ENUM } from './lazaro.enums'; 
import { LAZARO_VALIDATION_FORMS } from './lazaro.const/lazaro-validation-form.const';
import { ILazaroCreateDTO } from './lazaro.model';
import { LazaroService } from './lazaro.service';

@Component({
  selector: 'scfld-lazaro-create',
  templateUrl: './lazaro-create.component.html',
  styleUrls: ['./lazaro-create.component.scss'],
})
export class LazaroCreateComponent implements OnInit {
  title = 'Create Lazaro';
  genderOptions = [ LAZARO_GENDER_ENUM.Mele, LAZARO_GENDER_ENUM.Female ];
  optionOptions = [ LAZARO_OPTION_ENUM.opt1, LAZARO_OPTION_ENUM.opt2, LAZARO_OPTION_ENUM.opt3, LAZARO_OPTION_ENUM.opt4, LAZARO_OPTION_ENUM.opt5 ];

 
  addLazaro!: FormGroup;
  validationForms = LAZARO_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private lazaroService: LazaroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addLazaro = this.fb.group({
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
    this.lazaroService.create(this.addLazaro.getRawValue() as ILazaroCreateDTO);
    this.router.navigate(['/lazaros']);
  }

  get fm() {
    return this.addLazaro.controls;
  }
}
