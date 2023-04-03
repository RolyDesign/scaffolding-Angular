import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
 
import { PRODUCT_VALIDATION_FORMS } from './product.const/product-validation-form.const';
import { IProductCreateDTO } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'scfld-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  title = 'Create Product';
  genderOptions = [ "male", "female" ];
  optionOptions = [ "opt1", "opt2", "opt3", "opt4", "opt5" ];

 
  addProduct!: FormGroup;
  validationForms = PRODUCT_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addProduct = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(5), Validators.max(120)]],
      work: ['', Validators.required ],
      roll: ['', Validators.required ],
      gender: ['', Validators.required ],
      option: ['', Validators.required ],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
      suspended: [''],
    });
  }

  add() {
    this.productService.create(this.addProduct.getRawValue() as IProductCreateDTO);
    this.router.navigate(['/products']);
  }

  get fm() {
    return this.addProduct.controls;
  }
}
