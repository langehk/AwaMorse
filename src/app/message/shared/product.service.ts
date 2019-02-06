import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs/internal/Observable';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  getProducts(): Observable<any> {

    return this.db.collection('products').valueChanges();
    /**
     * return this.db.collection('products', ref => ref.orderBy('messages')).valueChanges();
      */
  }

  deleteProducts(): Observable<any> {
    return this.db.collection('products').valueChanges();
  }

  getProductById(id: string) {
    this.db.doc<Product>('products/' + id).get()
      .subscribe(productFound => {

        const protData = productFound.data() as Product;
      });
  }

  update(product: Product) {
    this.db.doc<Product>('products/' + product.id)
      .update(product)
      .then(prod => {
        debugger;
      });
  }

  delete(product: Product) {
    this.db.doc<Product>('products/' + product.id)
      .delete()
      .then(prod => {
        debugger;
      });
  }

  add(product: Product) {
    this.db.collection<Product>('products')
      .add(product)
      .then(prod => {
        debugger;
      });
  }
}







