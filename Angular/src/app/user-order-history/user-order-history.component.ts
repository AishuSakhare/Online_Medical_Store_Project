import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Order } from '../order';

@Component({
  selector: 'app-user-order-history',
  templateUrl: './user-order-history.component.html',
  styleUrls: ['./user-order-history.component.css']
})
export class UserOrderHistoryComponent implements OnInit {

  constructor(public userService: UserService) {
    this.userService.getOrderData().subscribe((data) => {
      console.log(data.orderProductBeanList);
      this.orders = data.orderProductBeanList;
    });
   }
   selectedOrder: Order = {
    orderId: null,
    cartId: null,
    id: null,
    email: null,
    address: null,
    productId: null,
    productName: null,
    productPrice: null,
    productCategory: null,
    productDescription: null,
    productQuantity: null

  };
  orders: [];

  ngOnInit() {
  }


  selectOrder(orders: Order) {
    this.selectedOrder = orders;
  }
}
