import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRUEVA_GENDER_ENUM, PRUEVA_OPTION_ENUM } from './prueva.enums'; 
import { PRUEVA_VALIDATION_FORMS } from './prueva.const/prueva-validation-form.const';
import { IPruevaUpdateDTO } from './prueva.model';
import { PruevaService } from './prueva.service';

@Component({
  selector: 'scfld-prueva-edit',
  templateUrl: './prueva-edit.component.html',
  styleUrls: ['./prueva-edit.component.scss'],
})
export class PruevaEditComponent implements OnInit, OnDestroy {
  genderOptions = [ PRUEVA_GENDER_ENUM.Mele, PRUEVA_GENDER_ENUM.Female ];
  optionOptions = [ PRUEVA_OPTION_ENUM.opt1, PRUEVA_OPTION_ENUM.opt2, PRUEVA_OPTION_ENUM.opt3, PRUEVA_OPTION_ENUM.opt4, PRUEVA_OPTION_ENUM.opt5 ];
  editPrueva!: FormGroup;
  title = 'Edit Prueva';
  validationForms = PRUEVA_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private pruevaService: PruevaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.pruevaService.getById(this.id).subscribe((res) => {
      this.editPrueva = this.fb.group({
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
    this.pruevaService.update(
      this.id,
      this.editPrueva.getRawValue() as IPruevaUpdateDTO
    );
    this.router.navigate(['/pruevas']);
  }
  get fm() {
    return this.editPrueva.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}