import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRUEVA2_GENDER_ENUM, PRUEVA2_OPTION_ENUM } from './prueva2.enums'; 
import { PRUEVA2_VALIDATION_FORMS } from './prueva2.const/prueva2-validation-form.const';
import { IPrueva2UpdateDTO } from './prueva2.model';
import { Prueva2Service } from './prueva2.service';

@Component({
  selector: 'scfld-prueva2-edit',
  templateUrl: './prueva2-edit.component.html',
  styleUrls: ['./prueva2-edit.component.scss'],
})
export class Prueva2EditComponent implements OnInit, OnDestroy {
  genderOptions = [ PRUEVA2_GENDER_ENUM.Mele, PRUEVA2_GENDER_ENUM.Female ];
  optionOptions = [ PRUEVA2_OPTION_ENUM.opt1, PRUEVA2_OPTION_ENUM.opt2, PRUEVA2_OPTION_ENUM.opt3, PRUEVA2_OPTION_ENUM.opt4, PRUEVA2_OPTION_ENUM.opt5 ];
  editPrueva2!: FormGroup;
  title = 'Edit Prueva2';
  validationForms = PRUEVA2_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private prueva2Service: Prueva2Service,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.prueva2Service.getById(this.id).subscribe((res) => {
      this.editPrueva2 = this.fb.group({
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
    this.prueva2Service.update(
      this.id,
      this.editPrueva2.getRawValue() as IPrueva2UpdateDTO
    );
    this.router.navigate(['/prueva2s']);
  }
  get fm() {
    return this.editPrueva2.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}