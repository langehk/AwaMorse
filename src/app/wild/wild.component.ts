import { Component, OnInit } from '@angular/core';
import {ProductService} from '../message/shared/product.service';
import {ObservableInput} from 'rxjs/internal/types';

@Component({
  selector: 'app-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss']
})
export class WildComponent implements OnInit {
  products: ObservableInput<any[]>;
  constructor(private ps: ProductService) { }

  ngOnInit() {
    this.products = this.ps.getProducts();
  }

}
