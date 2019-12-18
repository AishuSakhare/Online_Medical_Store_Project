import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit, DoCheck {



  constructor(public productService: ProductService) {
    // this.productService.getData().subscribe((data) => {
    //   console.log(data.productBeanList);
    //   this.products = data.productBeanList;
    // });
    this.getData();
    // this.productService.getData();
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
  getData() {
    this.productService.getData().subscribe((data) => {
      console.log(data.productBeanList);
      this.products = data.productBeanList;
    },
      err => {
        console.log(err);
      }
    );
  }

  selectProduct(products: Product) {
    this.selectedProduct = products;
  }


  deleteProduct(product: Product) {
    console.log(product);
    this.productService.deleteData(product).subscribe(res => {
      console.log(res);
      console.log('delete');
      this.getData();
    },
      err => {
        console.log(err);
      });
  }

  submitForm(form: NgForm) {
    this.productService.putData(form.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {

  }
  ngDoCheck(): void {
    // this.productService.getData().subscribe((data) => {
    //   this.products = data.productBeanList;
    // });
  }

}
