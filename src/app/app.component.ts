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

  mc(e) {
    console.log('from app');
  }

  get username() {
    return this.myForm.get('username');
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl('', {
        // validators: [
        //   Validators.required,
        //   Validators.minLength(2),
        //   Validators.maxLength(30)
        // ],
        // updateOn: 'blur'
      }),
      disabledUsername: new FormControl({value: '', disabled: true}),
      password1: new FormControl(''),
      password2: new FormControl(''),
      password3: new FormControl(''),
      password4: new FormControl(''),
      password5: new FormControl(''),
      errorPassword: new FormControl(''),
      textarea: new FormControl('adsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssssadsssssssssssssss'),
    });
  }
}
