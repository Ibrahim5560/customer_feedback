import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IMessageFeedback, MessageFeedback } from 'app/shared/model/message-feedback.model';
import { MessageFeedbackService } from './message-feedback.service';

@Component({
  selector: 'jhi-message-feedback-update',
  templateUrl: './message-feedback-update.component.html',
})
export class MessageFeedbackUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    systemId: [],
    centerId: [],
    systemServicesId: [],
    counter: [],
    trsId: [],
    userId: [],
    message: [],
    status: [],
    feedback: [],
    applicantName: [],
  });

  constructor(
    protected messageFeedbackService: MessageFeedbackService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ messageFeedback }) => {
      this.updateForm(messageFeedback);
    });
  }

  updateForm(messageFeedback: IMessageFeedback): void {
    this.editForm.patchValue({
      id: messageFeedback.id,
      systemId: messageFeedback.systemId,
      centerId: messageFeedback.centerId,
      systemServicesId: messageFeedback.systemServicesId,
      counter: messageFeedback.counter,
      trsId: messageFeedback.trsId,
      userId: messageFeedback.userId,
      message: messageFeedback.message,
      status: messageFeedback.status,
      feedback: messageFeedback.feedback,
      applicantName: messageFeedback.applicantName,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const messageFeedback = this.createFromForm();
    if (messageFeedback.id !== undefined) {
      this.subscribeToSaveResponse(this.messageFeedbackService.update(messageFeedback));
    } else {
      this.subscribeToSaveResponse(this.messageFeedbackService.create(messageFeedback));
    }
  }

  private createFromForm(): IMessageFeedback {
    return {
      ...new MessageFeedback(),
      id: this.editForm.get(['id'])!.value,
      systemId: this.editForm.get(['systemId'])!.value,
      centerId: this.editForm.get(['centerId'])!.value,
      systemServicesId: this.editForm.get(['systemServicesId'])!.value,
      counter: this.editForm.get(['counter'])!.value,
      trsId: this.editForm.get(['trsId'])!.value,
      userId: this.editForm.get(['userId'])!.value,
      message: this.editForm.get(['message'])!.value,
      status: this.editForm.get(['status'])!.value,
      feedback: this.editForm.get(['feedback'])!.value,
      applicantName: this.editForm.get(['applicantName'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IMessageFeedback>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
