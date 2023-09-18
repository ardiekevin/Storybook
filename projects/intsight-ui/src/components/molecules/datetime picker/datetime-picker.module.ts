import { DatetimePickerComponent } from './datetime-picker.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatetimePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [DatetimePickerComponent],
})
export class DatetimePickerModule { }
