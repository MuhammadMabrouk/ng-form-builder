import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserCardComponent } from './components/users/user-card/user-card.component';
import { UserNewComponent } from './components/users/user-new/user-new.component';

const components = [
  AppComponent,
  SidebarComponent,
  HomeComponent,
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
