import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormBuilderModule } from '../form-builder/form-builder.module';

// components
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserNewComponent } from './pages/user-new/user-new.component';

const components = [
  UsersListComponent,
  UserCardComponent,
  UserNewComponent,
];

const modules = [
  CommonModule,
  UsersRoutingModule,
  FormBuilderModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
})
export class UsersModule {}
