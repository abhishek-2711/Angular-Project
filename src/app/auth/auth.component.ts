import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLogInMode = true;

  isLoading = false;

  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}
  onSwithMode() {
    this.isLogInMode = !this.isLogInMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    // idea is we simply change the observable we subscribe to but after subscription we repeat same task for both login and signup
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLogInMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      (responseData) => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    authForm.reset();
  }
}
