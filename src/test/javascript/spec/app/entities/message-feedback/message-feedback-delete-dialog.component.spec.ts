import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { CustomerFeedBackTestModule } from '../../../test.module';
import { MockEventManager } from '../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { MessageFeedbackDeleteDialogComponent } from 'app/entities/message-feedback/message-feedback-delete-dialog.component';
import { MessageFeedbackService } from 'app/entities/message-feedback/message-feedback.service';

describe('Component Tests', () => {
  describe('MessageFeedback Management Delete Component', () => {
    let comp: MessageFeedbackDeleteDialogComponent;
    let fixture: ComponentFixture<MessageFeedbackDeleteDialogComponent>;
    let service: MessageFeedbackService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CustomerFeedBackTestModule],
        declarations: [MessageFeedbackDeleteDialogComponent],
      })
        .overrideTemplate(MessageFeedbackDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(MessageFeedbackDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MessageFeedbackService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});