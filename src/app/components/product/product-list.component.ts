import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductGetDTO } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'scfld-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  title = 'Products';
  listProducts$!: Observable<IProductGetDTO[]>;
  headsTable = [
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

  constructor(private productService: ProductService) {
    this.listProducts$ = this.productService.getAll();
  }
  ngOnInit(): void {}
}
