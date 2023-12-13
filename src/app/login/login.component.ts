// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    const user = this.userService.getUser(this.username);

    if (user && user.password === this.password) {
      if (this.isAllowedToLogin(user)) {
        // Successful login for allowed user
        console.log('Login successful!');
        // You can navigate to another page or perform other actions here
      } else {
        // User not allowed to log in
        console.log('You are not a valid user.');
      }
    } else {
      // Failed login
      console.log('Invalid credentials. Please try again.');
    }
  }

  private isAllowedToLogin(user: any): boolean {
    // Check if the user is among the first 10 users
    const allowedUsers = this.userService.getUsers().slice(0, 10);
    return allowedUsers.some((u) => u.username === user.username);
  }
}
