import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DEVICE_SERVICESTATUS_ENUM } from './device.enums'; 
import { DEVICE_VALIDATION_FORMS } from './device.const/device-validation-form.const';
import { IDeviceUpdateDTO } from './device.model';
import { DeviceService } from './device.service';

@Component({
  selector: 'scfld-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.scss'],
})
export class DeviceEditComponent implements OnInit, OnDestroy {
  serviceStatusOptions = [ DEVICE_SERVICESTATUS_ENUM.active, DEVICE_SERVICESTATUS_ENUM.out_of_service, DEVICE_SERVICESTATUS_ENUM.decommissioned ];
  editDevice!: FormGroup;
  title = 'Edit Device';
  validationForms = DEVICE_VALIDATION_FORMS;
  id = Number(this.route.snapshot.paramMap.get('id'));
  sub!: Subscription;
    constructor(
    private fb: FormBuilder,
    private deviceService: DeviceService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
   this.editDevice = this.fb.group({
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
    this.sub = this.deviceService.getById$(this.id).subscribe((res) => {
        this,this.editDevice.setValue({
            maker: res.maker,
            model: res.model,
            year: res.year,
            serialNumber: res.serialNumber,
            serviceStatus: res.serviceStatus,
            serviceStatusNote: res.serviceStatusNote,
            registrationPairingStartedOn: res.registrationPairingStartedOn,
            registrationPairingExpiration: res.registrationPairingExpiration,
            registrationId: res.registrationId,
            deviceId: res.deviceId,
          })
    });
  }

  edit() {
    this.deviceService.update$( this.editDevice.getRawValue() as IDeviceUpdateDTO,this.id)
    .subscribe(res => {
     this.router.navigate(['/devices']);
    });
  }
  get fm() {
    return this.editDevice.controls;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}