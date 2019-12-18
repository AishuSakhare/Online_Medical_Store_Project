import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../login-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userDetails = JSON.parse(localStorage.getItem('user'));
  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAdmin() {
    const user: LoginResponse = JSON.parse(localStorage.getItem('token'));
    if (user && user.role === 'Admin') {
      return true;
    } else {
      return false;
    }
  }


  isUser() {
    const user: LoginResponse = JSON.parse(localStorage.getItem('token'));
    if (user && user.role === 'User') {
      return true;
    } else {
      return false;
    }
  }
  isLoggedIn(): boolean {
    const user: LoginResponse = JSON.parse(localStorage.getItem('token'));
    if (user && user.statusCode === 210) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {
  }

}
