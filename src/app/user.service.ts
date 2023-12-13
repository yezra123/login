// user.service.ts
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { username: 'ezra', password: '1234' },
    { username: 'anji', password: '1234' },
    { username: 'vasu', password: '1234' },
    { username: 'sasank', password: '1234' },

    // Add more users as needed
  ];

  getUser(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
}
