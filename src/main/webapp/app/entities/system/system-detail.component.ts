import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISystem } from 'app/shared/model/system.model';

@Component({
  selector: 'jhi-system-detail',
  templateUrl: './system-detail.component.html',
})
export class SystemDetailComponent implements OnInit {
  system: ISystem | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ system }) => (this.system = system));
  }

  previousState(): void {
    window.history.back();
  }
}
