import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerFeedBackSharedModule } from 'app/shared/shared.module';
import { SystemComponent } from './system.component';
import { SystemDetailComponent } from './system-detail.component';
import { SystemUpdateComponent } from './system-update.component';
import { SystemDeleteDialogComponent } from './system-delete-dialog.component';
import { systemRoute } from './system.route';

@NgModule({
  imports: [CustomerFeedBackSharedModule, RouterModule.forChild(systemRoute)],
  declarations: [SystemComponent, SystemDetailComponent, SystemUpdateComponent, SystemDeleteDialogComponent],
  entryComponents: [SystemDeleteDialogComponent],
})
export class CustomerFeedBackSystemModule {}
