import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  getTotalPrice(){
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  }


  constructor(
    private http: HttpClient,
  ) { }

}