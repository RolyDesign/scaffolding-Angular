import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
  } from '@angular/forms';
import { Router  } from '@angular/router';
 
import { EMPLOYEE_VALIDATION_FORMS } from './employee.const/employee-validation-form.const';
import { IEmployeeCreateDTO } from './employee.model';
import { EmployeeService } from './employee.service';

import { PREVIEW } from './interfaces/preview';
import { EMPLOYEE_FONT_ICONS } from './employee.const/employee-font-icons.const';
import { EMPTY, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ExtractBase64Service } from 'src/app/shared/services/extract-base-64.service';
import { ImgService } from 'src/app/shared/services/img.service';
import { FileService } from 'src/app/shared/services/file.service';

    import { maxSizeFile } from 'src/app/shared/validators-forms/validator-max-size-file';
    import { typeFile } from 'src/app/shared/validators-forms/validator-type-file';
    import { EMPLOYEE_TYPE_FILE } from './employee.const/employee-validators-mime-type.const';

@Component({
  selector: 'scfld-employee-create',
    templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
  title = 'Create Employee';
  addEmployee!: FormGroup;
  validationForms = EMPLOYEE_VALIDATION_FORMS;
 preview = {
        
    avatar: "",
   
    thumbnail: "",
   
    contract: "",
   
    cv: "",
    }
  fontIcons = EMPLOYEE_FONT_ICONS;
  loading: string = '';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private imgService : ImgService,
    private extractBase64Service: ExtractBase64Service,
    private fileService : FileService,

  ) {}

  ngOnInit(): void {
    this.addEmployee = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      avatar: [null, [maxSizeFile(10), typeFile(EMPLOYEE_TYPE_FILE.IMG)]],
      thumbnail: [null, [maxSizeFile(10), typeFile(EMPLOYEE_TYPE_FILE.IMG)]],
      contract: [null, [maxSizeFile(10), typeFile(EMPLOYEE_TYPE_FILE.TXT)]],
      cv: [null, [maxSizeFile(10), typeFile(EMPLOYEE_TYPE_FILE.TXT)]],
    });
  }
  
   add() {
    this.employeeService
    .create$(this.addEmployee.getRawValue() as IEmployeeCreateDTO)
    .subscribe( () => this.router.navigate(['/employees']));
  }
 catchFile(event: any, controlName: string): void {
    const files = ['contract','cv',];
    const img = ['avatar','thumbnail',];
    const file = event.target.files[0];
    this.addEmployee?.patchValue({
      [controlName]: file,
    });
    if (!this.addEmployee.get(controlName)?.valid) {
      if(files.includes(controlName)){
        this.preview[controlName as keyof PREVIEW] = file.name;
      }
      if(img.includes(controlName)){
        this.extractBase64Service.extractBase64(file).then((img: any) => {
          this.preview[controlName as keyof PREVIEW] = img.base;
        });
      }
    } else {
      if(files.includes(controlName)){
        this.loading = controlName
        const formFile = new FormData();
        //param name in append method is the name del field in dto of api
        formFile.append("file", this.addEmployee?.get(controlName)?.value);
        this.fileService.addFile$(formFile).pipe(
          catchError((err: HttpErrorResponse) => {
            //Handle error if fail request
            this.loading = '';
            this.addEmployee?.patchValue({
              [controlName]: null,
            });
            this.preview[controlName as keyof PREVIEW] = '';
            return EMPTY
          })
        ).subscribe(
          res => {
            this.addEmployee?.patchValue({
              [controlName]: res,
            });
            this.loading = '';
            this.preview[controlName as keyof PREVIEW] = file.name;
          }
          )
      }
      if(img.includes(controlName)){
        this.loading = controlName
        const formImg = new FormData();
        //param name in append method is the name del field in dto of api
        formImg.append("picture", this.addEmployee?.get(controlName)?.value);
        this.imgService.addImg$(formImg).pipe(
          catchError((err: HttpErrorResponse) => {
            //Handle error if fail request
            this.loading = '';
            this.addEmployee?.patchValue({
              [controlName]: null,
            });
            this.preview[controlName as keyof PREVIEW] = '';
            return EMPTY
          })
        ).subscribe(
          res => {
            this.addEmployee?.patchValue({
              [controlName]: res,
            });
            this.loading = '';
          }
        )
        this.extractBase64Service.extractBase64(file).then((img: any) => {
          this.preview[controlName as keyof PREVIEW] = img.base;
        });
      }
    }
    // //  reset event changes (Being able to upload the same image in case it has been removed from the UI )
    event.target.value = '';
  }

  onRemoveFile(controlName: string) {
    if(!this.loading){
      this.addEmployee?.get(controlName)?.patchValue(null);
      this.preview[controlName as keyof PREVIEW] = "";
    }
  }

  get fm() {
    return this.addEmployee.controls;
  }
}
