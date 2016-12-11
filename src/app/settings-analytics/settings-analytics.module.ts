import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsAnalyticsComponent } from './settings-analytics.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SettingsAnalyticsComponent, EntryComponent],
  exports: [SettingsAnalyticsComponent]
})
export class SettingsAnalyticsModule { }
