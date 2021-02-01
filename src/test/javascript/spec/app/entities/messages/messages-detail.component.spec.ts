import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CustomerFeedBackTestModule } from '../../../test.module';
import { MessagesDetailComponent } from 'app/entities/messages/messages-detail.component';
import { Messages } from 'app/shared/model/messages.model';

describe('Component Tests', () => {
  describe('Messages Management Detail Component', () => {
    let comp: MessagesDetailComponent;
    let fixture: ComponentFixture<MessagesDetailComponent>;
    const route = ({ data: of({ messages: new Messages(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [CustomerFeedBackTestModule],
        declarations: [MessagesDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(MessagesDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(MessagesDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load messages on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.messages).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
