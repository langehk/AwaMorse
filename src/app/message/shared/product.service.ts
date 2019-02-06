import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs/internal/Observable';

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
}




