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


  getProducts() {
    this.products = this.ps.getProducts();
  }

  deleteProducts(product: Product) {
    this.ps.delete(product);
  }

  updateProduct(product: Product)
  {
    product.name = product.name + '1';
    this.ps.update(product);
  }

  addProduct(){
    this.ps.add({name: 'New Product'});
  }




}
