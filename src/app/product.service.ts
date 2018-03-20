import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const products = [{
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


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  private productsUrl = 'api/products';

  getProducts():Observable<Product[]>{
      // return of(products)
      return this.http.get<Product[]>(this.productsUrl);

  }

}
