import { Component, Input } from '@angular/core';
import { NotificationLibService } from './notification-lib.service';
import { Notification } from './notification-lib.interface';

@Component({
  selector: 'lib-notification-lib',
  templateUrl: './notification-lib.component.html',
  styleUrls: ['./notification-lib.component.scss'],
})
export class NotificationLibComponent {

  @Input() notifications: Notification[] = [];

  constructor(private notificationSer: NotificationLibService) {}

  removeNotification(index: number) {
    this.notificationSer.removeNotification(index);
  }
}
