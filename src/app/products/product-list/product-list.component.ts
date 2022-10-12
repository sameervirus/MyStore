import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  cart: any[] = [];
  products: Product[] = [];

  constructor(private productServices: ProductsService) {}

  ngOnInit(): void {
    this.productServices
      .getProducts()
      .subscribe((arg) => (this.products = arg));
  }

  addItemToCart(item: any): void {
    if (item.id && item.qty && Number(item.qty) > 0) {
      this.productServices.addToCart(item.id, item.qty);
    } else {
      alert('You must select a product');
    }
  }
}
