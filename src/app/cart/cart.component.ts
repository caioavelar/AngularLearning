import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({name:'', address:''});
    console.log(this.items);
  }

  onSubmit(customerData){
    console.warn('Your order has been submitted', customerData,' and its price is:', 
    this.cartService.getTotalPrice());

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}