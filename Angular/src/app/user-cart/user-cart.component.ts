import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Cart } from '../cart';
import { Product } from '../product';
import { Order } from '../order';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  totalBill: number;
  productPrice: number;
  productQuantity: number;


  selectedProduct: Cart = {
    cartId: null,
    id: null,
    email: null,
    productId: null,
    productName: null,
    productPrice: null,
    productCategory: null,
    productDescription: null,
    productQuantity: null

  };
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
  carts: [];
  orders: [];
  constructor(public userService: UserService) {
    this.getCartData();


  }

  getCartData() {
    this.userService.getCartData().subscribe((data) => {
      console.log(data.cartBeanList);
      this.carts = data.cartBeanList;

    });
  }


  selectProduct(carts: Cart) {
    this.totalBill = carts.productPrice * carts.productQuantity;
    // carts.productPrice = this.totalBill;
    console.log('..............', carts);
    console.log('...........', this.totalBill);
    this.selectedProduct = carts;
  }

  selectOrder(orders: Order) {
    this.selectedOrder = orders;
  }

  deleteProductFromCart(carts: Cart) {
    console.log(carts);
    this.userService.deleteDataFromCart(carts).subscribe(res => {
      console.log(res);
      console.log('delete');
      this.getCartData();

    },
      err => {
        console.log(err);
      });
  }

  addProductToOrderList(carts: Cart) {
    carts.productPrice = this.totalBill;
    console.log(carts);
    console.log('.............................................', carts.productPrice);
    this.userService.addProductToOrderList(carts).subscribe(res => {
      console.log(res);

    },
      err => {
        console.log(err);
      });
  }
  ngOnInit() {
  }

}
