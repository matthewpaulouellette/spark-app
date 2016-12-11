import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalyticsService} from './analytics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [AnalyticsService]
})
export class CoreModule {
}
