import { Component } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent {
  constructor(){}
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
  }

  buttonText = 'Add to cart';

  changeButtonText() {
    this.buttonText = 'Product Added to cart';
  }

}
