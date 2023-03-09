import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: {name: any, price: any}[] = [];

  ngOnInit() {
    const productsString = localStorage.getItem('products');
    if (productsString) {
      this.products = JSON.parse(productsString);
    }
  }

  price = 10; // set initial price
  quantity = 1; // set initial quantity

  increaseQuantity() {
    this.quantity++;
    this.updatePrice();
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.updatePrice();
    }
  }

  updatePrice() {
    // update price based on quantity
    this.price = 10; // replace with your own price calculation logic
  }
}
