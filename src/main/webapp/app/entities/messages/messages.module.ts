import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerFeedBackSharedModule } from 'app/shared/shared.module';
import { MessagesComponent } from './messages.component';
import { MessagesDetailComponent } from './messages-detail.component';
import { MessagesUpdateComponent } from './messages-update.component';
import { MessagesDeleteDialogComponent } from './messages-delete-dialog.component';
import { messagesRoute } from './messages.route';

@NgModule({
  imports: [CustomerFeedBackSharedModule, RouterModule.forChild(messagesRoute)],
  declarations: [MessagesComponent, MessagesDetailComponent, MessagesUpdateComponent, MessagesDeleteDialogComponent],
  entryComponents: [MessagesDeleteDialogComponent],
})
export class CustomerFeedBackMessagesModule {}
