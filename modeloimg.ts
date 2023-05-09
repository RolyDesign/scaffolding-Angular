export interface model
{
  Name: string;
  PluralName: string;
  Fields: Array<{
    Name:string,
    DisplayName:string,
    Type:string,
    DisplayType: {
      Element:string,
      ElementType:string,
      OptionsSelected:Array<string>,
      FileOptions:{
        TypeFile:string,
      }
      Validators: Array<string>,
      ValueValidators: Array<string>,
    }
  }>;
}





