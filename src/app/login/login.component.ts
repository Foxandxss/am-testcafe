import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  loginError = false;

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.loginError = !this.auth.logIn(this.email, this.password);

    if (!this.loginError) {
      const url = this.auth.redirectUrl || '/home';
      this.router.navigate([url]);
    }
  }

}
