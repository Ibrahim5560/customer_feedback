import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CustomerFeedBackTestModule } from '../../../test.module';
import { MessageFeedbackDetailComponent } from 'app/entities/message-feedback/message-feedback-detail.component';
import { MessageFeedback } from 'app/shared/model/message-feedback.model';

describe('Component Tests', () => {
  describe('MessageFeedback Management Detail Component', () => {
    let comp: MessageFeedbackDetailComponent;
    let fixture: ComponentFixture<MessageFeedbackDetailComponent>;
    const route = ({ data: of({ messageFeedback: new MessageFeedback(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CustomerFeedBackTestModule],
        declarations: [MessageFeedbackDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(MessageFeedbackDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(MessageFeedbackDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load messageFeedback on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.messageFeedback).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
