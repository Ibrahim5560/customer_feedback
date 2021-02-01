import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IMessages } from 'app/shared/model/messages.model';
import { MessagesService } from './messages.service';

@Component({
  templateUrl: './messages-delete-dialog.component.html',
})
export class MessagesDeleteDialogComponent {
  messages?: IMessages;

  constructor(protected messagesService: MessagesService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.messagesService.delete(id).subscribe(() => {
      this.eventManager.broadcast('messagesListModification');
      this.activeModal.close();
    });
  }
}
