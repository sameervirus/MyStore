import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  cart: [] = [];
  @Input() product: Product;
  @Output() carted = new EventEmitter();

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: '',
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  addToCart(product: Product, qty: string): void {
    let item = {
      id: product.id,
      qty: qty,
    };
    this.carted.emit(item);
  }
}
