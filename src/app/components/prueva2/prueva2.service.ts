import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { IPrueva2CreateDTO, IPrueva2GetDTO, IPrueva2UpdateDTO } from './prueva2.model';

@Injectable({
  providedIn: 'root',
})
export class Prueva2Service {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private prueva2s = new BehaviorSubject<IPrueva2GetDTO[]>([]);
  constructor(http: HttpClient) {}

  getAll(): Observable<IPrueva2GetDTO[]> {
    return this.prueva2s.asObservable();
  }

  getById(id: number): Observable<IPrueva2GetDTO> {
    return this.prueva2s.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create(data: IPrueva2CreateDTO) {
    let id;
    if (this.prueva2s.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.prueva2s
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.prueva2s.next(this.prueva2s.getValue().concat(data));
  }

  update(id: number, data: IPrueva2UpdateDTO) {
    let list = this.prueva2s.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.prueva2s.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.prueva2s.getValue().filter((x) => x.id !== id);
    this.prueva2s.next(list);
  }
}
