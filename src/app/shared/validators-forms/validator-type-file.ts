import { AbstractControl, ValidatorFn } from '@angular/forms';

export function typeFile(types: Array<string>): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let forbidden = false;
    if (control.value instanceof File) {
      const controltype = control.value.type;
      if (!types.includes(controltype)) {
        forbidden = true;
      }
    }
    return forbidden ? { typefile: true } : null;
  };
}