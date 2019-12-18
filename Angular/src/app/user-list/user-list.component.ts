import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  selectedUser: User = {
    id: null,
    role: null,
    name: null,
    email: null,
    mobileno: null,
    password: null,
    address: null

  };
  allUsers: [];

  constructor(public userService: UserService) {
    this.getData();
  }

  getData() {
    this.userService.getData().subscribe((data) => {
      console.log(data.adminUserBeanList);

      this.allUsers = data.adminUserBeanList;

    });
  }

  selectUser(allUsers: User) {
    this.selectedUser = allUsers;

  }


  deleteUser(allUsers: User) {
    console.log(allUsers);
    this.userService.deleteUserData(allUsers).subscribe(res => {
      console.log(res);
      console.log('delete');
      this.getData();
    },
      err => {
        console.log(err);
      });
  }
  ngOnInit() {
  }

}
