import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticComponent } from './analytic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnalyticComponent],
  exports: [AnalyticComponent]
})
export class AnalyticModule { }
