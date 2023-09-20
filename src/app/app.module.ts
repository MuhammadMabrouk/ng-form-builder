import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationLibModule } from 'notification-lib';
import { ServiceWorkerModule } from '@angular/service-worker';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';

const components = [
  AppComponent,
  SidebarComponent,
  FooterComponent,
];

const modules = [
  BrowserModule,
  ReactiveFormsModule,
  HttpClientModule,
  AppRoutingModule,
  NgbModule,
  NotificationLibModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
