import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { IPruevaCreateDTO, IPruevaGetDTO, IPruevaUpdateDTO } from './prueva.model';

@Injectable({
  providedIn: 'root',
})
export class PruevaService {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private pruevas = new BehaviorSubject<IPruevaGetDTO[]>([]);
  constructor(http: HttpClient) {}

  getAll(): Observable<IPruevaGetDTO[]> {
    return this.pruevas.asObservable();
  }

  getById(id: number): Observable<IPruevaGetDTO> {
    return this.pruevas.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create(data: IPruevaCreateDTO) {
    let id;
    if (this.pruevas.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.pruevas
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.pruevas.next(this.pruevas.getValue().concat(data));
  }

  update(id: number, data: IPruevaUpdateDTO) {
    let list = this.pruevas.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.pruevas.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.pruevas.getValue().filter((x) => x.id !== id);
    this.pruevas.next(list);
  }
}
