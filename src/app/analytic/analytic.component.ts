import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AnalyticsService} from '../core/analytics.service';

import 'rxjs/add/operator/switchMap';

import {Analytic} from "../core/analytic";

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.css']
})
export class AnalyticComponent implements OnInit {
  @Input()
  analytic: Analytic;

  constructor(private analyticsService: AnalyticsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.analyticsService.getAnalytic(+params['id']))
      .subscribe(analytic => this.analytic = analytic);
  }

}
