import { Injectable } from '@angular/core';
import { LoginResponse } from './login-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data) {
    console.log('register', data);
    return this.http.put(
      'http://localhost:8080/adminUserRegister', data
    );
  }

  login(data): Observable<LoginResponse> {
    console.log('service', data);
    return this.http.post<LoginResponse>(
      'http://localhost:8080/adminuserLogin', data
    );
  }

  getProfileData() {
    return this.http.get<any>('http://localhost:8080/adminuserProfile');
  }

  putProfileData(data) {
    console.log(data);
    return this.http.put('http://localhost:8080/adminuserUpdateProfile', data);
  }
}
