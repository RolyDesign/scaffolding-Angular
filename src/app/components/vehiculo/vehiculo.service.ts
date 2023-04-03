import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { IVehiculoCreateDTO, IVehiculoGetDTO, IVehiculoUpdateDTO } from './vehiculo.model';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private vehiculos = new BehaviorSubject<IVehiculoGetDTO[]>([]);
  constructor(http: HttpClient) {}

  getAll(): Observable<IVehiculoGetDTO[]> {
    return this.vehiculos.asObservable();
  }

  getById(id: number): Observable<IVehiculoGetDTO> {
    return this.vehiculos.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create(data: IVehiculoCreateDTO) {
    let id;
    if (this.vehiculos.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.vehiculos
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.vehiculos.next(this.vehiculos.getValue().concat(data));
  }

  update(id: number, data: IVehiculoUpdateDTO) {
    let list = this.vehiculos.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.vehiculos.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.vehiculos.getValue().filter((x) => x.id !== id);
    this.vehiculos.next(list);
  }
}
