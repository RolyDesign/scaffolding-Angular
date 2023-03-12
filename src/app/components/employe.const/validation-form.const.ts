import { TValidator } from "../employe.type/error-message-validation.type";

export const VALIDATION_FORMS : TValidator = {
  required: 'The field is required',
  max: 'Exceeds the maximum value allowed',
  min: 'Does not exceed the minimum value allowed',
  maxlength:'Exceeds the maximum character allowed',
  minlength:'Does not exceed the minimum characters allowed',
  pattern:"It's not an email"
};
