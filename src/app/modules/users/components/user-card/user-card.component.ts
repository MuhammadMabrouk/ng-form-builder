import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user: User | undefined;

  @Output() userDeleted = new EventEmitter();

  constructor(private userSer: UsersService) {}

  deleteUser(user: User) {
    this.userSer.deleteUser(`${user.id}`)
      .subscribe({
        next: (res) => {
          console.log('res', res);
          this.userDeleted.emit(user);
        },
        error: (err) => {
          console.log('err', err);
        },
      });
  }
}
