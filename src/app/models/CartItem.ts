import { Product } from './Product';

export class CartItem {
  product: Product;
  qty: string;
  constructor() {
    this.product = new Product();
    this.qty = '';
  }
}
