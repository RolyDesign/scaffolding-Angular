import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
  } from '@angular/forms';
import { Router  } from '@angular/router';
import { DEVICE_SERVICESTATUS_ENUM } from './device.enums'; 
import { DEVICE_VALIDATION_FORMS } from './device.const/device-validation-form.const';
import { IDeviceCreateDTO } from './device.model';
import { DeviceService } from './device.service';



@Component({
  selector: 'scfld-device-create',
    templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss'],
})
export class DeviceCreateComponent implements OnInit {
  title = 'Create Device';
  serviceStatusOptions = [ DEVICE_SERVICESTATUS_ENUM.active, DEVICE_SERVICESTATUS_ENUM.out_of_service, DEVICE_SERVICESTATUS_ENUM.decommissioned ];
  addDevice!: FormGroup;
  validationForms = DEVICE_VALIDATION_FORMS;

  constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.addDevice = this.fb.group({
      maker: ['', Validators.required ],
      model: ['', Validators.required ],
      year: ['', [Validators.required, Validators.min(new Date().getFullYear() - 10), Validators.max(new Date().getFullYear() + 1)]],
      serialNumber: ['', Validators.required ],
      serviceStatus: ['', Validators.required ],
      serviceStatusNote: [''],
      registrationPairingStartedOn: [''],
      registrationPairingExpiration: [''],
      registrationId: [''],
      deviceId: [''],
    });
  }
    add() {
    this.deviceService.create$(this.addDevice.getRawValue() as IDeviceCreateDTO).subscribe(res => {
      this.router.navigate(['/devices']);
    });
  }

  get fm() {
    return this.addDevice.controls;
  }
}
