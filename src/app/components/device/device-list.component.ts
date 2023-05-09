import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeviceGetDTO } from './device.model';
import { DeviceService } from './device.service';

@Component({
  selector: 'scfld-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  title = 'Devices';
  listDevices$!: Observable<IDeviceGetDTO[]>;
  headsTable = [
    'Maker',
    'Model',
    'Year',
    'SerialNumber',
    'Service Status',
    'Notes',
    'RegistrationPairingStartedOn',
    'RegistrationPairingExpiration',
    'RegistrationId',
    'DeviceId ',
  ];
 
  constructor(private deviceService: DeviceService) {
    this.listDevices$ = this.deviceService.getAll$;
  }
  ngOnInit(): void {}
}