import { Component} from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import {  Observable} from 'rxjs';
import { IDeviceGetDTO } from './device.model';
import { DeviceService } from './device.service';

@Component({
  selector: 'scfld-license-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent {
  title = 'Device Detail';
  id: number;
  device$!: Observable<IDeviceGetDTO>;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private router: Router
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.device$ = this.deviceService.getById$(this.id);
  }
}