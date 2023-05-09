import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDeviceCreateDTO, IDeviceGetDTO, IDeviceUpdateDTO } from './device.model';
import { HttpService } from 'src/app/shared/services/http-generic-service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class DeviceService extends HttpService<IDeviceCreateDTO, IDeviceGetDTO, IDeviceUpdateDTO, number> {
  constructor(http: HttpClient) {
    super(http, `${environment.API_URL}devices` );
   }
}
