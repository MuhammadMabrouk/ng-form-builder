import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const components = [
  AppComponent,
  SidebarComponent,
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
