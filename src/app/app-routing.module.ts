import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';

import {NewMessageComponent} from './new-message/new-message.component';


const routes: Routes = [
  { path: 'new-message', component: NewMessageComponent}
];


@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
