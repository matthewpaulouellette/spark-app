/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataAnalyticsService } from './data-analytics.service';

describe('DataAnalyticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataAnalyticsService]
    });
  });

  it('should ...', inject([DataAnalyticsService], (service: DataAnalyticsService) => {
    expect(service).toBeTruthy();
  }));
});
