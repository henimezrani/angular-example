import {Component, Input, OnInit} from '@angular/core';
import Alert from '../../../../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() {
  }

  @Input() alert: Alert;

  ngOnInit() {
  }

  closeAlert() {
    this.alert = {
      message: '',
      type: '',
      display: false
    };
  }
}
