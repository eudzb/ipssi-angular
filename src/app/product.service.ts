import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  searchProduct(maxPrice: number): Observable <Product[]> {
    const url = 'http://localhost:8282/catalogue/public/products';
    return this.http.get<Product[]>(url);
  }
}
