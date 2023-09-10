import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchUsersResponse } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get<FetchUsersResponse>('https://dummyjson.com/users');
  }
}
