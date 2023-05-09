import { DEVICE_SERVICESTATUS_ENUM } from './device.enums';  
      
export interface IDeviceCreateDTO{ 
 id:number,
 maker:string,
 model:string,
 year:number,
 serialNumber:string,
  serviceStatus:DEVICE_SERVICESTATUS_ENUM,
 serviceStatusNote:string,
 registrationPairingStartedOn:string,
 registrationPairingExpiration:string,
 registrationId:number,
 deviceId:number,
}
export interface IDeviceGetDTO{
  id:number,
  maker:string,
  model:string,
  year:number,
  serialNumber:string,
  serviceStatus:DEVICE_SERVICESTATUS_ENUM,
  serviceStatusNote:string,
  registrationPairingStartedOn:string,
  registrationPairingExpiration:string,
  registrationId:number,
  deviceId:number,
}
export interface IDeviceUpdateDTO{
   id:number,
   maker:string,
   model:string,
   year:number,
   serialNumber:string,
  serviceStatus:DEVICE_SERVICESTATUS_ENUM,
   serviceStatusNote:string,
   registrationPairingStartedOn:string,
   registrationPairingExpiration:string,
   registrationId:number,
   deviceId:number,
}

