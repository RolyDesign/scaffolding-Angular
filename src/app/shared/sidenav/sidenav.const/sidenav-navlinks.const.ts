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
    title: 'Devices',
    icon: NAV_FONT_ICONS.faProduct,
    link: '/devices',
    isDropdow:false
  },
  {
    title: 'Employees',
    icon: NAV_FONT_ICONS.faEmpoy,
    link: '/employees',
    isDropdow:false
  },
  {
    title: 'Vehicles',
    icon: NAV_FONT_ICONS.faEmpoy,
    link: '/vehicles',
    isDropdow:false
  },
  {
    title: 'Licenses',
    icon: NAV_FONT_ICONS.faEmpoy,
    link: '/licenses',
    isDropdow:false
  },
  // {
  //   title: 'Stadistc',
  //   icon: NAV_FONT_ICONS.faStadistc,
  //   link: [
  //     {
  //       title: 'Enero',
  //       icon: NAV_FONT_ICONS.faEmpoy,
  //       link:'/',
  //       isDropdow:false
  //     }
  //   ],
  //   isDropdow:true
  // },

]
