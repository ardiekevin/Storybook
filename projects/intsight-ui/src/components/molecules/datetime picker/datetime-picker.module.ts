import { DatetimePickerComponent } from './datetime-picker.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatepickerModule } from 'ng2-datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [
    DatetimePickerComponent
  ],
  imports: [
    BrowserModule,
    DatepickerModule,
    BsDatepickerModule.forRoot(),
    BsDatepickerConfig
  ],
  bootstrap: [DatetimePickerComponent],
})
export class DatetimePickerModule { }
