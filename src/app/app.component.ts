import { Component } from '@angular/core';
import { USERS } from './mock-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Blog';
  blogShow: boolean = true;
  usersListShow: boolean = true;
  user = {
    name: 'Mohammed',
    job: {
      title: 'full Stack Developer',
      company: 'V-Line Group'
    }
  }
  usersList = USERS;

  toggleBlog() {
    this.blogShow = !this.blogShow;
  }
  toggleUsers() {
    this.usersListShow = !this.usersListShow;
  }
}
