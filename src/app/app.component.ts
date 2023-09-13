import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationLibService } from 'notification-lib';
import { Notification } from 'notification-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  notifications: Notification[];

  subscription: Subscription;

  constructor(private notificationSer: NotificationLibService) {}

  ngOnInit(): void {
    this.subscription = this.notificationSer.notifications.subscribe({
      next: (data) => {
        this.notifications = data;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
