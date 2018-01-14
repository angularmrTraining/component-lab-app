import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: User[] = [];
  constructor(private usersSerivce: UsersService) { }

  ngOnInit() {
    this.usersSerivce.getUsers()
      .subscribe(resp => {
        this.users = resp.contacts;
      })
  }

}
