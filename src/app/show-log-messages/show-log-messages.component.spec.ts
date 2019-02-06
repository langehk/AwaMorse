import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLogMessagesComponent } from './show-log-messages.component';

describe('ShowLogMessagesComponent', () => {
  let component: ShowLogMessagesComponent;
  let fixture: ComponentFixture<ShowLogMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLogMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLogMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
