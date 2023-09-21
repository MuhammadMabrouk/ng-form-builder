import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserNewComponent } from './pages/user-new/user-new.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    data: { animation: 'AllUsersPage' },
  },
  {
    path: 'new',
    component: UserNewComponent,
    data: { animation: 'NewUserPage' },
  },
  {
    path: ':id/edit',
    component: UserNewComponent,
    data: { animation: 'EditUserPage' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
