import {Injectable} from '@angular/core';

import {Analytic} from './analytic';
import {ANALYTICS} from './mock-analytics';

@Injectable()
export class AnalyticsService {
  analytics: Analytic[];
  enabledAnalytics: Analytic[];

  constructor() {
    this.analytics = ANALYTICS;
    this.enabledAnalytics = this.analytics.filter((analytic) => analytic.enabled == true);
    console.log("Starting analytics service!");
  }

  getEnabledAnalytics(): Promise<Analytic[]> {
    return Promise.resolve(this.enabledAnalytics);
  }

  getAllAnalytics(): Promise<Analytic[]> {
    return Promise.resolve(this.analytics);
  }

  getAnalytic(id: number): Promise<Analytic> {
    return this.getAllAnalytics()
      .then(analytics => analytics.find(analytic => analytic.id === id));
  }

  addAnalytic(name: string, type: string): void {
    // Get unique ID
    let id = 0;
    for (let analytic of this.analytics) {
      if (analytic.id > id) id = analytic.id;
    }
    id++;

    let entry: Analytic = {id: id, name: 'Added Analytic ' + id, type: 'Placeholder \'type\'', enabled: true};

    this.analytics.push(entry);
    this.enabledAnalytics.push(entry);
  }

  removeAnalytic(id: number): void {
    this.analytics.filter((analytic) => analytic.id !== id)
  }


  //
  //
  //
  // sampleGetMethod(): Promise<Analytic[]> {
  //   return this.http.get('api/heroes')
  //     .toPromise()
  //     .then(response => response.json().data as Analytic[])
  //     .catch(this.handleError);
  // }
  //
  // private headers = new Headers({'Content-Type': 'application/json'});
  // update(hero: Hero): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(hero), {headers: this.headers})
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }


}
