import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  singleUsers: any;
  name: string;
  email: string;
  mobileno: number;
  password: string;
  address: string;
  constructor(private auth: AuthService) {
    this.auth.getProfileData().subscribe((data) => {
      console.log(data);
      console.log(data.adminUserBean.name);
      this.singleUsers = data.adminUserBean;
      this.name = data.adminUserBean.name;
      this.email = data.adminUserBean.email;
      this.mobileno = data.adminUserBean.mobileno;
      this.password = data.adminUserBean.password;
      this.address = data.adminUserBean.address;
      console.log('single user data', this.singleUsers);
    });
  }


  //  name1: string = this.name;
  // email1: string = this.email;
  // mobileno1: number = this.mobileno;
  // password1: string = this.password;
  // address1: string = this.address;

  selectedUser: User = {
    id: null,
    role: null,
    name: null,
    email: null,
    mobileno: null,
    password: null,
    address: null

  };

  // selectUser(userdata: User) {
  //   console.log(userdata);
  //   userdata = this.singleUsers;

  // }

  updateProfileForm(updateProfile: NgForm) {
    this.auth.putProfileData(updateProfile.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
