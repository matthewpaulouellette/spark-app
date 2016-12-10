/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnalyticDataService } from './analytic-data.service';

describe('AnalyticDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalyticDataService]
    });
  });

  it('should ...', inject([AnalyticDataService], (service: AnalyticDataService) => {
    expect(service).toBeTruthy();
  }));
});
