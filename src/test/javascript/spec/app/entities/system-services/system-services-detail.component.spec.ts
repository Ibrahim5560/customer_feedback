import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CustomerFeedBackTestModule } from '../../../test.module';
import { SystemServicesDetailComponent } from 'app/entities/system-services/system-services-detail.component';
import { SystemServices } from 'app/shared/model/system-services.model';

describe('Component Tests', () => {
  describe('SystemServices Management Detail Component', () => {
    let comp: SystemServicesDetailComponent;
    let fixture: ComponentFixture<SystemServicesDetailComponent>;
    const route = ({ data: of({ systemServices: new SystemServices(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CustomerFeedBackTestModule],
        declarations: [SystemServicesDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SystemServicesDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SystemServicesDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load systemServices on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.systemServices).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
