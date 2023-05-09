import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, map, Observable, of, switchMap} from 'rxjs';
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

  getAll$: Observable<ILicenseGetDTO[]> = this.licenses.asObservable();

  getById$(id: string): Observable<ILicenseGetDTO> {
    return this.licenses.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create$(data: ILicenseCreateDTO): Observable<any> {
    let id;
    if (this.licenses.getValue().length == 0) {
      id = "guid:1";
    } else {
      id = `guid:${Number(
        this.licenses
          .getValue()
          .sort((a, b) => (a.id.toUpperCase() < b.id.toUpperCase())
            ? -1 : (a.id.toUpperCase() > b.id.toUpperCase())
            ? 1 : 0)
          .reverse()[0].id
          .split(":")[1]) + 1
      }`
    }
    data.id = id;
    this.licenses.next(this.licenses.getValue().concat(data));
    return of(EMPTY);
  }

  update$( data: ILicenseUpdateDTO, id: string ): Observable<any> {
    let list = this.licenses.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.licenses.next(list.concat(data));
    return of(EMPTY);
  }

  delete$(id: string): Observable<any> {
    let list = this.licenses.getValue().filter((x) => x.id !== id);
    this.licenses.next(list);
    return of(EMPTY);
  }
}
