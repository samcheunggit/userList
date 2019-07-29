import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: IUser[] = [];
  isLoading = true;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((result: IUser[]) => {
      this.users = result;
    },
    (error) => {
      // error interceptor will handle the http error
      console.log('error: ', error);
    },
    () => {
      console.log('finished');
      this.isLoading = false;
    });
  }

}
