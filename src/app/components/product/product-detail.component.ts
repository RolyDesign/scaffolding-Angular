import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Observable} from 'rxjs';
import { IProductGetDTO } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  title = 'Product Detail';
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
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product$ = this.productService.getById(this.id);
  }
}