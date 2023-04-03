import { LAZARO_GENDER_ENUM, LAZARO_OPTION_ENUM } from './lazaro.enums';  
      
export interface ILazaroCreateDTO{ 
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:LAZARO_GENDER_ENUM,
  option:LAZARO_OPTION_ENUM,
  email:string,
  suspended:boolean,
}
export interface ILazaroGetDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:LAZARO_GENDER_ENUM,
  option:LAZARO_OPTION_ENUM,
  email:string,
  suspended:boolean,
}
export interface ILazaroUpdateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:LAZARO_GENDER_ENUM,
  option:LAZARO_OPTION_ENUM,
  email:string,
  suspended:boolean,
}

