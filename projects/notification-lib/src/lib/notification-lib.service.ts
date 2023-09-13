import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Notification } from './notification-lib.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationLibService {

  notifications = new BehaviorSubject<Notification[]>([]);

  constructor() { }

  addNotification(notification: Notification) {
    const notifications = this.notifications.value;
    notifications.push(notification);
    this.notifications.next(notifications);
  }

  removeNotification(index: number) {
    const notifications = this.notifications.value;
    notifications.splice(index, 1);
    this.notifications.next(notifications);
  }
}
