import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IMessages, Messages } from 'app/shared/model/messages.model';
import { MessagesService } from './messages.service';
import { ICenter } from 'app/shared/model/center.model';
import { CenterService } from 'app/entities/center/center.service';
import { ISystem } from 'app/shared/model/system.model';
import { SystemService } from 'app/entities/system/system.service';
import { ISystemServices } from 'app/shared/model/system-services.model';
import { SystemServicesService } from 'app/entities/system-services/system-services.service';
import { IUsers } from 'app/shared/model/users.model';
import { UsersService } from 'app/entities/users/users.service';

type SelectableEntity = ICenter | ISystem | ISystemServices | IUsers;

@Component({
  selector: 'jhi-messages-update',
  templateUrl: './messages-update.component.html',
})
export class MessagesUpdateComponent implements OnInit {
  isSaving = false;
  centers: ICenter[] = [];
  systems: ISystem[] = [];
  systemservices: ISystemServices[] = [];
  users: IUsers[] = [];

  editForm = this.fb.group({
    id: [],
    counter: [],
    trsId: [],
    userId: [],
    message: [],
    status: [],
    applicantName: [],
    centerId: [],
    systemId: [],
    systemServicesId: [],
    usersId: [],
  });

  constructor(
    protected messagesService: MessagesService,
    protected centerService: CenterService,
    protected systemService: SystemService,
    protected systemServicesService: SystemServicesService,
    protected usersService: UsersService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ messages }) => {
      this.updateForm(messages);

      this.centerService.query().subscribe((res: HttpResponse<ICenter[]>) => (this.centers = res.body || []));

      this.systemService.query().subscribe((res: HttpResponse<ISystem[]>) => (this.systems = res.body || []));

      this.systemServicesService.query().subscribe((res: HttpResponse<ISystemServices[]>) => (this.systemservices = res.body || []));

      this.usersService.query().subscribe((res: HttpResponse<IUsers[]>) => (this.users = res.body || []));
    });
  }

  updateForm(messages: IMessages): void {
    this.editForm.patchValue({
      id: messages.id,
      counter: messages.counter,
      trsId: messages.trsId,
      userId: messages.userId,
      message: messages.message,
      status: messages.status,
      applicantName: messages.applicantName,
      centerId: messages.centerId,
      systemId: messages.systemId,
      systemServicesId: messages.systemServicesId,
      usersId: messages.usersId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const messages = this.createFromForm();
    if (messages.id !== undefined) {
      this.subscribeToSaveResponse(this.messagesService.update(messages));
    } else {
      this.subscribeToSaveResponse(this.messagesService.create(messages));
    }
  }

  private createFromForm(): IMessages {
    return {
      ...new Messages(),
      id: this.editForm.get(['id'])!.value,
      counter: this.editForm.get(['counter'])!.value,
      trsId: this.editForm.get(['trsId'])!.value,
      userId: this.editForm.get(['userId'])!.value,
      message: this.editForm.get(['message'])!.value,
      status: this.editForm.get(['status'])!.value,
      applicantName: this.editForm.get(['applicantName'])!.value,
      centerId: this.editForm.get(['centerId'])!.value,
      systemId: this.editForm.get(['systemId'])!.value,
      systemServicesId: this.editForm.get(['systemServicesId'])!.value,
      usersId: this.editForm.get(['usersId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IMessages>>): void {
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

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
