import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  newProduct: Product = new Product();
  productList: Product[] = [];
  colorList = ['Brown', 'Lightblue', 'Pink', 'Green'];
  colorProduct = '#383938';

  constructor() {
    this.productList.push(new Product(1, 'cahier', 2.5, 'grand cahier', 'lightblue'));
    this.productList.push(new Product(2, 'stylo', 1.99, 'stylo bleu', 'green'));
    this.productList.push(new Product(3, 'sac', 14, 'sac de sport'));
  }

  ngOnInit() {
  }

  onAdd() {
    this.newProduct.num = this.productList.length + 1;
    this.newProduct.color = this.colorProduct;
    this.productList.push(this.newProduct);
    this.newProduct = new Product();
    this.colorProduct = '#383938';
  }

}
