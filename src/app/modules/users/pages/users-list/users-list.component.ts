import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { staggerFadeUpEnter } from 'src/app/animations/fade/stagger-fade-up';
import { deletingFade } from 'src/app/animations/deleting/deleting-fade';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [staggerFadeUpEnter, deletingFade],
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

  // delete user
  deleteUser(deletedUser: User) {
    this.users = this.users.filter(user => user.id !== deletedUser.id);
    this.usersLimit = this.users.length;
  }
}
