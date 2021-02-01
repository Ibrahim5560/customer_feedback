import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISystemServices } from 'app/shared/model/system-services.model';
import { SystemServicesService } from './system-services.service';

@Component({
  templateUrl: './system-services-delete-dialog.component.html',
})
export class SystemServicesDeleteDialogComponent {
  systemServices?: ISystemServices;

  constructor(
    protected systemServicesService: SystemServicesService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.systemServicesService.delete(id).subscribe(() => {
      this.eventManager.broadcast('systemServicesListModification');
      this.activeModal.close();
    });
  }
}
