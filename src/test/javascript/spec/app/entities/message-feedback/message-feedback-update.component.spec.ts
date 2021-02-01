import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { CustomerFeedBackTestModule } from '../../../test.module';
import { MessageFeedbackUpdateComponent } from 'app/entities/message-feedback/message-feedback-update.component';
import { MessageFeedbackService } from 'app/entities/message-feedback/message-feedback.service';
import { MessageFeedback } from 'app/shared/model/message-feedback.model';

describe('Component Tests', () => {
  describe('MessageFeedback Management Update Component', () => {
    let comp: MessageFeedbackUpdateComponent;
    let fixture: ComponentFixture<MessageFeedbackUpdateComponent>;
    let service: MessageFeedbackService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CustomerFeedBackTestModule],
        declarations: [MessageFeedbackUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(MessageFeedbackUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(MessageFeedbackUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MessageFeedbackService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new MessageFeedback(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new MessageFeedback();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
