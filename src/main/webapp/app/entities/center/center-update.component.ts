import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICenter, Center } from 'app/shared/model/center.model';
import { CenterService } from './center.service';

@Component({
  selector: 'jhi-center-update',
  templateUrl: './center-update.component.html',
})
export class CenterUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nameAr: [],
    nameEn: [],
    code: [],
    status: [],
  });

  constructor(protected centerService: CenterService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ center }) => {
      this.updateForm(center);
    });
  }

  updateForm(center: ICenter): void {
    this.editForm.patchValue({
      id: center.id,
      nameAr: center.nameAr,
      nameEn: center.nameEn,
      code: center.code,
      status: center.status,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const center = this.createFromForm();
    if (center.id !== undefined) {
      this.subscribeToSaveResponse(this.centerService.update(center));
    } else {
      this.subscribeToSaveResponse(this.centerService.create(center));
    }
  }

  private createFromForm(): ICenter {
    return {
      ...new Center(),
      id: this.editForm.get(['id'])!.value,
      nameAr: this.editForm.get(['nameAr'])!.value,
      nameEn: this.editForm.get(['nameEn'])!.value,
      code: this.editForm.get(['code'])!.value,
      status: this.editForm.get(['status'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICenter>>): void {
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
