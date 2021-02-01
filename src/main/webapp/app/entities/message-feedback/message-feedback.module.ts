import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerFeedBackSharedModule } from 'app/shared/shared.module';
import { MessageFeedbackComponent } from './message-feedback.component';
import { MessageFeedbackDetailComponent } from './message-feedback-detail.component';
import { MessageFeedbackUpdateComponent } from './message-feedback-update.component';
import { MessageFeedbackDeleteDialogComponent } from './message-feedback-delete-dialog.component';
import { messageFeedbackRoute } from './message-feedback.route';

@NgModule({
  imports: [CustomerFeedBackSharedModule, RouterModule.forChild(messageFeedbackRoute)],
  declarations: [
    MessageFeedbackComponent,
    MessageFeedbackDetailComponent,
    MessageFeedbackUpdateComponent,
    MessageFeedbackDeleteDialogComponent,
  ],
  entryComponents: [MessageFeedbackDeleteDialogComponent],
})
export class CustomerFeedBackMessageFeedbackModule {}
