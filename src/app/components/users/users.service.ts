import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchUsersResponse, User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {}

  // fetch all users
  fetchUsers() {
    return this.http.get<FetchUsersResponse>('https://dummyjson.com/users');
  }

  // fetch single user
  fetchUser(id: string) {
    return this.http.get<User>(`https://dummyjson.com/users/${id}`);
  }

  // add/edit user
  addUser(user: User, mode: 'add' | 'edit') {
    let requestMethod: 'post' | 'put';
    let requestUrl: string;

    if (mode === 'add') {
      requestMethod = 'post';
      requestUrl = 'https://dummyjson.com/users/add';
    } else {
      requestMethod = 'put';
      requestUrl = `https://dummyjson.com/users/${user.id}`;
    }

    return this.http[requestMethod]<User>(requestUrl, user);
  }
}
