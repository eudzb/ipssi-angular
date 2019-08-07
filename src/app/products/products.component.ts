import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  newProduct: Product = new Product();
  productList: Product[] = [];
  colorList = ['Blue', 'Brown', 'Green', 'Grey', 'Lightblue', 'Pink', 'Red', 'Violet'];
  colorProduct = '#383938';
  maxPrice: number;

  constructor(private prodService: ProductService) {
    this.prodService.searchProduct(null).subscribe(
      list => this.productList = list,
      err => console.log(err)
    );
  }

  ngOnInit() {
  }

  onAdd() {
    this.newProduct.num = this.productList.length + 1;
    this.newProduct.color = this.colorProduct;
    // this.productList.push(this.newProduct);
    this.prodService.addProduct(this.newProduct).subscribe((produitEnregistre) => {
      console.log('produit enregistre = ' + produitEnregistre);
      console.log('produit enregistre = ' + JSON.stringify(produitEnregistre));
      this.onMaxPrice();
    },
    (err) => { console.log(err); });
    this.newProduct = new Product();
    this.colorProduct = '#383938';
  }

  onMaxPrice() {
    this.prodService.searchProduct(this.maxPrice).subscribe(
      (listeProd) => { this.productList = listeProd; },
      (err) => { console.log(err); });
  }

  // onAjoutProduit() {
  //   this.prodService.addProduct(this.newProduct)
  //       .subscribe( (produitEnregistre) => {
  //                         console.log('produit enregistre = ' + produitEnregistre);
  //                         console.log('produit enregistre = ' +
  //                              JSON.stringify(produitEnregistre));
  //                         this.onMaxPrice();
  //                        },
  //                   (err) => { console.log(err); });
  //   this.newProduct = new Product();
  // }

}
