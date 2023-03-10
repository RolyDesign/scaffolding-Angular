import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, map, Observable, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeModel } from './employe.model';
import { Genderenum } from './employe.enum/gender.enum';

@Injectable({
  providedIn: 'root',
})
export class EmployService {
  /**
   * Sustituir data en memoria y metodos por logica real
   */

  private employes = new BehaviorSubject<EmployeModel[]>([
    {
      id: 1,
      name: 'Ana',
      lastName: 'Garcia',
      age: 25,
      work: 'Disenados',
      roll: 'Empleado',
      gender: Genderenum.female,
      suspended: false,
    },
    {
      id: 2,
      name: 'Pedro',
      lastName: 'Jimenez',
      age: 40,
      work: 'Desarrolador',
      roll: 'Admin',
      gender: Genderenum.male,
      suspended: true,
    },
    {
      id: 3,
      name: 'Lazaro',
      lastName: 'Gonzalez',
      age: 38,
      work: 'Desarrollador',
      roll: 'SEO',
      gender: Genderenum.male,
      suspended: false,
    },
    {
      id: 4,
      name: 'Nancy',
      lastName: 'Rodriguez',
      age: 50,
      work: 'Limpiadora',
      roll: 'employe',
      gender: Genderenum.female,
      suspended: false,
    },
    {
      id: 5,
      name: 'Barbara',
      lastName: 'Gonzalez',
      age: 35,
      work: 'Desarrolador',
      roll: 'Empleado',
      gender: Genderenum.female,
      suspended: false,
    },
  ]);
  constructor(http: HttpClient) {}

  getAll(): Observable<EmployeModel[]> {
    return this.employes.asObservable();
  }
  getById(id: number): Observable<EmployeModel> {
    return this.employes.pipe(
      map((r) => r.filter((r) => r.id === id)),
      switchMap((r) => r.map((r) => r))
    );
  }
  create(data: EmployeModel) {
    this.employes.next(this.employes.getValue().concat(data));
  }
  update(id: number) {}
  delete(id: number) {}
}
