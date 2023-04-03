import { PRUEVA1_GENDER_ENUM, PRUEVA1_OPTION_ENUM } from './prueva1.enums';  
      
export interface IPrueva1CreateDTO{ 
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA1_GENDER_ENUM,
  option:PRUEVA1_OPTION_ENUM,
  email:string,
  suspended:boolean,
}
export interface IPrueva1GetDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA1_GENDER_ENUM,
  option:PRUEVA1_OPTION_ENUM,
  email:string,
  suspended:boolean,
}
export interface IPrueva1UpdateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA1_GENDER_ENUM,
  option:PRUEVA1_OPTION_ENUM,
  email:string,
  suspended:boolean,
}

