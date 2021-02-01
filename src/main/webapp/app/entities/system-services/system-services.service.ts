import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISystemServices } from 'app/shared/model/system-services.model';

type EntityResponseType = HttpResponse<ISystemServices>;
type EntityArrayResponseType = HttpResponse<ISystemServices[]>;

@Injectable({ providedIn: 'root' })
export class SystemServicesService {
  public resourceUrl = SERVER_API_URL + 'api/system-services';

  constructor(protected http: HttpClient) {}

  create(systemServices: ISystemServices): Observable<EntityResponseType> {
    return this.http.post<ISystemServices>(this.resourceUrl, systemServices, { observe: 'response' });
  }

  update(systemServices: ISystemServices): Observable<EntityResponseType> {
    return this.http.put<ISystemServices>(this.resourceUrl, systemServices, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISystemServices>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ISystemServices[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
