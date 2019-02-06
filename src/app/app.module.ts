import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import {MessageService} from './message/shared/message.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { NewMessageComponent } from './new-message/new-message.component';
import { AppRoutingModule } from './app-routing.module';
import { Component, HostBinding } from '@angular/core';
import {animate, transition, trigger} from '@angular/animations';
import { AnimationdemoComponent } from './animationdemo/animationdemo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowLogMessagesComponent } from './show-log-messages/show-log-messages.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMessageComponent,
    AnimationdemoComponent,
    WelcomeComponent,
    ShowLogMessagesComponent,
    WildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    MomentModule, AppRoutingModule, TooltipModule.forRoot(), ButtonsModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
