import { Component, OnInit } from '@angular/core';
import {Analytic} from '../core/analytic';
import {AnalyticsService} from '../core/analytics.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  enabledAnalytics: Analytic[];

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.getEnabledAnalytics()
  }

  getEnabledAnalytics(): void {
    this.analyticsService.getEnabledAnalytics().then(enabledAnalytics => this.enabledAnalytics = enabledAnalytics);
  }

}
