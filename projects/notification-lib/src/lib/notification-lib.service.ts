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
    notification && this.notifications.next([...this.notifications.value, notification]);
  }

  removeNotification(index: number) {
    index && this.notifications.next(this.notifications.value.splice(index, 1));
  }
}
