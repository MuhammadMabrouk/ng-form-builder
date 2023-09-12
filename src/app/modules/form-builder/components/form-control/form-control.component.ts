import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../models/control-base.model';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent {

  @Input() form: FormGroup;
  @Input() control: ControlBase<string>;

  get isInvalid() {
    const control = this.form.controls[this.control.key];
    return control.invalid && control.touched;
  }
}
