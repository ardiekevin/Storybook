import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class DatetimePickerComponent implements OnInit {
  selectedDay!: number;
  selectedMonth!: number;
  selectedYear!: number;

  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  years: number[] = Array.from({ length: 100 }, (_, i) => 2023 - i);

  constructor() { }

  ngOnInit(): void {
    this.selectedDay = 1;
    this.selectedMonth = 1;
    this.selectedYear = 2023;
    this.updateDate();
  }

  updateDate(): void {
    this.selectedDate = `${this.selectedDay.toString().padStart(2, '0')}.${this.selectedMonth.toString().padStart(2, '0')}.${this.selectedYear}`;
  }
}
