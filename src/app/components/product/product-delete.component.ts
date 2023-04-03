import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PRODUCT_CONFIRM_MESSAGE } from './product.const/product-confirm-message.const';
import { IProductGetDTO } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'scfld-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent {
  title = 'Product Delete';
  id: number;
  product$!: Observable<IProductGetDTO>;
  heads = [
    'name',
    'lastName',
    'age',
    'work',
    'roll',
    'gender',
    'option',
    'email',
    'suspended',
  ];
  confirmMessage = PRODUCT_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.productService.getById(this.id);
  }

  deleteProduct() {
    this.productService.delete(this.id);
    this.router.navigate(['/products']);
  }
}
