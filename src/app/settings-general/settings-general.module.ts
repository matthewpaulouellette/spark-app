import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsGeneralComponent } from './settings-general.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SettingsGeneralComponent],
  exports: [SettingsGeneralComponent]
})
export class SettingsGeneralModule { }
