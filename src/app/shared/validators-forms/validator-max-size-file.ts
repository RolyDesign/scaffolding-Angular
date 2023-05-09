import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxSizeFile(size: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let forbidden = false;
    if (control.value instanceof File) {
      const controlSize = control.value.size;
      if (controlSize / 1024 > size) {
        forbidden = true;
      }
    }
    return forbidden ? { maxsizefile: true } : null;
  };
}