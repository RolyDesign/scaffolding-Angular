import { LICENSE_GENDER_ENUM } from './license.enums';  
      
export interface ILicenseCreateDTO{ 
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:LICENSE_GENDER_ENUM,
  option:string,
  email:string,
  suspended:boolean,
}
export interface ILicenseGetDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:LICENSE_GENDER_ENUM,
  option:string,
  email:string,
  suspended:boolean,
}
export interface ILicenseUpdateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender:LICENSE_GENDER_ENUM,
  option:string,
  email:string,
  suspended:boolean,
}

