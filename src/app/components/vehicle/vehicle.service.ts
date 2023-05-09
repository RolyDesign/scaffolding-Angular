import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, map, Observable, of, switchMap} from 'rxjs';
import { IVehicleCreateDTO, IVehicleGetDTO, IVehicleUpdateDTO } from './vehicle.model';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private vehicles = new BehaviorSubject<IVehicleGetDTO[]>([]);
  constructor(http: HttpClient) {}

  getAll$: Observable<IVehicleGetDTO[]> = this.vehicles.asObservable();

  getById$(id: number): Observable<IVehicleGetDTO> {
    return this.vehicles.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create$(data: IVehicleCreateDTO): Observable<any> {
    let id;
    if (this.vehicles.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.vehicles
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.vehicles.next(this.vehicles.getValue().concat(data));
    return of(EMPTY);
  }

  update$( data: IVehicleUpdateDTO, id: number ): Observable<any> {
    let list = this.vehicles.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.vehicles.next(list.concat(data));
    return of(EMPTY);
  }

  delete$(id: number): Observable<any> {
    let list = this.vehicles.getValue().filter((x) => x.id !== id);
    this.vehicles.next(list);
    return of(EMPTY);
  }
}
