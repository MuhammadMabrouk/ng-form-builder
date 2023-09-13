import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationLibComponent } from './notification-lib.component';

@NgModule({
  declarations: [NotificationLibComponent],
  imports: [CommonModule],
  exports: [NotificationLibComponent],
})
export class NotificationLibModule {}
