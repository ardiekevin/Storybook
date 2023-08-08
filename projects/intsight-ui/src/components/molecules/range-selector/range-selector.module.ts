import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { RangeSelectorComponent } from './range-selector.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RangeSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartAllModule,
    RangeNavigatorAllModule,
    DatePickerModule,
  ],
  providers: [],
  exports: [
    RangeSelectorComponent
  ]
})
export class RangeSelectorModule {}
