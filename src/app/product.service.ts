import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions ={
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

@Injectable()
export class ProductService {


  constructor(private http: HttpClient) { }
  private productsUrl = 'api/products';

  // Create a handleError method to handle all errors
  private handleError<T> (operation = 'operation', result?: T){
      return (error: any): Observable<T> => {
          console.error(error, `Operation: ${operation} `);
          return of(result as T);
      }
  }

  getProducts():Observable<Product[]>{
      // return of(products)
      // use the .pipe to add response to the observable
      // the response would be a catchError which will return a function with an empty array to catch the error(s)
      return this.http.get<Product[]>(this.productsUrl).pipe(
          tap(products => console.log('Fetched Products!')),
          catchError(this.handleError('getProducts', [])));

  }

  getProduct(id:number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
        tap(product=>console.log(`Fetched product of id ${id}!`, product)),
        catchError(this.handleError<Product>(`getProduct id=${id}`)));

}

    updateProduct(product: Product): Observable<Product> {
        return this.http.put(this.productsUrl, product, httpOptions).pipe(tap(_ => console.log(`Update Product of id ${product.id}!`)),
            catchError(this.handleError<any>('updateProduct')))

    }
}


