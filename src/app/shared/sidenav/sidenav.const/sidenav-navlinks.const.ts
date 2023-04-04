import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NAV_FONT_ICONS } from "./sidenav-icons.const";



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
    icon: NAV_FONT_ICONS.faHome,
    link: '/',
    isDropdow:false
  },
  {
    title: 'Product',
    icon: NAV_FONT_ICONS.faProduct,
    link: '/',
    isDropdow:false
  },
  {
    title: 'Prueva2s',
    icon: NAV_FONT_ICONS.faAbout,
    link: '/prueva2s',
    isDropdow:false
  },
  {
    title: 'Employes',
    icon: NAV_FONT_ICONS.faEmpoy,
    link: '/employes',
    isDropdow:false
  },
  {
    title: 'Licenses',
    icon: NAV_FONT_ICONS.faEmpoy,
    link: '/',
    isDropdow:false
  },
  {
    title: 'Vehiculo',
    icon: NAV_FONT_ICONS.faEmpoy,
    link: '/',
    isDropdow:false
  }
  ,
  {
    title: 'Lazaro',
    icon: NAV_FONT_ICONS.faEmpoy,
    link: '/',
    isDropdow:false
  },
  {
    title: 'Stadistc',
    icon: NAV_FONT_ICONS.faStadistc,
    link: [
      {
        title: 'Enero',
        icon: NAV_FONT_ICONS.faEmpoy,
        link:'/',
        isDropdow:false
      }
    ],
    isDropdow:true
  },
  {
    title: 'Price',
    icon: NAV_FONT_ICONS.faPrice,
    link: '/',
    isDropdow:false
  },
]
