import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NAV_LINKS } from './sidenav.const/sidenav-navlinks.const';
import { RouterModule } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'scfld-sidenav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  listLink = NAV_LINKS;
  buttonToggle = faBars;
  showNav = true;
  currentLink = this.listLink[0].title

  show(v: boolean) {
    this.showNav = v;
  }

  setCurrentLink(currentLink : string){
    this.currentLink = currentLink
  }
}
