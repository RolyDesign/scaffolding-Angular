import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRUEVA1_GENDER_ENUM, PRUEVA1_OPTION_ENUM } from './prueva1.enums'; 
import { PRUEVA1_VALIDATION_FORMS } from './prueva1.const/prueva1-validation-form.const';
import { IPrueva1UpdateDTO } from './prueva1.model';
import { Prueva1Service } from './prueva1.service';

@Component({
  selector: 'scfld-prueva1-edit',
  templateUrl: './prueva1-edit.component.html',
  styleUrls: ['./prueva1-edit.component.scss'],
})
export class Prueva1EditComponent implements OnInit, OnDestroy {
  genderOptions = [ PRUEVA1_GENDER_ENUM.Mele, PRUEVA1_GENDER_ENUM.Female ];
  optionOptions = [ PRUEVA1_OPTION_ENUM.opt1, PRUEVA1_OPTION_ENUM.opt2, PRUEVA1_OPTION_ENUM.opt3, PRUEVA1_OPTION_ENUM.opt4, PRUEVA1_OPTION_ENUM.opt5 ];
  editPrueva1!: FormGroup;
  title = 'Edit Prueva1';
  validationForms = PRUEVA1_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private prueva1Service: Prueva1Service,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.prueva1Service.getById(this.id).subscribe((res) => {
      this.editPrueva1 = this.fb.group({
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
    this.prueva1Service.update(
      this.id,
      this.editPrueva1.getRawValue() as IPrueva1UpdateDTO
    );
    this.router.navigate(['/prueva1s']);
  }
  get fm() {
    return this.editPrueva1.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}