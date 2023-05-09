import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function maxDate(date: string | Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let forbidden = false;
    if (control.value) {
      if (date instanceof Date) {
        const paramDate = date.setHours(0, 0, 0, 0);
        const controldate = new Date(`${control.value}T00:00:00`).setHours( 0, 0,  0, 0 );

        if (controldate > paramDate) {
          forbidden = true;
        }
      }
      if (typeof date == 'string') {
        const paramDate = new Date(`${date}T00:00:00`).setHours(0, 0, 0, 0);
        const controldate = new Date(`${control.value}T00:00:00`).setHours(0,0, 0,0 );
        if(isNaN(paramDate)){
          console.error("Only string with format yyyy-mm-dd, Example,  '2023-05-01' or Only new Date() object, Example,  new Date(Date.now())")
        }
        if (controldate > paramDate) {
          forbidden = true;
        }
      }
    }
    return forbidden ? { maxdate: true } : null;
  };
}
