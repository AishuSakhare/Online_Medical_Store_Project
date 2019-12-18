import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-user-product-list',
  templateUrl: './user-product-list.component.html',
  styleUrls: ['./user-product-list.component.css']
})
export class UserProductListComponent implements OnInit {

  selectedProduct: Product = {
    productId: null,
    productName: null,
    productCategory: null,
    productDescription: null,
    productQuantity: null,
    productPrice: null,

  };

  products: [];

  checkProductQuantity: string;

  constructor(public productService: ProductService, public userService: UserService) {
    this.productService.getData().subscribe((data) => {
      console.log(data.productBeanList);
      this.products = data.productBeanList;
    });
  }
  selectProduct(products: Product) {
    this.selectedProduct = products;
    console.log(this.selectedProduct);
  }

  // addProductToCart(addProductToCart: Product) {
  //   console.log(addProductToCart);
  //   this.userService.postData(addProductToCart).subscribe(res => {
  //     console.log(res);
  //   }, err => {
  //     console.log(err);
  //   });
  // }
  submitForm(addProductToCart1: NgForm) {

    console.log(addProductToCart1.value);
    console.log(addProductToCart1.value, this.selectedProduct.productQuantity);
    if (addProductToCart1.value.productQuantity <= this.selectedProduct.productQuantity) {
      this.userService.postData(addProductToCart1.value).subscribe(res => {
        console.log(res);

      },
        err => {
          console.log(err);
        });
    } else {
      alert(`quatity should be less than ${this.selectedProduct.productQuantity}`);
    }
  }

  ngOnInit() {
  }

}
