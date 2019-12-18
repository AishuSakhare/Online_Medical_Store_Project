import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  backendRespnse: any;



  submitForm(addProduct: NgForm) {
    console.log(addProduct.value);
    this.productService.postData(addProduct.value).subscribe(res => {
      console.log('........response', res);
      this.backendRespnse = res;
      console.log('.....backendresponse', this.backendRespnse);
      addProduct.reset();
    },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }
}
