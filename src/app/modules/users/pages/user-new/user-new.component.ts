import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  userId: string;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userSer: UsersService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // initialize user form
    this.initUserForm();

    // handle old data
    this.handleOldData();
  }

  // initialize user form
  initUserForm() {
    this.userForm = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      age: this.fb.control(null, Validators.required),
      gender: this.fb.control('male', Validators.required),
    });
  }

  // handle old data
  handleOldData() {
    if (!!this.userId) {
      this.userSer.fetchUser(this.userId)
        .subscribe({
          next: (res) => {
            console.log('res', res);
            this.userForm.patchValue({
              firstName: res.firstName,
              lastName: res.lastName,
              email: res.email,
              age: res.age,
              gender: res.gender,
            });
          },
          error: (err) => {
            console.log('err', err);
          },
        });
    }
  }

  // submit user form
  submitUserForm() {
    const mode = !!this.userId ? 'edit' : 'add';
    const body = {
      ...this.userForm.value,
      ...(!!this.userId && { id: this.userId }),
    };

    this.userSer.addUser(body, mode)
      .subscribe({
        next: (res) => {
          console.log('res', res);
          mode === 'add' && this.userForm.reset();
          this.router.navigate(['/users/']);
        },
        error: (err) => {
          console.log('err', err);
        },
      });
  }

  // clear user form
  clearUserForm() {
    this.userForm.reset();
  }
}
