import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'system',
        loadChildren: () => import('./system/system.module').then(m => m.CustomerFeedBackSystemModule),
      },
      {
        path: 'system-services',
        loadChildren: () => import('./system-services/system-services.module').then(m => m.CustomerFeedBackSystemServicesModule),
      },
      {
        path: 'center',
        loadChildren: () => import('./center/center.module').then(m => m.CustomerFeedBackCenterModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.CustomerFeedBackUsersModule),
      },
      {
        path: 'messages',
        loadChildren: () => import('./messages/messages.module').then(m => m.CustomerFeedBackMessagesModule),
      },
      {
        path: 'message-feedback',
        loadChildren: () => import('./message-feedback/message-feedback.module').then(m => m.CustomerFeedBackMessageFeedbackModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class CustomerFeedBackEntityModule {}
