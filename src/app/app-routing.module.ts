import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AnalyticComponent} from './analytic/analytic.component';
import {SettingsAnalyticsComponent} from './settings-analytics/settings-analytics.component';
import {SettingsGeneralComponent} from './settings-general/settings-general.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'analytic/:id', component: AnalyticComponent},
  {path: 'settings-analytics', component: SettingsAnalyticsComponent},
  {path: 'settings-general', component: SettingsGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

