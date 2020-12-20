import { Injectable } from '@angular/core';
import {AUTHENTICATED_USER} from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === "in28minutes" && password === "dummy") {
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      return true;

    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}
