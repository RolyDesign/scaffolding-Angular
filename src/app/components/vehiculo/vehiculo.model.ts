import { VEHICULO_GENDER_ENUM } from './vehiculo.enums';  
      
export interface IVehiculoCreateDTO{ 
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:VEHICULO_GENDER_ENUM,
  option:string,
  email:string,
  suspended:boolean,
}
export interface IVehiculoGetDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:VEHICULO_GENDER_ENUM,
  option:string,
  email:string,
  suspended:boolean,
}
export interface IVehiculoUpdateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:VEHICULO_GENDER_ENUM,
  option:string,
  email:string,
  suspended:boolean,
}

