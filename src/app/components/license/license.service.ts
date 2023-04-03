import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { ILicenseCreateDTO, ILicenseGetDTO, ILicenseUpdateDTO } from './license.model';

@Injectable({
  providedIn: 'root',
})
export class LicenseService {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private licenses = new BehaviorSubject<ILicenseGetDTO[]>([]);
  constructor(http: HttpClient) {}

  getAll(): Observable<ILicenseGetDTO[]> {
    return this.licenses.asObservable();
  }

  getById(id: number): Observable<ILicenseGetDTO> {
    return this.licenses.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create(data: ILicenseCreateDTO) {
    let id;
    if (this.licenses.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.licenses
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.licenses.next(this.licenses.getValue().concat(data));
  }

  update(id: number, data: ILicenseUpdateDTO) {
    let list = this.licenses.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.licenses.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.licenses.getValue().filter((x) => x.id !== id);
    this.licenses.next(list);
  }
}
