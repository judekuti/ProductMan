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
      this.productService.getProduct(2).subscribe(product=> console.log(product));

  }
  ngOnInit() {
      this.getProducts()
      // this.selectedProduct = this.products[0]
  }
  getProducts():void{
     const products = this.productService.getProducts().subscribe(products=> this.products = products)
     // this.products = products;
  }

  saveProduct(product):void{
      this.productService.updateProduct(product).subscribe(()=> console.log('Product Saved'));
  }

  add(name: string, price: number): void{
     this.productService.addProduct({name, price } as Product).subscribe(product => {
         this.products.push(product);
     })

  }

}
