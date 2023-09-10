import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { UserCardComponent } from './components/users/user-card/user-card.component';
import { UserNewComponent } from './components/users/user-new/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersListComponent,
    HomeComponent,
    UserCardComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
