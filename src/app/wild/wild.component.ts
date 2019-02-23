import { Component, OnInit } from '@angular/core';
import {ProductService} from '../message/shared/product.service';
import {ObservableInput} from 'rxjs/internal/types';
import {Product} from '../message/shared/product.model';
import {FormControl, FormGroup} from '@angular/forms';
import {FileService} from '../files/shared/file.service';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss']
})
export class WildComponent implements OnInit {

  fileToUpload: File;
  imageChangedEvent: any = '';
  products: ObservableInput<any[]>;
  productFormGroup: FormGroup;
  constructor(private ps: ProductService,
              private fs: FileService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.productFormGroup = new FormGroup({
  name: new FormControl(''),
  brand: new FormControl('')
});

  }

  ngOnInit() {
    this.products = this.ps.getProducts()
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
    this.fs.upload(file);
    debugger;
  }

}
