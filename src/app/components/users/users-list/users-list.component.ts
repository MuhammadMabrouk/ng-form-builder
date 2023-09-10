import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  isFetching: boolean = false;
  isError: boolean = false;

  usersLimit: number = 0;
  usersTotal: number = 0;
  users: User[] = [];

  constructor(private userSer: UsersService) {}

  ngOnInit(): void {
    // fetch all users
    this.getUsers();
  }

  // fetch all users
  getUsers() {
    this.isFetching = true;

    this.userSer
      .fetchUsers()
      .pipe(finalize(() => (this.isFetching = false)))
      .subscribe({
        next: (res) => {
          if (res) {
            this.usersLimit = res.limit;
            this.usersTotal = res.total;
            this.users = res.users;
          }
        },
        error: (err) => {
          this.isError = true;
          console.log(err);
        },
      });
  }
}
