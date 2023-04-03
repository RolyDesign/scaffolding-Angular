import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { ILazaroCreateDTO, ILazaroGetDTO, ILazaroUpdateDTO } from './lazaro.model';

@Injectable({
  providedIn: 'root',
})
export class LazaroService {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private lazaros = new BehaviorSubject<ILazaroGetDTO[]>([]);
  constructor(http: HttpClient) {}

  getAll(): Observable<ILazaroGetDTO[]> {
    return this.lazaros.asObservable();
  }

  getById(id: number): Observable<ILazaroGetDTO> {
    return this.lazaros.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create(data: ILazaroCreateDTO) {
    let id;
    if (this.lazaros.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.lazaros
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.lazaros.next(this.lazaros.getValue().concat(data));
  }

  update(id: number, data: ILazaroUpdateDTO) {
    let list = this.lazaros.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.lazaros.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.lazaros.getValue().filter((x) => x.id !== id);
    this.lazaros.next(list);
  }
}
