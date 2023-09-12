import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { UsersListComponent } from './modules/users/pages/users-list/users-list.component';
import { UserCardComponent } from './modules/users/components/user-card/user-card.component';
import { UserNewComponent } from './modules/users/pages/user-new/user-new.component';

const components = [
  AppComponent,
  SidebarComponent,
  UsersListComponent,
  UserCardComponent,
  UserNewComponent,
];

const modules = [
  BrowserModule,
  ReactiveFormsModule,
  HttpClientModule,
  AppRoutingModule,
  NgbModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
