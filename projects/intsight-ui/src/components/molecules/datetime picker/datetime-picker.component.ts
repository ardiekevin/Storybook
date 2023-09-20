import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class DatetimePickerComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.datePickerConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'DD.MM.YYYY', 
    };
  }

  ngOnInit(): void {
  }
}
