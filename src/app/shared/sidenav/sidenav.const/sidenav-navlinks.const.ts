import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { EMPLOY_FONT_ICONS } from "./sidenav-icons.const";

export interface INavLinkModel{
  title:string,
  icon:IconProp,
  link:string,
}

/**
 * Definir los items  del menu en esta constante
 */

export const NAV_LINKS: INavLinkModel[] = [
  {
    title: 'Home',
    icon: EMPLOY_FONT_ICONS.faHome,
    link: '/'
  },
  {
    title: 'Product',
    icon: EMPLOY_FONT_ICONS.faProduct,
    link: '/'
  },
  {
    title: 'About',
    icon: EMPLOY_FONT_ICONS.faAbout,
    link: '/'
  },
  {
    title: 'Employ',
    icon: EMPLOY_FONT_ICONS.faEmpoy,
    link: '/employes'
  },
  {
    title: 'Stadistc',
    icon: EMPLOY_FONT_ICONS.faStadistc,
    link: '/'
  },
  {
    title: 'Price',
    icon: EMPLOY_FONT_ICONS.faPrice,
    link: '/'
  }
]
