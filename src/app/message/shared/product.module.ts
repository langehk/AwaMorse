import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import {FilesModule} from '../../files/files.module';
import {ProductsRoutingModule} from './product-routing.module';
import {WildComponent} from '../../wild/wild.component';
import {ProductAddComponent} from '../../product-add/product-add.component';

@NgModule({
  declarations: [WildComponent, ProductAddComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FilesModule
  ]
})
export class ProductsModule { }
