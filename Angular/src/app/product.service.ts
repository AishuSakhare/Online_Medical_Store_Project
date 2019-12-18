import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('http://localhost:8080/productList');

  }

  deleteData(data) {
    console.log(data);
    return this.http.delete(`http://localhost:8080/deleteProduct/${data.productId}`);
  }

  postData(data) {
    return this.http.post('http://localhost:8080/addProduct', data);
  }

  putData(data) {
    console.log(data);
    return this.http.put('http://localhost:8080/updateProduct', data);
  }
}
