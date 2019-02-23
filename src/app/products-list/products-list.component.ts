import { Component, OnInit } from '@angular/core';
import {ProductService} from '../message/shared/product.service';
import {ObservableInput} from 'rxjs/internal/types';
import {Product} from '../message/shared/product.model';
import {FormControl, FormGroup} from '@angular/forms';
import {FileService} from '../files/shared/file.service';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-wild',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private ps: ProductService,
              private fs: FileService) {
  }

  ngOnInit() {
    this.products = this.ps.getProducts()
      .pipe(
        tap(products => {
          products.forEach(product => {
            if (product.pictureId) {
              this.fs.getFileUrl(product.pictureId)
                .subscribe(url => {
                  product.url = url;
                });
            }
          });
        })
      );
  }

  deleteProduct(product: Product) {
    const obs = this.ps.deleteProduct(product.id);
    obs.subscribe(productFromFirebase => {
      debugger;
      window.alert('product with id: ' + productFromFirebase.id + ' is Deleted');
    }, error1 => {
      debugger;
      window.alert('product not found id: ' + product.id);
    });
  }
}
