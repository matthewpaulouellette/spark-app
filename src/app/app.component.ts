import {Component} from '@angular/core';
import {Link} from './link';
import {AnalyticsService} from './core/analytics.service';
import {Analytic} from './core/analytic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '\'app\' title from app.component.ts';
  topLinks: Link[] = [
    {url: '/dashboard', title: 'Dashboard (Home)'}
  ];
  bottomLinks: Link[] = [
    {url: '/settings-analytics', title: 'Analytic Settings'},
    {url: '/settings-general', title: 'General Settings'}
  ];
  enabledAnalytics: Analytic[];

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit(): void {
    this.getEnabledAnalytics();
  }

  getEnabledAnalytics(): void {
    this.analyticsService.getEnabledAnalytics().then(enabledAnalytics => this.enabledAnalytics = enabledAnalytics);
  }
}
