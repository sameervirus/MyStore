import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  cartitems: CartItem[] = [];
  client: any;
  totalQuantity: number = 0;
  totalPrice: number = 0.0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    const storage = localStorage.getItem('cart');
    this.cartitems = storage ? JSON.parse(storage) : [];
  }

  removeFromCart(cartItem: CartItem): void {
    if (
      confirm(
        `Are you sure you want to remove this item ( ${cartItem.product.name} ) from the cart?`
      )
    ) {
      this.cartitems = this.cartitems.filter(
        (c) => c.product.id !== cartItem.product.id
      );
    }
  }

  changeQty(cartItem: CartItem, qty: number): void {
    const newQty = Number(cartItem.qty) + qty;
    if (newQty > 0 && newQty < 11) {
      cartItem.qty = newQty.toString();
      this.totalItem(cartItem);
    } else {
      alert('Quantity must be between 1 and 10');
    }
  }

  totalItem(cartItem: CartItem) {
    return (Number(cartItem.qty) * Number(cartItem.product.price)).toFixed(2);
  }

  totalOrder() {
    this.totalQuantity = this.cartitems.reduce((acc: any, cartItem: any) => {
      return Number(acc) + Number(cartItem.qty);
    }, 0);
    this.totalPrice = this.cartitems.reduce((acc: any, cartItem: any) => {
      return (
        Number(acc) + Number(cartItem.product.price) * Number(cartItem.qty)
      );
    }, 0);
    localStorage.setItem('cart', JSON.stringify(this.cartitems));
    return [this.totalQuantity, this.totalPrice.toFixed(2)];
  }

  checkout(client: any) {
    const order = {
      client: client,
      products: this.cartitems,
      quantity: this.totalQuantity,
      price: this.totalPrice.toFixed(2),
    };
    localStorage.removeItem('cart');
    localStorage.setItem('order', JSON.stringify(order));
    this.router.navigateByUrl('/confirmation');
  }
}
