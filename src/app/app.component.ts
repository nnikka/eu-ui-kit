import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ui-kit';
  myForm: FormGroup;
  errorMessages: any = {};

  mc(e) {
    console.log('from app');
  }

  get username() {
    return this.myForm.get('username');
  }

  ngOnInit(): void {
    this.errorMessages = {
      'required': 'Field is required',
      'minlength': 'The number of characters should not be less than 2'
    }

    this.myForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      number: new FormControl(''),
      disabledUsername: new FormControl({value: '', disabled: true}),
      password: new FormControl(''),
      password1: new FormControl(''),
      password2: new FormControl(''),
      password3: new FormControl(''),
      password4: new FormControl(''),
      password5: new FormControl(''),
      errorPassword: new FormControl(''),
      textarea1: new FormControl(''),
      textarea2: new FormControl(''),
      textarea3: new FormControl(''),

      checkbox1: new FormControl(true),
      checkbox2: new FormControl({value: '', disabled: true}),
      checkbox3: new FormControl(''),
      checkbox4: new FormControl(false, [
        Validators.requiredTrue
      ]),

      toggle1: new FormControl(true),
      toggle2: new FormControl({value: '', disabled: true}),
      toggle3: new FormControl(''),
      toggle4: new FormControl(false, [
        Validators.requiredTrue
      ])
    });
    this.myForm.get('checkbox4').markAsDirty();
    this.myForm.get('toggle4').markAsDirty();
  }
}
