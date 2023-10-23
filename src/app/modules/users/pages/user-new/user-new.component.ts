import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormControlService } from 'src/app/modules/form-builder/services/form-control.service';
import { ControlBase } from 'src/app/modules/form-builder/models/control-base.model';
import { Subscription } from 'rxjs';
import { NotificationLibService } from 'notification-lib';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit, OnDestroy {

  mainTitle: string;
  userId: string;
  userForm: FormGroup;
  userControls: ControlBase<string>[] = [];

  subscription: Subscription;

  constructor(
    private userSer: UsersService,
    private formControlSer: FormControlService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationSer: NotificationLibService,
  ) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mainTitle = !!this.userId ? $localize`Edit User` : $localize`Add New User`;

    // initialize user form
    this.initUserForm();

    // handle old data
    this.handleOldData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // initialize user form
  initUserForm() {
    this.subscription = this.userSer.fetchUserFormControls()
      .subscribe({
        next: (controls) => {
          this.userForm = this.formControlSer.toFormGroup(controls);
          this.userControls = controls;
        },
        error: (err) => {
          console.log('err', err);
        },
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

          if (mode === 'add') {
            this.userForm.reset();
            this.notificationSer.addNotification({
              type: 'success',
              title: $localize`Great!`,
              description: $localize`User '${res.firstName} ${res.lastName}' added successfully.`,
            });
          } else {
            this.notificationSer.addNotification({
              type: 'success',
              title: $localize`Awesome!`,
              description: $localize`User '${res.firstName} ${res.lastName}' updated successfully.`,
            });
          }

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
