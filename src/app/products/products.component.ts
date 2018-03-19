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
constructor(private productSevice: ProductService) { }

onSelectedProduct(product) {
      this.selectedProduct = product;

  }
  ngOnInit() {
      // this.selectedProduct = this.products[0]
  }

}
