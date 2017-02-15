import {Component, OnInit} from '@angular/core';
import {Link} from './link';
import {Analytic} from './core/analytic';
import {AnalyticsService} from './core/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  enabledAnalytics: Analytic[];
  title = '\'app\' title from app.component.ts';
  topLinks: Link[] = [
    {url: '/dashboard', title: 'Dashboard (Home)'}
  ];
  bottomLinks: Link[] = [
    {url: '/settings-analytics', title: 'Analytic Settings'},
    {url: '/settings-general', title: 'General Settings'}
  ];

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
    this.getEnabledAnalytics();
  }

  getEnabledAnalytics(): void {
    this.analyticsService.getEnabledAnalytics().then(enabledAnalytics => this.enabledAnalytics = enabledAnalytics);
  }
}
