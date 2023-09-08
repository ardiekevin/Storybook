import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { DatetimePickerComponent } from './datetime-picker.component';

@NgModule({
  declarations: [DatetimePickerComponent],
  imports: [BrowserModule, BsDatepickerModule.forRoot(), FormsModule],
  exports: [DatetimePickerComponent],
  providers: [DatePipe],
})
export class DatetimePickerModule {}