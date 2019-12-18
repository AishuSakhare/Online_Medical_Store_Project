import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error = null;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  registerUser(registerForm: NgForm) {
    this.error = null;
    this.auth.register(registerForm.value).subscribe(
      res => {
        console.log(res);
        this.error = res;
        registerForm.reset();
      },
      err => {
        console.log(err);
       // this.error = err.error.error.message;
      });
  }
}
