import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISystemServices } from 'app/shared/model/system-services.model';

@Component({
  selector: 'jhi-system-services-detail',
  templateUrl: './system-services-detail.component.html',
})
export class SystemServicesDetailComponent implements OnInit {
  systemServices: ISystemServices | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ systemServices }) => (this.systemServices = systemServices));
  }

  previousState(): void {
    window.history.back();
  }
}
