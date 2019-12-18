import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-visitor-product-list',
  templateUrl: './visitor-product-list.component.html',
  styleUrls: ['./visitor-product-list.component.css']
})
export class VisitorProductListComponent implements OnInit {

  constructor(public productService: ProductService) {
    this.productService.getData().subscribe((data) => {
      console.log(data.productBeanList);
      this.products = data.productBeanList;
    });
  }


  selectedProduct: Product = {
    productId: null,
    productName: null,
    productCategory: null,
    productDescription: null,
    productQuantity: null,
    productPrice: null,

  };
  products: [];
  // getData() {
  //   this.productService.getData().subscribe((data) => {
  //     console.log(data.productBeanList);
  //     this.products = data.productBeanList;
  //   },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  selectProduct(products: Product) {
    this.selectedProduct = products;
  }
  ngOnInit() {
  }

}
