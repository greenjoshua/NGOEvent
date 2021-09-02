import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;
  private userName: string | undefined;
  private password: string | undefined;

  constructor() {
    this.isLoggedIn=false;
  }

  login(username: string, password: string) {
    this.isLoggedIn = true;
    this.userName=username;
    return of(this.isLoggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  isAdminUser(): boolean {
    if(this.userName ==="Admin") {
      return true;
    } else {
      return false;
    }
  }

  logoutUser(): void {
    this.isLoggedIn = false;
  }
}
