import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any>('http://localhost:8080/userList');

  }

  postData(data) {
    console.log(data);
    return this.http.post('http://localhost:8080/addProductToCart', data);
  }

  getCartData() {
    return this.http.get<any>('http://localhost:8080/viewCart');

  }

  getOrderData() {
    return this.http.get<any>('http://localhost:8080/viewOrder');
  }

  deleteDataFromCart(data) {
    console.log(data);
    return this.http.delete(`http://localhost:8080/deleteProductFromCart/${data.cartId}`);
  }

  addProductToOrderList(data) {
    console.log(data);
    return this.http.post('http://localhost:8080/addProductToOrderList', data);
  }

  getMessageData() {
    return this.http.get<any>('http://localhost:8080/seeUserQuestion');
  }

  getResponseData() {
    return this.http.get<any>('http://localhost:8080/seeAdminResponse');
  }
  sendReplyToUser(data) {
    console.log(data);
    return this.http.post('http://localhost:8080/adminResponse', data);
  }

  sendMessageToAdmin(data) {
    console.log(data);
    return this.http.post('http://localhost:8080/userQuestion', data);
  }

  deleteUserData(data) {
    console.log(data);
    return this.http.delete(`http://localhost:8080/deleteUser/${data.id}`);
  }
}
