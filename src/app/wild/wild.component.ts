import { Component, OnInit } from '@angular/core';
import {ProductService} from '../message/shared/product.service';
import {ObservableInput} from 'rxjs/internal/types';
import {Product} from '../message/shared/product.model';

@Component({
  selector: 'app-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss']
})
export class WildComponent implements OnInit {
  products: ObservableInput<any[]>;
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  updateProduct(product: Product) {
    product.name = product.name + '1';
    this.ps.update(product);
  }

  deleteProduct(product: Product) {
    this.ps.delete(product);
  }

  addProduct() {
    this.ps.add({name: 'SM7 wedge 60degree', brand: 'Titleist'});
  }

  getDetails(product: Product) {
    this.ps.getProduct(product.id);
  }

  getProducts() {
    this.products = this.ps.getProducts();
  }

}
