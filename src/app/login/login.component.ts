import { login } from './../store/auth/auth.actions';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authInput: FormGroup;
  errorMsg: string = '';

  constructor(private router: Router, private store: Store<AppState>) {
    this.authInput = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    if (this.authInput.status === 'VALID') {
      if (
        this.authInput.value.username === 'admin' &&
        this.authInput.value.password === 'admin'
      ) {
        this.store.dispatch(login());
        this.router.navigate(['']);
      } else {
        this.errorMsg = 'Wrong username or password';
      }
    }
  }
}
