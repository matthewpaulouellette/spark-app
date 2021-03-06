import {Component, OnInit} from '@angular/core';
import {Analytic} from '../core/analytic';
import {AnalyticsService} from '../core/analytics.service';

@Component({
  selector: 'app-settings-analytics',
  templateUrl: './settings-analytics.component.html',
  styleUrls: ['./settings-analytics.component.css']
})
export class SettingsAnalyticsComponent implements OnInit {
  allAnalytics: Analytic[];

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
    this.getAllAnalytics();
  }

  getAllAnalytics(): void {
    this.analyticsService.getAllAnalytics().then(allAnalytics => this.allAnalytics = allAnalytics);
    console.log('settings-analytics.getAllAnalytics')
  }

  addAnalytic(name: string, type: string): void {
    this.analyticsService.addAnalytic(name, type);
  }

}
