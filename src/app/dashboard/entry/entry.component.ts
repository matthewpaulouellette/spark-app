import { Component, OnInit, Input } from '@angular/core';
import {Analytic} from '../../core/analytic';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input()
  analytic: Analytic;

  constructor() { }

  ngOnInit() {
  }

}
