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
      name: 'Users List',
      route: 'users',
      exact: false,
    },
    {
      name: 'List Item',
      route: '',
      exact: true,
    },
    {
      name: 'List Item',
      route: '',
      exact: true,
    },
    {
      name: 'List Item',
      route: '',
      exact: true,
    },
  ];
}
