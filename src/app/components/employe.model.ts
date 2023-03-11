import { Genderenum } from "./employe.enum/gender.enum";

export interface EmployeModel{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender: Genderenum,
  suspended: boolean,
  email:string
}
export interface IEmployeCreateDTO{
  id:number,
  name:string,
  lastName:string,
  age:number,
  work:string,
  roll:string,
  gender: Genderenum,
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
  gender: Genderenum,
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
  gender: Genderenum,
  suspended: boolean,
  email:string
}

