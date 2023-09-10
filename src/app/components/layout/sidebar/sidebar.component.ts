import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  brandLogo = 'Brand Logo';

  menuItems = [
    {
      name: 'Home',
      route: '',
      exact: true,
    },
    {
      name: 'Users List',
      route: 'users',
      exact: false,
    }
  ];
}
