import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { EMPLOY_FONT_ICONS } from "./sidenav-icons.const";

export interface INavLinkModel{
  title:string,
  icon:IconProp,
  link: string  | INavLinkModel[],
  isDropdow:boolean
}

/**
 * Definir los items  del menu en esta constante
 */

export const NAV_LINKS: INavLinkModel[] = [
  {
    title: 'Home',
    icon: EMPLOY_FONT_ICONS.faHome,
    link: '/',
    isDropdow:false
  },
  {
    title: 'Product',
    icon: EMPLOY_FONT_ICONS.faProduct,
    link: '/products',
    isDropdow:false
  },
  {
    title: 'About',
    icon: EMPLOY_FONT_ICONS.faAbout,
    link: '/',
    isDropdow:false
  },
  {
    title: 'Employes',
    icon: EMPLOY_FONT_ICONS.faEmpoy,
    link: '/employes',
    isDropdow:false
  },
  {
    title: 'Licenses',
    icon: EMPLOY_FONT_ICONS.faEmpoy,
    link: '/licenses',
    isDropdow:false
  },
  {
    title: 'Vehiculo',
    icon: EMPLOY_FONT_ICONS.faEmpoy,
    link: '/vehiculos',
    isDropdow:false
  }
  ,
  {
    title: 'Lazaro',
    icon: EMPLOY_FONT_ICONS.faEmpoy,
    link: '/lazaros',
    isDropdow:false
  },
  {
    title: 'Stadistc',
    icon: EMPLOY_FONT_ICONS.faStadistc,
    link: [
      {
        title: 'Enero',
        icon: EMPLOY_FONT_ICONS.faEmpoy,
        link:'/',
        isDropdow:false
      }
    ],
    isDropdow:true
  },
  {
    title: 'Price',
    icon: EMPLOY_FONT_ICONS.faPrice,
    link: '/',
    isDropdow:false
  },
]
