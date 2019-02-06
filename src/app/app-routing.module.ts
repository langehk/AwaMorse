import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';

import {NewMessageComponent} from './new-message/new-message.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ShowLogMessagesComponent} from './show-log-messages/show-log-messages.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  { path: 'new-message', component: NewMessageComponent},
  {path: 'show-log-message', component: ShowLogMessagesComponent}

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
