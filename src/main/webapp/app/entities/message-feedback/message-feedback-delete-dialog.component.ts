import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IMessageFeedback } from 'app/shared/model/message-feedback.model';
import { MessageFeedbackService } from './message-feedback.service';

@Component({
  templateUrl: './message-feedback-delete-dialog.component.html',
})
export class MessageFeedbackDeleteDialogComponent {
  messageFeedback?: IMessageFeedback;

  constructor(
    protected messageFeedbackService: MessageFeedbackService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.messageFeedbackService.delete(id).subscribe(() => {
      this.eventManager.broadcast('messageFeedbackListModification');
      this.activeModal.close();
    });
  }
}
