import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[];
selectedProduct: Product;
constructor(private productService: ProductService) { }

onSelectedProduct(product) {
      this.selectedProduct = product;

  }
  ngOnInit() {
      this.getProducts()
      // this.selectedProduct = this.products[0]
  }
  getProducts():void{
     const products = this.productService.getProducts();
     this.products = products;
  }

}
