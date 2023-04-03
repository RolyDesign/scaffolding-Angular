import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VEHICULO_GENDER_ENUM } from './vehiculo.enums'; 
import { VEHICULO_VALIDATION_FORMS } from './vehiculo.const/vehiculo-validation-form.const';
import { IVehiculoUpdateDTO } from './vehiculo.model';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'scfld-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.scss'],
})
export class VehiculoEditComponent implements OnInit, OnDestroy {
  genderOptions = [ VEHICULO_GENDER_ENUM.Mele, VEHICULO_GENDER_ENUM.Female ];
  optionOptions = [ "opt1", "opt2", "opt3", "opt4", "opt5" ];
  editVehiculo!: FormGroup;
  title = 'Edit Vehiculo';
  validationForms = VEHICULO_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.vehiculoService.getById(this.id).subscribe((res) => {
      this.editVehiculo = this.fb.group({
        name: [res.name, [Validators.required, Validators.minLength(5)]],
        lastName: [res.lastName, [Validators.required, Validators.minLength(5)]],
        age: [res.age, [Validators.required, Validators.min(5), Validators.max(120)]],
        work: [res.work, Validators.required ],
        roll: [res.roll, Validators.required ],
        gender: [res.gender, Validators.required ],
        option: [res.option, Validators.required ],
        email: [res.email, [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"), Validators.email]],
        suspended: [res.suspended],
      });
    });
  }

  edit() {
    this.vehiculoService.update(
      this.id,
      this.editVehiculo.getRawValue() as IVehiculoUpdateDTO
    );
    this.router.navigate(['/vehiculos']);
  }
  get fm() {
    return this.editVehiculo.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}