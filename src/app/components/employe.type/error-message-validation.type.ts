export type TErrorMessageValidation = {
  name:string,
  lastName:string,
  age:string,
  work:string,
  roll:string,
  gender: string,
  email:string
}

export type TValidator = {
  required: string,
  max: string,
  min: string,
  maxlength:string,
  minlength:string,
  pattern:string
 };


