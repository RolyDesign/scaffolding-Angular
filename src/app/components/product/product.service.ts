import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { IProductCreateDTO, IProductGetDTO, IProductUpdateDTO } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private products = new BehaviorSubject<IProductGetDTO[]>([]);
  constructor(http: HttpClient) {}

  getAll(): Observable<IProductGetDTO[]> {
    return this.products.asObservable();
  }

  getById(id: number): Observable<IProductGetDTO> {
    return this.products.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create(data: IProductCreateDTO) {
    let id;
    if (this.products.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.products
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.products.next(this.products.getValue().concat(data));
  }

  update(id: number, data: IProductUpdateDTO) {
    let list = this.products.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.products.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.products.getValue().filter((x) => x.id !== id);
    this.products.next(list);
  }
}
