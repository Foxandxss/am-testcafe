import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  set isLoggedIn(value: boolean) {
    localStorage.setItem('logged-in', value.toString());
  }

  get isLoggedIn() {
    const status = localStorage.getItem('logged-in');

    return status === 'true' ? true : false;
  }
  redirectUrl: string;

  logIn(email: string, password: string): boolean {
    if (email === 'jesus@perro.com' && password === '1234') {
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
