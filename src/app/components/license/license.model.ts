  
      
export interface ILicenseCreateDTO{ 
 id:string,
  createdOn: string,
  activationDate: string,
  canceledOn: string,
  deactivationDate: string,
  from: string,
  to: string,
 deviceId:number,
}
export interface ILicenseGetDTO{
  id:string,
   createdOn: string,
   activationDate: string,
   canceledOn: string,
   deactivationDate: string,
   from: string,
   to: string,
  deviceId:number,
}
export interface ILicenseUpdateDTO{
   id:string,
    createdOn: string,
    activationDate: string,
    canceledOn: string,
    deactivationDate: string,
    from: string,
    to: string,
   deviceId:number,
}

