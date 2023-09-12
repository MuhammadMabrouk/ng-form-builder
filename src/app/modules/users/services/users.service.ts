import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FetchUsersResponse, User } from '../interfaces/user';
import { ControlBase } from 'src/app/modules/form-builder/models/control-base.model';
import { ControlTextBox } from 'src/app/modules/form-builder/models/control-textbox.model';
import { ControlRadio } from 'src/app/modules/form-builder/models/control-radio.model';
import { of } from 'rxjs';

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

  // fetch user form controls
  fetchUserFormControls() {
    const controls: ControlBase<string>[] = [

      new ControlTextBox({
        key: 'firstName',
        label: 'First Name',
        required: true,
        order: 1,
      }),

      new ControlTextBox({
        key: 'lastName',
        label: 'Last Name',
        required: true,
        order: 2,
      }),

      new ControlTextBox({
        key: 'email',
        label: 'Email address',
        type: 'email',
        required: true,
        order: 3,
      }),

      new ControlTextBox({
        key: 'age',
        label: 'Age',
        type: 'number',
        required: true,
        order: 4,
      }),

      new ControlRadio({
        key: 'gender',
        label: 'Gender',
        value: 'male',
        options: [
          { key: 'male', value: 'Male' },
          { key: 'female', value: 'Female' },
        ],
        required: true,
        order: 5,
      }),
    ];

    return of(controls.sort((a, b) => a.order - b.order));
  }
}
