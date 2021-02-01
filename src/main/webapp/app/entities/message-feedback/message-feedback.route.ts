import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IMessageFeedback, MessageFeedback } from 'app/shared/model/message-feedback.model';
import { MessageFeedbackService } from './message-feedback.service';
import { MessageFeedbackComponent } from './message-feedback.component';
import { MessageFeedbackDetailComponent } from './message-feedback-detail.component';
import { MessageFeedbackUpdateComponent } from './message-feedback-update.component';

@Injectable({ providedIn: 'root' })
export class MessageFeedbackResolve implements Resolve<IMessageFeedback> {
  constructor(private service: MessageFeedbackService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMessageFeedback> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((messageFeedback: HttpResponse<MessageFeedback>) => {
          if (messageFeedback.body) {
            return of(messageFeedback.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new MessageFeedback());
  }
}

export const messageFeedbackRoute: Routes = [
  {
    path: '',
    component: MessageFeedbackComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'customerFeedBackApp.messageFeedback.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: MessageFeedbackDetailComponent,
    resolve: {
      messageFeedback: MessageFeedbackResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.messageFeedback.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: MessageFeedbackUpdateComponent,
    resolve: {
      messageFeedback: MessageFeedbackResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.messageFeedback.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: MessageFeedbackUpdateComponent,
    resolve: {
      messageFeedback: MessageFeedbackResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.messageFeedback.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
