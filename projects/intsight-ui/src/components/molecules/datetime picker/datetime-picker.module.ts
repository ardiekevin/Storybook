import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { DatetimePickerComponent } from './datetime-picker.component';

@NgModule({
  declarations: [DatetimePickerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [DatetimePickerComponent],
  schemas: []
})
export class DatetimePickerModule { }
