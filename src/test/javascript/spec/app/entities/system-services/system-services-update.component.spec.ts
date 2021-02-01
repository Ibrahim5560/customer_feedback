import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { CustomerFeedBackTestModule } from '../../../test.module';
import { SystemServicesUpdateComponent } from 'app/entities/system-services/system-services-update.component';
import { SystemServicesService } from 'app/entities/system-services/system-services.service';
import { SystemServices } from 'app/shared/model/system-services.model';

describe('Component Tests', () => {
  describe('SystemServices Management Update Component', () => {
    let comp: SystemServicesUpdateComponent;
    let fixture: ComponentFixture<SystemServicesUpdateComponent>;
    let service: SystemServicesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CustomerFeedBackTestModule],
        declarations: [SystemServicesUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(SystemServicesUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(SystemServicesUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(SystemServicesService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new SystemServices(123);
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
        const entity = new SystemServices();
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
