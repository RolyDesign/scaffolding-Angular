export interface IPropertyType {
  type: DataTypeEnumn;
  viewType: IViewType | null;
  validators: ValidatorEnum[] | null;
  valueValidators: Array<string | number | null> | null;
}

export interface IViewType {
  element: ElementEnum;
  elementType?: ElementTypeEnum;
  options?: Array<string | number | null>;
}

export enum DataTypeEnumn {
  number = 'number',
  bolean = 'bolean',
  string = 'string',
  array = '[]',
  obect = '{}',
  any = 'any',
  customEnum = 'customEnum',
}

export enum ElementTypeEnum {
  Text = 'text',
  Checkbox = 'checkbox',
  Radio = 'radio',
  Email = 'email',
  Search = 'search',
  Tel = 'tel',
  Url = 'url',
  Number = 'number',
  Range = 'range',
  Datetimelocal = 'datetime-local',
  Month = 'month',
  Time = 'time',
  Week = 'week',
  Date = 'date',
  Color = 'color',
  Button = 'button',
  File = 'file',
  Hidden = 'hidden',
  Image = 'image',
  Password = 'password',
  Reset = 'reset',
  Submit = 'submit',
}
export enum ElementEnum {
  Input = 'input',
  TextArea = 'textarea ',
  Select = 'select',
}

export enum ValidatorEnum {
  maxlength = 'maxlength ',
  minlength = 'minlength',
  pattern = 'pattern ',
  min = 'min',
  max = 'max',
  required = 'required ',
}

export interface myModel {
  id: IPropertyType;
  name: IPropertyType;
  lastName: IPropertyType;
  gender: IPropertyType;
  favorite: IPropertyType;
}

export const myModel: myModel = {
  id: {
    type: DataTypeEnumn.number,
    viewType: null,
    validators: null,
    valueValidators: null,
  },
  name: {
    type: DataTypeEnumn.string,
    viewType: {
      element: ElementEnum.Input,
      elementType: ElementTypeEnum.Text,
    },
    validators: [ValidatorEnum.minlength, ValidatorEnum.maxlength, ValidatorEnum.required],
    valueValidators: [3, 20, null],
  },
  lastName: {
    type: DataTypeEnumn.string,
    viewType: {
      element: ElementEnum.Input,
      elementType: ElementTypeEnum.Text,
    },
    validators: [ValidatorEnum.minlength, ValidatorEnum.maxlength, ValidatorEnum.required],
    valueValidators: [3, 20, null],
  },
  gender: {
    type: DataTypeEnumn.customEnum,
    viewType: {
      element: ElementEnum.Select,
      options: [null, 'opt1', 'opt2', 'opt3'],
    },
    validators: [ValidatorEnum.required],
    valueValidators: [null],
  },
  favorite: {
    type: DataTypeEnumn.bolean,
    viewType: {
      element: ElementEnum.Input,
      elementType: ElementTypeEnum.Checkbox,
    },
    validators: [],
    valueValidators: [],
  },
};

/**
 * Covertir este modelo a json
 */
