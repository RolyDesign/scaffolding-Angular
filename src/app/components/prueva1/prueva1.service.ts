import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { IPrueva1CreateDTO, IPrueva1GetDTO, IPrueva1UpdateDTO } from './prueva1.model';

@Injectable({
  providedIn: 'root',
})
export class Prueva1Service {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private prueva1s = new BehaviorSubject<IPrueva1GetDTO[]>([]);
  constructor(http: HttpClient) {}

  getAll(): Observable<IPrueva1GetDTO[]> {
    return this.prueva1s.asObservable();
  }

  getById(id: number): Observable<IPrueva1GetDTO> {
    return this.prueva1s.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create(data: IPrueva1CreateDTO) {
    let id;
    if (this.prueva1s.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.prueva1s
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.prueva1s.next(this.prueva1s.getValue().concat(data));
  }

  update(id: number, data: IPrueva1UpdateDTO) {
    let list = this.prueva1s.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.prueva1s.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.prueva1s.getValue().filter((x) => x.id !== id);
    this.prueva1s.next(list);
  }
}
