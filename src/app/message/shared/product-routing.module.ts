import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WildComponent} from '../../wild/wild.component';
import {ProductAddComponent} from '../../product-add/product-add.component';


const routes: Routes = [
  {
    path: 'add',
    component: ProductAddComponent
  },
  {
    path: '',
    component: WildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
