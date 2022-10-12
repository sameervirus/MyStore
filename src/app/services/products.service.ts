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

  addToCart(id: number, qty: string) {
    console.log();
    const storage = localStorage.getItem('cart');
    let cart = storage ? JSON.parse(storage) : [];
    let product;
    if (cart && cart.length > 0)
      product = cart.filter((el: any) => el.id === id)[0];

    if (product) {
      product.qty = Number(product.qty) + Number(qty);
    } else {
      cart.push({ id: id, qty: qty });
    }
    alert('Item added to cart sucessfully');
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
