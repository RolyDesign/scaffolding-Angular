import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { DEVICE_CONFIRM_MESSAGE } from './device.const/device-confirm-message.const';
import { IDeviceGetDTO } from './device.model';
import { DeviceService } from './device.service';


@Component({
  selector: 'scfld-device-delete',
  templateUrl: './device-delete.component.html',
  styleUrls: ['./device-delete.component.scss'],
})
export class DeviceDeleteComponent {
  title = 'Device Delete';
  id: number;
  device$!: Observable<IDeviceGetDTO>;
  heads = [
    'maker',
    'model',
    'year',
    'serialNumber',
    'serviceStatus',
    'serviceStatusNote',
    'registrationPairingStartedOn',
    'registrationPairingExpiration',
    'registrationId',
    'deviceId',
  ];
  confirmMessage = DEVICE_CONFIRM_MESSAGE
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.device$ = this.deviceService.getById$(this.id);
  }

  deleteDevice() {
    this.deviceService.delete$(this.id).subscribe(res => {
     this.router.navigate(['/devices']);
    });
  }
}
