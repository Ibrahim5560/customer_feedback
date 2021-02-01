import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMessages } from 'app/shared/model/messages.model';

@Component({
  selector: 'jhi-messages-detail',
  templateUrl: './messages-detail.component.html',
})
export class MessagesDetailComponent implements OnInit {
  messages: IMessages | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ messages }) => (this.messages = messages));
  }

  previousState(): void {
    window.history.back();
  }
}
