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
  checkbox1: boolean = true;
  checkbox2: boolean = true;
  checkbox3: boolean = false;
  errorMessages: any = {};

  mc(e) {
    console.log('from app');
  }

  get username() {
    return this.myForm.get('username');
  }

  ngOnInit(): void {
    this.errorMessages = {
      'required': 'Name is required',
      'minlength': 'The number of characters should not be less than 2'
    }
    this.myForm = new FormGroup({
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
      
    });
  }
}
