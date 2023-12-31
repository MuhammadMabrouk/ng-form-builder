import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ControlBase } from '../models/control-base.model';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {

  constructor(private fb: FormBuilder) {}

  toFormGroup(controls: ControlBase<string>[]) {
    const group: {[key: string]: FormControl} = {};

    controls.forEach((control) => {
      group[control.key] = control.required
        ? this.fb.control(control.value || null, [Validators.required])
        : this.fb.control(control.value || null);
    });

    return this.fb.group(group);
  }
}
