export interface IPropertyType {
  propertyName: string;
  viewName: string;
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
  null = 'null',
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


//Model
export interface myModel {
  modelName: string;
  properties: IPropertyType[];
}

//model initialized
//all the values are selectionables (Enums) except:
//modelname, propertyName, viewName, options and valueValidators

export const myModel: myModel = {
  modelName: 'Employes',
  properties: [
    {
      propertyName: 'id',
      viewName: 'Id',
      type: DataTypeEnumn.number,
      viewType: null,
      validators: null,
      valueValidators: null,
    },
    {
      propertyName: 'name',
      viewName: 'Name',
      type: DataTypeEnumn.string,
      viewType: {
        element: ElementEnum.Input,
        elementType: ElementTypeEnum.Text,
      },
      validators: [
        ValidatorEnum.minlength,
        ValidatorEnum.maxlength,
        ValidatorEnum.required,
      ],
      valueValidators: [3, 20, null],
    },
    {
      propertyName: 'lastName',
      viewName: 'Last Name',
      type: DataTypeEnumn.string,
      viewType: {
        element: ElementEnum.Input,
        elementType: ElementTypeEnum.Text,
      },
      validators: [
        ValidatorEnum.minlength,
        ValidatorEnum.maxlength,
        ValidatorEnum.required,
      ],
      valueValidators: [3, 20, null],
    },
    {
      propertyName: 'gender',
      viewName: 'Gender',
      type: DataTypeEnumn.customEnum,
      viewType: {
        element: ElementEnum.Select,
        options: [null, 'opt1', 'opt2', 'opt3'],
      },
      validators: [ValidatorEnum.required],
      valueValidators: [null],
    },
    {
      propertyName: 'favorite',
      viewName: 'Favorite',
      type: DataTypeEnumn.bolean,
      viewType: {
        element: ElementEnum.Input,
        elementType: ElementTypeEnum.Checkbox,
      },
      validators: [],
      valueValidators: [],
    },
  ],
};

/**
 * Covertir este modelo a json
 */
