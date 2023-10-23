import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  brandLogo = $localize`Brand Logo`;

  menuItems = [
    {
      name: $localize`Users List`,
      route: 'users',
      exact: false,
    },
    {
      name: $localize`List Item`,
      route: '',
      exact: true,
    },
    {
      name: $localize`List Item`,
      route: '',
      exact: true,
    },
    {
      name: $localize`List Item`,
      route: '',
      exact: true,
    },
  ];

  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'ar', label: 'العربية' }
  ];
}
