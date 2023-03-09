import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // product = localStorage.getItem('product');
  // productName: any;
  // productPrice: any;
  // products: {name: any, price: any}[] = [];
  constructor(private router:Router){}

  // onSubmit() {
  //   const product = { name: this.productName, price: this.productPrice };
  //   this.products.push(product);
  //   localStorage.setItem('products', JSON.stringify(this.products));
  //   this.productName = '';
  //   this.router.navigate(['product'])
  //   // this.productPrice = null;
  // }
  

  productName: any;
  productPrice: any;
  products: {name: any, price: any}[] = [];

  ngOnInit() {
    const productsString = localStorage.getItem('products');
    if (productsString) {
      this.products = JSON.parse(productsString);
    }
  }

  onSubmit() {
    const product = { name: this.productName, price: this.productPrice };
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
    this.productName = '';
    this.productPrice = null;
  }

}
