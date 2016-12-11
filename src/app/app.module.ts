import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {AnalyticModule} from './analytic/analytic.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {SettingsAnalyticsModule} from './settings-analytics/settings-analytics.module';
import {SettingsGeneralModule} from './settings-general/settings-general.module';
import {AppRoutingModule}     from './app-routing.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AnalyticModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    SettingsAnalyticsModule,
    SettingsGeneralModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
