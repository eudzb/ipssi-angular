import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  searchProduct(maxPrice: number): Observable <Product[]> {
    return of([
      new Product(1, 'cahier', 2.5, 'grand cahier', 'lightblue'),
      new Product(2, 'stylo', 1.99, 'stylo bleu', 'green'),
      new Product(3, 'sac', 14, 'sac de sport')
    ]);
  }
}
