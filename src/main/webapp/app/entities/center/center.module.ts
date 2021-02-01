import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerFeedBackSharedModule } from 'app/shared/shared.module';
import { CenterComponent } from './center.component';
import { CenterDetailComponent } from './center-detail.component';
import { CenterUpdateComponent } from './center-update.component';
import { CenterDeleteDialogComponent } from './center-delete-dialog.component';
import { centerRoute } from './center.route';

@NgModule({
  imports: [CustomerFeedBackSharedModule, RouterModule.forChild(centerRoute)],
  declarations: [CenterComponent, CenterDetailComponent, CenterUpdateComponent, CenterDeleteDialogComponent],
  entryComponents: [CenterDeleteDialogComponent],
})
export class CustomerFeedBackCenterModule {}
