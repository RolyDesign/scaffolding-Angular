import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
 
import { PRODUCT_VALIDATION_FORMS } from './product.const/product-validation-form.const';
import { IProductUpdateDTO } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'scfld-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit, OnDestroy {
  genderOptions = [ "male", "female" ];
  optionOptions = [ "opt1", "opt2", "opt3", "opt4", "opt5" ];
  editProduct!: FormGroup;
  title = 'Edit Product';
  validationForms = PRODUCT_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.productService.getById(this.id).subscribe((res) => {
      this.editProduct = this.fb.group({
        name: [res.name, [Validators.required, Validators.minLength(5)]],
        lastName: [res.lastName, [Validators.required, Validators.minLength(5)]],
        age: [res.age, [Validators.required, Validators.min(5), Validators.max(120)]],
        work: [res.work, Validators.required ],
        roll: [res.roll, Validators.required ],
        gender: [res.gender, Validators.required ],
        option: [res.option, Validators.required ],
        email: [res.email, [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
        suspended: [res.suspended],
      });
    });
  }

  edit() {
    this.productService.update(
      this.id,
      this.editProduct.getRawValue() as IProductUpdateDTO
    );
    this.router.navigate(['/products']);
  }
  get fm() {
    return this.editProduct.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}