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

  private employes = new BehaviorSubject<EmployeModel[]>([]);
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

  update(id: number, data: EmployeModel) {
    let list = this.employes.getValue().filter((x) => x.id !== id);
    data.id = id;
    this.employes.next(list.concat(data));
  }

  delete(id: number) {
    let list = this.employes.getValue().filter((x) => x.id !== id);
    this.employes.next(list);
  }
}
