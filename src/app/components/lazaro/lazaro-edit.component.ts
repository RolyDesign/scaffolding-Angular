import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LAZARO_GENDER_ENUM, LAZARO_OPTION_ENUM } from './lazaro.enums'; 
import { LAZARO_VALIDATION_FORMS } from './lazaro.const/lazaro-validation-form.const';
import { ILazaroUpdateDTO } from './lazaro.model';
import { LazaroService } from './lazaro.service';

@Component({
  selector: 'scfld-lazaro-edit',
  templateUrl: './lazaro-edit.component.html',
  styleUrls: ['./lazaro-edit.component.scss'],
})
export class LazaroEditComponent implements OnInit, OnDestroy {
  genderOptions = [ LAZARO_GENDER_ENUM.Mele, LAZARO_GENDER_ENUM.Female ];
  optionOptions = [ LAZARO_OPTION_ENUM.opt1, LAZARO_OPTION_ENUM.opt2, LAZARO_OPTION_ENUM.opt3, LAZARO_OPTION_ENUM.opt4, LAZARO_OPTION_ENUM.opt5 ];
  editLazaro!: FormGroup;
  title = 'Edit Lazaro';
  validationForms = LAZARO_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private lazaroService: LazaroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.lazaroService.getById(this.id).subscribe((res) => {
      this.editLazaro = this.fb.group({
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
    this.lazaroService.update(
      this.id,
      this.editLazaro.getRawValue() as ILazaroUpdateDTO
    );
    this.router.navigate(['/lazaros']);
  }
  get fm() {
    return this.editLazaro.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}