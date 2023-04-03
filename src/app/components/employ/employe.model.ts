import { EMPLOY_GENDER_ENUM } from './employ.enums';

export interface IEmployeCreateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender: EMPLOY_GENDER_ENUM,
  suspended: boolean,
  email:string
}
export interface IEmployeGetDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender: EMPLOY_GENDER_ENUM,
  suspended: boolean,
  email:string
}
export interface IEmployeUpdateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender: EMPLOY_GENDER_ENUM,
  suspended: boolean,
  email:string
}

