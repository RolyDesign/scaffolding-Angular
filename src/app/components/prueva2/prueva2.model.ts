import { PRUEVA2_GENDER_ENUM, PRUEVA2_OPTION_ENUM } from './prueva2.enums';  
      
export interface IPrueva2CreateDTO{ 
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA2_GENDER_ENUM,
  option:PRUEVA2_OPTION_ENUM,
  email:string,
  suspended:boolean,
}
export interface IPrueva2GetDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA2_GENDER_ENUM,
  option:PRUEVA2_OPTION_ENUM,
  email:string,
  suspended:boolean,
}
export interface IPrueva2UpdateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:PRUEVA2_GENDER_ENUM,
  option:PRUEVA2_OPTION_ENUM,
  email:string,
  suspended:boolean,
}

