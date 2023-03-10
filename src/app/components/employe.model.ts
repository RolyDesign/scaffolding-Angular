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
}

