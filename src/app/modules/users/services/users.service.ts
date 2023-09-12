import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FetchUsersResponse, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {}

  // fetch all users
  fetchUsers() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('limit', 12);
    // queryParams = queryParams.append('skip', 1);

    return this.http.get<FetchUsersResponse>(
      'https://dummyjson.com/users',
      { params: queryParams }
    );
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
