import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private productServices: ProductsService) {
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
    if (product.id && qty && Number(qty) > 0) {
      this.productServices.addToCart(product, qty);
    } else {
      alert('You must select a product');
    }
  }
}
