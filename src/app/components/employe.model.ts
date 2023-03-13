import { EployGenderEnum } from "./employe.enum/employ-gender.enum"

export interface IEmployeCreateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender: EployGenderEnum,
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
  gender: EployGenderEnum,
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
  gender: EployGenderEnum,
  suspended: boolean,
  email:string
}

