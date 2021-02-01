import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ISystem } from 'app/shared/model/system.model';
import { SystemService } from './system.service';

@Component({
  templateUrl: './system-delete-dialog.component.html',
})
export class SystemDeleteDialogComponent {
  system?: ISystem;

  constructor(protected systemService: SystemService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.systemService.delete(id).subscribe(() => {
      this.eventManager.broadcast('systemListModification');
      this.activeModal.close();
    });
  }
}
