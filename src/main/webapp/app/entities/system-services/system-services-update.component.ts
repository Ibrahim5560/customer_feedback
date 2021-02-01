import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ISystemServices, SystemServices } from 'app/shared/model/system-services.model';
import { SystemServicesService } from './system-services.service';
import { ISystem } from 'app/shared/model/system.model';
import { SystemService } from 'app/entities/system/system.service';

@Component({
  selector: 'jhi-system-services-update',
  templateUrl: './system-services-update.component.html',
})
export class SystemServicesUpdateComponent implements OnInit {
  isSaving = false;
  systems: ISystem[] = [];

  editForm = this.fb.group({
    id: [],
    nameAr: [],
    nameEn: [],
    code: [],
    status: [],
    systemId: [],
  });

  constructor(
    protected systemServicesService: SystemServicesService,
    protected systemService: SystemService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ systemServices }) => {
      this.updateForm(systemServices);

      this.systemService.query().subscribe((res: HttpResponse<ISystem[]>) => (this.systems = res.body || []));
    });
  }

  updateForm(systemServices: ISystemServices): void {
    this.editForm.patchValue({
      id: systemServices.id,
      nameAr: systemServices.nameAr,
      nameEn: systemServices.nameEn,
      code: systemServices.code,
      status: systemServices.status,
      systemId: systemServices.systemId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const systemServices = this.createFromForm();
    if (systemServices.id !== undefined) {
      this.subscribeToSaveResponse(this.systemServicesService.update(systemServices));
    } else {
      this.subscribeToSaveResponse(this.systemServicesService.create(systemServices));
    }
  }

  private createFromForm(): ISystemServices {
    return {
      ...new SystemServices(),
      id: this.editForm.get(['id'])!.value,
      nameAr: this.editForm.get(['nameAr'])!.value,
      nameEn: this.editForm.get(['nameEn'])!.value,
      code: this.editForm.get(['code'])!.value,
      status: this.editForm.get(['status'])!.value,
      systemId: this.editForm.get(['systemId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISystemServices>>): void {
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

  trackById(index: number, item: ISystem): any {
    return item.id;
  }
}
