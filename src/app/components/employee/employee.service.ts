import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployeeCreateDTO, IEmployeeGetDTO, IEmployeeUpdateDTO } from './employee.model';
import { HttpService } from 'src/app/shared/services/http-generic-service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService extends HttpService<IEmployeeCreateDTO, IEmployeeGetDTO, IEmployeeUpdateDTO, number> {
  constructor(http: HttpClient) {
    super(http, `${environment.API_URL}employees` );
   }
}
