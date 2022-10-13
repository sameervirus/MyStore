import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private productServices: ProductsService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: '',
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productServices.getProducts().subscribe((res) => {
      this.product = res.find((p) => p.id === id);
    });
  }

  addToCart(product: Product, qty: string) {
    if (product && qty && Number(qty) > 0) {
      this.productServices.addToCart(product, qty);
    } else {
      alert('You must select a product');
    }
  }
}
