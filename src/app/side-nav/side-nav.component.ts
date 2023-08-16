import { Component } from '@angular/core';
import {
  faHome,
  faFileArchive,
  faLink,
  faSignOut
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {


  faHome = faHome;
  faFileArchive = faFileArchive;
  faLink = faLink;
  faSignOut = faSignOut;
}
