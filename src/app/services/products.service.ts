import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.js');
  }

  addToCart(product: Product, qty: string) {
    const storage = localStorage.getItem('cart');
    let cart = storage ? JSON.parse(storage) : [];
    let item;

    if (cart && cart.length > 0)
      item = cart.filter((el: any) => el.product.id === product.id)[0];

    if (item) {
      item.qty = Number(item.qty) + Number(qty);
    } else {
      cart.push({ product: product, qty: qty });
    }
    alert('Item added to cart sucessfully');
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
