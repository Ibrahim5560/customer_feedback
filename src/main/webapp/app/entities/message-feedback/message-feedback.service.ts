import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IMessageFeedback } from 'app/shared/model/message-feedback.model';

type EntityResponseType = HttpResponse<IMessageFeedback>;
type EntityArrayResponseType = HttpResponse<IMessageFeedback[]>;

@Injectable({ providedIn: 'root' })
export class MessageFeedbackService {
  public resourceUrl = SERVER_API_URL + 'api/message-feedbacks';

  constructor(protected http: HttpClient) {}

  create(messageFeedback: IMessageFeedback): Observable<EntityResponseType> {
    return this.http.post<IMessageFeedback>(this.resourceUrl, messageFeedback, { observe: 'response' });
  }

  update(messageFeedback: IMessageFeedback): Observable<EntityResponseType> {
    return this.http.put<IMessageFeedback>(this.resourceUrl, messageFeedback, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IMessageFeedback>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IMessageFeedback[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
