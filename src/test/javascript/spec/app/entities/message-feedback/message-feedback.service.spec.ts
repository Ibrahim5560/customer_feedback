import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageFeedbackService } from 'app/entities/message-feedback/message-feedback.service';
import { IMessageFeedback, MessageFeedback } from 'app/shared/model/message-feedback.model';

describe('Service Tests', () => {
  describe('MessageFeedback Service', () => {
    let injector: TestBed;
    let service: MessageFeedbackService;
    let httpMock: HttpTestingController;
    let elemDefault: IMessageFeedback;
    let expectedResult: IMessageFeedback | IMessageFeedback[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(MessageFeedbackService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new MessageFeedback(0, 0, 0, 0, 0, 0, 0, 'AAAAAAA', 0, 'AAAAAAA', 'AAAAAAA');
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a MessageFeedback', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new MessageFeedback()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a MessageFeedback', () => {
        const returnedFromService = Object.assign(
          {
            systemId: 1,
            centerId: 1,
            systemServicesId: 1,
            counter: 1,
            trsId: 1,
            userId: 1,
            message: 'BBBBBB',
            status: 1,
            feedback: 'BBBBBB',
            applicantName: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of MessageFeedback', () => {
        const returnedFromService = Object.assign(
          {
            systemId: 1,
            centerId: 1,
            systemServicesId: 1,
            counter: 1,
            trsId: 1,
            userId: 1,
            message: 'BBBBBB',
            status: 1,
            feedback: 'BBBBBB',
            applicantName: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a MessageFeedback', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
