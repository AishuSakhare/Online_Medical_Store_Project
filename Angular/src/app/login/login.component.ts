import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = null;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  loginUser(loginForm: NgForm) {
    console.log(loginForm.value);
    this.error = null;
    this.auth.login(loginForm.value).subscribe(
      response => {
        console.log('error message', response.description);
        this.error = response.description;
        loginForm.reset();
        if (response.statusCode === 210 && response.role === 'Admin') {
          console.log('inside if');
          const user = JSON.stringify(response);
          localStorage.setItem('token', user);
          this.router.navigateByUrl('/admin-product-list');
        } else if (response.statusCode === 210 && response.role === 'User') {
          console.log('inside if');
          const user = JSON.stringify(response);
          localStorage.setItem('token', user);
          this.router.navigateByUrl('/user-product-list');
        }

      },
      err => {
        console.log(err);
        this.error = err.error.error.message;
        loginForm.reset();
      }
    );
  }

}
