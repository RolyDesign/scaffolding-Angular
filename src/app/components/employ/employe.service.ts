import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { EployGenderEnum } from './employe.enum/employ-gender.enum';
import { IEmployeCreateDTO, IEmployeGetDTO, IEmployeUpdateDTO } from './employe.model';

@Injectable({
  providedIn: 'root',
})
export class EmployService {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private employes = new BehaviorSubject<IEmployeGetDTO[]>([
    {
      id: 1,
      name: 'Rolando',
      lastName: 'Gonzalez',
      gender: EployGenderEnum.male,
      age: 33,
      email: 'rgonz@gmail.com',
      roll: 'Admin',
      suspended: false,
      work: 'Programmer',
    },
  ]);
  constructor(http: HttpClient) {}

  getAll(): Observable<IEmployeGetDTO[]> {
    return this.employes.asObservable();
  }

  getById(id: number): Observable<IEmployeGetDTO> {
    return this.employes.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }

  create(data: IEmployeCreateDTO) {
    let id;
    if (this.employes.getValue().length == 0) {
      id = 1;
    } else {
      id =
        this.employes
          .getValue()
          .sort((a, b) => a.id - b.id)
          .reverse()[0].id + 1;
    }
    data.id = id;
    this.employes.next(this.employes.getValue().concat(data));
  }

  update(id: number, data: IEmployeUpdateDTO) {
    let list = this.employes.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.employes.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.employes.getValue().filter((x) => x.id !== id);
    this.employes.next(list);
  }
}
