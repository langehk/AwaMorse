import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {MessageService} from '../message/shared/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  title = 'Morse App';
  messages: any[];
  messagesPaged: Observable<any[]>;
  latest: any;
  message = '';
  humanReadableMessage = '';
  time: number;
  constructor(private messageService: MessageService) {
    this.messageService.getMessagesLastByLimit(2).subscribe(messages => {
      this.messages = messages;
      this.latest = messages[0];
    });
  }


  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }

  send() {
    const time = new Date();
    this.messageService.addMessage(time, this.message.trim() ).then(done => {
      console.log('saved');
    }, err => {
      console.log(err);
    });
    this.clear();
  }

  morse(active) {
    if (active) {
      this.time = (new Date()).getTime();
    } else {
      const clickTime = (new Date()).getTime() - this.time;
      if (clickTime > 120) {
        this.message += '-';
      } else {
        this.message += '.';
      }
      this.time = -1;
    }
  }

  space() {
    this.message += '/';
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  next() {
    this.message += ' ';
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  clear() {
    this.message = '';
    this.humanReadableMessage = '';
  }


}
