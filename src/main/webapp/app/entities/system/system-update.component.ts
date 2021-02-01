import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISystem, System } from 'app/shared/model/system.model';
import { SystemService } from './system.service';

@Component({
  selector: 'jhi-system-update',
  templateUrl: './system-update.component.html',
})
export class SystemUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nameAr: [],
    nameEn: [],
    code: [],
    status: [],
  });

  constructor(protected systemService: SystemService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ system }) => {
      this.updateForm(system);
    });
  }

  updateForm(system: ISystem): void {
    this.editForm.patchValue({
      id: system.id,
      nameAr: system.nameAr,
      nameEn: system.nameEn,
      code: system.code,
      status: system.status,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const system = this.createFromForm();
    if (system.id !== undefined) {
      this.subscribeToSaveResponse(this.systemService.update(system));
    } else {
      this.subscribeToSaveResponse(this.systemService.create(system));
    }
  }

  private createFromForm(): ISystem {
    return {
      ...new System(),
      id: this.editForm.get(['id'])!.value,
      nameAr: this.editForm.get(['nameAr'])!.value,
      nameEn: this.editForm.get(['nameEn'])!.value,
      code: this.editForm.get(['code'])!.value,
      status: this.editForm.get(['status'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISystem>>): void {
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
