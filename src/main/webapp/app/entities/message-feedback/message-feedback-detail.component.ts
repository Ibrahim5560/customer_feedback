import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMessageFeedback } from 'app/shared/model/message-feedback.model';

@Component({
  selector: 'jhi-message-feedback-detail',
  templateUrl: './message-feedback-detail.component.html',
})
export class MessageFeedbackDetailComponent implements OnInit {
  messageFeedback: IMessageFeedback | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ messageFeedback }) => (this.messageFeedback = messageFeedback));
  }

  previousState(): void {
    window.history.back();
  }
}
