import {Injectable} from '@angular/core';

import {Analytic} from './analytic';
import {ANALYTICS} from './mock-analytics';

@Injectable()
export class AnalyticsService {

  getEnabledAnalytics(): Promise<Analytic[]> {
    let ret = [];
    for (let entry of ANALYTICS) {
      if (entry.enabled == true) {
        ret.push(entry);
      }
    }
    return Promise.resolve(ret);
  }

  getAllAnalytics(): Promise<Analytic[]> {
    return Promise.resolve(ANALYTICS);
  }

  getAnalytic(id: number): Promise<Analytic> {
    return this.getAllAnalytics()
      .then(analytics => analytics.find(analytic => analytic.id === id));
  }

}
