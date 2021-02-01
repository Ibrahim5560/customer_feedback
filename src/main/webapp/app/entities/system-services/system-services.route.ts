import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ISystemServices, SystemServices } from 'app/shared/model/system-services.model';
import { SystemServicesService } from './system-services.service';
import { SystemServicesComponent } from './system-services.component';
import { SystemServicesDetailComponent } from './system-services-detail.component';
import { SystemServicesUpdateComponent } from './system-services-update.component';

@Injectable({ providedIn: 'root' })
export class SystemServicesResolve implements Resolve<ISystemServices> {
  constructor(private service: SystemServicesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ISystemServices> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((systemServices: HttpResponse<SystemServices>) => {
          if (systemServices.body) {
            return of(systemServices.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new SystemServices());
  }
}

export const systemServicesRoute: Routes = [
  {
    path: '',
    component: SystemServicesComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'customerFeedBackApp.systemServices.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: SystemServicesDetailComponent,
    resolve: {
      systemServices: SystemServicesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.systemServices.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: SystemServicesUpdateComponent,
    resolve: {
      systemServices: SystemServicesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.systemServices.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: SystemServicesUpdateComponent,
    resolve: {
      systemServices: SystemServicesResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'customerFeedBackApp.systemServices.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
