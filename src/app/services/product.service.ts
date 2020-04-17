import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  products: Product[] = [
    new Product (1, 'Product 1', 'This is product 1. The product is sweet', 500),
    new Product (2, 'Product 2', 'This is product 2. The product is sweet', 1500),
    new Product (3, 'Product 3', 'This is product 3. The product is sweet', 25000),
    new Product (4, 'Product 4', 'This is product 4. The product is sweet', 3000),
    new Product (5, 'Product 5', 'This is product 5. The product is sweet', 2000),
    new Product (6, 'Product 6', 'This is product 6. The product is sweet', 9500),
    new Product (7, 'Product 7', 'This is product 7. The product is sweet', 11500),
    new Product (8, 'Product 8', 'This is product 8. The product is sweet', 5000),
  ]

  constructor() { }

  getProducts(): Product[]{
      //TODO populate products from API and return an Observable
    return this.products
  }
}
