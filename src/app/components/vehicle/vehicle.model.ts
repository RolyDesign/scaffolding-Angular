import { VEHICLE_SERVICESTATUS_ENUM, VEHICLE_OPERATIONALSTATUS_ENUM, VEHICLE_COLOR_ENUM } from './vehicle.enums';  
      
export interface IVehicleCreateDTO{ 
 id:number,
 maker:string,
 model:string,
 year:number,
 tag:string,
 vin:string,
  serviceStatus:VEHICLE_SERVICESTATUS_ENUM,
 serviceStatusNote:string,
  operationalStatus:VEHICLE_OPERATIONALSTATUS_ENUM,
 capacity:number,
 alias:string,
  color:VEHICLE_COLOR_ENUM,
 autonomy:number,
 fuelCapacity:number,
 picture2:string,
 picture:string,
}
export interface IVehicleGetDTO{
  id:number,
  maker:string,
  model:string,
  year:number,
  tag:string,
  vin:string,
  serviceStatus:VEHICLE_SERVICESTATUS_ENUM,
  serviceStatusNote:string,
  operationalStatus:VEHICLE_OPERATIONALSTATUS_ENUM,
  capacity:number,
  alias:string,
  color:VEHICLE_COLOR_ENUM,
  autonomy:number,
  fuelCapacity:number,
  picture2:string,
  picture:string,
}
export interface IVehicleUpdateDTO{
   id:number,
   maker:string,
   model:string,
   year:number,
   tag:string,
   vin:string,
  serviceStatus:VEHICLE_SERVICESTATUS_ENUM,
   serviceStatusNote:string,
  operationalStatus:VEHICLE_OPERATIONALSTATUS_ENUM,
   capacity:number,
   alias:string,
  color:VEHICLE_COLOR_ENUM,
   autonomy:number,
   fuelCapacity:number,
   picture2:string,
   picture:string,
}

