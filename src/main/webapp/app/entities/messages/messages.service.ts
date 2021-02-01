import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IMessages } from 'app/shared/model/messages.model';

type EntityResponseType = HttpResponse<IMessages>;
type EntityArrayResponseType = HttpResponse<IMessages[]>;

@Injectable({ providedIn: 'root' })
export class MessagesService {
  public resourceUrl = SERVER_API_URL + 'api/messages';

  constructor(protected http: HttpClient) {}

  create(messages: IMessages): Observable<EntityResponseType> {
    return this.http.post<IMessages>(this.resourceUrl, messages, { observe: 'response' });
  }

  update(messages: IMessages): Observable<EntityResponseType> {
    return this.http.put<IMessages>(this.resourceUrl, messages, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IMessages>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IMessages[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
