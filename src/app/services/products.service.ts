import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 products: Product[] = [

    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },


    
  ]

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return new Observable((observer) => {
      observer.next(this.products);
    })
 

  }
}
