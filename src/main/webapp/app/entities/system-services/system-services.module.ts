import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerFeedBackSharedModule } from 'app/shared/shared.module';
import { SystemServicesComponent } from './system-services.component';
import { SystemServicesDetailComponent } from './system-services-detail.component';
import { SystemServicesUpdateComponent } from './system-services-update.component';
import { SystemServicesDeleteDialogComponent } from './system-services-delete-dialog.component';
import { systemServicesRoute } from './system-services.route';

@NgModule({
  imports: [CustomerFeedBackSharedModule, RouterModule.forChild(systemServicesRoute)],
  declarations: [
    SystemServicesComponent,
    SystemServicesDetailComponent,
    SystemServicesUpdateComponent,
    SystemServicesDeleteDialogComponent,
  ],
  entryComponents: [SystemServicesDeleteDialogComponent],
})
export class CustomerFeedBackSystemServicesModule {}
