import { Component } from '@angular/core';
import { USERS } from './mock-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'CONTACT MANAGER';
  users = USERS;
}
