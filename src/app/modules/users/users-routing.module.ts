import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserNewComponent } from './pages/user-new/user-new.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'new', component: UserNewComponent },
  { path: ':id/edit', component: UserNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
