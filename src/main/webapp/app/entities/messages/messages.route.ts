import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IMessages, Messages } from 'app/shared/model/messages.model';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages.component';
import { MessagesDetailComponent } from './messages-detail.component';
import { MessagesUpdateComponent } from './messages-update.component';

@Injectable({ providedIn: 'root' })
export class MessagesResolve implements Resolve<IMessages> {
  constructor(private service: MessagesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IMessages> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((messages: HttpResponse<Messages>) => {
          if (messages.body) {
            return of(messages.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Messages());
  }
}

export const messagesRoute: Routes = [
  {
    path: '',
    component: MessagesComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'customerFeedBackApp.messages.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: MessagesDetailComponent,
    resolve: {
      messages: MessagesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.messages.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: MessagesUpdateComponent,
    resolve: {
      messages: MessagesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.messages.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: MessagesUpdateComponent,
    resolve: {
      messages: MessagesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.messages.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
