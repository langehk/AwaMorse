import { Component, OnInit } from '@angular/core';
import {ProductService} from '../message/shared/product.service';
import {ObservableInput} from 'rxjs/internal/types';
import {Product} from '../message/shared/product.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss']
})
export class WildComponent implements OnInit {
  products: ObservableInput<any[]>;
  productFormGroup: FormGroup;
  constructor(private ps: ProductService) {
    this.productFormGroup = new FormGroup({
  name: new FormControl(''),
  brand: new FormControl('')
});

  }

  ngOnInit() {
    this.getProducts();
  }

  updateProduct(product: Product) {
    product.name = product.name + '1',
      product.brand = product.brand + '1';
    this.ps.update(product);
  }


  deleteProduct(product: Product) {
    this.ps.deleteProduct(product);
  }

  addProduct() {
    const productData = this.productFormGroup.value;
    this.ps.addProduct(productData)
      .subscribe(product => {
        window.alert('product with id: ' + product.id + ' and name: ' + product.name + ' is added');
      });

  }

  getDetails(product: Product) {
    this.ps.getProduct(product.id);
  }

  getProducts() {
    this.products = this.ps.getProducts();
  }

  uploadFile(event) {
    const file = event.target.files[0];
    debugger;
  }

}
