import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { VEHICULO_GENDER_ENUM } from './vehiculo.enums'; 
import { VEHICULO_VALIDATION_FORMS } from './vehiculo.const/vehiculo-validation-form.const';
import { IVehiculoCreateDTO } from './vehiculo.model';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'scfld-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.scss'],
})
export class VehiculoCreateComponent implements OnInit {
  title = 'Create Vehiculo';
  genderOptions = [ VEHICULO_GENDER_ENUM.Mele, VEHICULO_GENDER_ENUM.Female ];
  optionOptions = [ "opt1", "opt2", "opt3", "opt4", "opt5" ];

 
  addVehiculo!: FormGroup;
  validationForms = VEHICULO_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addVehiculo = this.fb.group({
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
    this.vehiculoService.create(this.addVehiculo.getRawValue() as IVehiculoCreateDTO);
    this.router.navigate(['/vehiculos']);
  }

  get fm() {
    return this.addVehiculo.controls;
  }
}
