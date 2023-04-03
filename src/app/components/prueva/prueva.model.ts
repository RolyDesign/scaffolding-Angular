import { PRUEVA_GENDER_ENUM, PRUEVA_OPTION_ENUM } from './prueva.enums';  
      
export interface IPruevaCreateDTO{ 
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA_GENDER_ENUM,
  option:PRUEVA_OPTION_ENUM,
  email:string,
  suspended:boolean,
}
export interface IPruevaGetDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA_GENDER_ENUM,
  option:PRUEVA_OPTION_ENUM,
  email:string,
  suspended:boolean,
}
export interface IPruevaUpdateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA_GENDER_ENUM,
  option:PRUEVA_OPTION_ENUM,
  email:string,
  suspended:boolean,
}

