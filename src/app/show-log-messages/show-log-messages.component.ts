import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message/shared/message.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-show-log-messages',
  templateUrl: './show-log-messages.component.html',
  styleUrls: ['./show-log-messages.component.scss']
})
export class ShowLogMessagesComponent {

  messages: any[];
  subMessages: Subscription;
  latest: any;

  constructor(private messageService: MessageService) {
    this.subMessages = this.messageService.getMessagesLastByLimit(10)
      .subscribe(messages => {
        this.messages = messages;
        this.latest = messages[0];
      });
  }

  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }

}
