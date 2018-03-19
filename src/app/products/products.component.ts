import { Component, OnInit } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [{
        id: 1,
        name:"Tripod Stand",
        price: 200,
        category: "Support Aparatus"
    },
    {
        id: 2,
        name: "Testtube Rack",
        price: 40,
        category: "Support Aparatus"
    },
    {
        id: 3,
        name: "Conical Flask",
        price: 50,
        category: "Measuring Aparatus"
    }]

selectedProduct: Product;
constructor() { }

onSelectedProduct(product) {
      this.selectedProduct = product;

  }
  ngOnInit() {
      // this.selectedProduct = this.products[0]
  }

}
