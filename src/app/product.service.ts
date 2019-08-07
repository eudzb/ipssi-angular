import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  addProduct(p: Product): Observable<Product> {
    const url = './catalogue/private/products';
    return this.http.post<Product>(url, p, {headers: this._headers});
  }

  searchProduct(maxPrice: number): Observable <Product[]> {
    let url = './catalogue/public/products';
    if (maxPrice) {
      url += '?maxPrice=' + maxPrice;
    }
    return this.http.get<Product[]>(url).pipe(
      map(
        (prods) => prods.sort( (p1, p2) => (p1.price - p2.price))
      )
    );
  }

}
