import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
  , ReactiveFormsModule} from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import { VEHICLE_SERVICESTATUS_ENUM, VEHICLE_OPERATIONALSTATUS_ENUM, VEHICLE_COLOR_ENUM } from './vehicle.enums'; 
import { VEHICLE_VALIDATION_FORMS } from './vehicle.const/vehicle-validation-form.const';
import { IVehicleCreateDTO } from './vehicle.model';
import { VehicleService } from './vehicle.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PREVIEW } from './interfaces/preview';
import { VEHICLE_FONT_ICONS } from './vehicle.const/vehicle-font-icons.const';
import { ExtractBase64Service } from 'src/app/shared/services/extract-base-64.service';

    import { maxSizeFile } from 'src/app/shared/validators-forms/validator-max-size-file';
    import { typeFile } from 'src/app/shared/validators-forms/validator-type-file';
    import { VEHICLE_TYPE_FILE } from './vehicle.const/vehicle-validators-mime-type.const';

@Component({
  selector: 'scfld-vehicle-create',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule, RouterModule , FontAwesomeModule],
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.scss'],
})
export class VehicleCreateComponent implements OnInit {
  title = 'Create Vehicle';
  serviceStatusOptions = [ VEHICLE_SERVICESTATUS_ENUM.Active, VEHICLE_SERVICESTATUS_ENUM.OutOfServices, VEHICLE_SERVICESTATUS_ENUM.Decomissioned ];
  operationalStatusOptions = [ VEHICLE_OPERATIONALSTATUS_ENUM.OnService, VEHICLE_OPERATIONALSTATUS_ENUM.Parked ];
  colorOptions = [ VEHICLE_COLOR_ENUM.Black, VEHICLE_COLOR_ENUM.Silver, VEHICLE_COLOR_ENUM.Gray, VEHICLE_COLOR_ENUM.Blue, VEHICLE_COLOR_ENUM.Red, VEHICLE_COLOR_ENUM.Yellow, VEHICLE_COLOR_ENUM.Green, VEHICLE_COLOR_ENUM.White ];
  addVehicle!: FormGroup;
  validationForms = VEHICLE_VALIDATION_FORMS;
 preview = {
                              
    picture2: "",
   
    picture: "",
    }
  fontIcons = VEHICLE_FONT_ICONS;
  loading: string = '';

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private router: Router,
    private extractBase64Service: ExtractBase64Service,

  ) {}

  ngOnInit(): void {
    this.addVehicle = this.fb.group({
      maker: ['', [Validators.required, Validators.maxLength(30)]],
      model: ['', [Validators.required, Validators.maxLength(30)]],
      year: ['', [Validators.required, Validators.min(2015), Validators.max(2025)]],
      tag: ['', Validators.required ],
      vin: ['', Validators.required ],
      serviceStatus: ['', Validators.required ],
      serviceStatusNote: [''],
      operationalStatus: ['', Validators.required ],
      capacity: ['', [Validators.required, Validators.max(150)]],
      alias: ['', [Validators.required, Validators.maxLength(50)]],
      color: ['', Validators.required ],
      autonomy: ['', [Validators.required, Validators.max(30)]],
      fuelCapacity: ['', Validators.required ],
      picture2: [null, [maxSizeFile(10), typeFile(VEHICLE_TYPE_FILE.TXT)]],
      picture: [null, [maxSizeFile(10), typeFile(VEHICLE_TYPE_FILE.IMG)]],
    });
  }
    add(){
    this.vehicleService.create$(this.addVehicle.getRawValue() as IVehicleCreateDTO).subscribe(res => {
      this.router.navigate(['/vehicles']);
    });
  }


catchFile(event: any, controlName: string): void {
    const files = ['picture2',];
    const img = ['picture',];
    const file = event.target.files[0];
    this.addVehicle?.patchValue({
      [controlName]: file,
    });
    if (!this.addVehicle.get(controlName)?.valid) {
      if (files.includes(controlName)) {
        this.preview[controlName as keyof PREVIEW] = file.name;

      }
      if (img.includes(controlName)) {
        this.extractBase64Service.extractBase64(file).then((img: any) => {
          this.preview[controlName as keyof PREVIEW] = img.base;
        });
      }
    } else {
      if (files.includes(controlName)) {
        this.addVehicle?.patchValue({
          [controlName]: file.name,
        });
        this.preview[controlName as keyof PREVIEW] = file.name;
      }
      if (img.includes(controlName)) {
        this.extractBase64Service.extractBase64(file).then((img: any) => {
          this.addVehicle?.patchValue({
            [controlName]: img.base,
          });
          this.preview[controlName as keyof PREVIEW] = img.base;
        });
      }
    }
    // //  reset event changes (Being able to upload the same image in case it has been removed from the UI )
    event.target.value = '';
  }

   onRemoveFile(controlName : string){
    this.addVehicle?.get(controlName)?.patchValue(null);
     this.preview[controlName as keyof PREVIEW] = "";
  }

  get fm() {
    return this.addVehicle.controls;
  }
}
