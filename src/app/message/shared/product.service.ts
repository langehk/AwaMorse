import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs/internal/Observable';
import {Product} from './product.model';
import {map, switchMap, tap} from 'rxjs/operators';
import {storeCleanupWithContext} from '@angular/core/src/render3/instructions';
import {from} from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  getProducts(): Observable<{ }[]> {
    return this.db
      .collection<Product>('products')
      // This will return an Observable
      .snapshotChanges()
      .pipe(
        map(products => {
          return products.map(action => {
            const data = action.payload.doc.data() as Product;
            return {
              id: action.payload.doc.id,
              name: data.name,
              brand: data.brand,
              pictureId: data.pictureId
            };
          });
        })
      );
  }

  getProduct(id: string) {
    this.db.doc<Product>('products/' + id).get()
      .subscribe(productFound => {

        const protData = productFound.data() as Product;
      });
  }



  deleteProduct(product: Product) {
    this.db.doc<Product>('products/' + product.id)
      .delete();
  }


  addProduct(product: Product): Observable<Product> {
    debugger;
    return from (
      this.db.collection<Product>('products').add(
        {
          name: product.name,
          brand: product.brand,
          pictureId: product.pictureId
          //,pictureId
        }
      )
    ).pipe(
        map( productRef => {
          product.id = productRef.id;
          return product;
        })
    );
  }


}


