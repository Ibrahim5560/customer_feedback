import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { CustomerFeedBackTestModule } from '../../../test.module';
import { MessagesUpdateComponent } from 'app/entities/messages/messages-update.component';
import { MessagesService } from 'app/entities/messages/messages.service';
import { Messages } from 'app/shared/model/messages.model';

describe('Component Tests', () => {
  describe('Messages Management Update Component', () => {
    let comp: MessagesUpdateComponent;
    let fixture: ComponentFixture<MessagesUpdateComponent>;
    let service: MessagesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CustomerFeedBackTestModule],
        declarations: [MessagesUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(MessagesUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(MessagesUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(MessagesService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Messages(123);
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
        const entity = new Messages();
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
