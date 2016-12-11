import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, EntryComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
