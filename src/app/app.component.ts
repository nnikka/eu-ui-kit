import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ui-kit';
  myForm: FormGroup;
  euInputUsername: string;
  euInputPassword: string;

  mc(e) {
    console.log('from app');
  }

  get username() {
    return this.myForm.get('username');
  }
  get password() {
    return this.myForm.get('password');
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(this.euInputUsername, {
        validators: [
          Validators.required,
          Validators.minLength(4),
        ],
        updateOn: 'blur'
      }),
      password: new FormControl(this.euInputPassword, {
        validators: [
          Validators.required,
          Validators.minLength(6),
        ],
        updateOn: 'blur'
      })
    });
  }
}
