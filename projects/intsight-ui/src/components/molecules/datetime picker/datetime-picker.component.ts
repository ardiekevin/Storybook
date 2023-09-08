import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss'],
})
export class DatetimePickerComponent {
  selectedDate: string = ''; // Initialize with an empty string

  onSubmit() {
    // Handle form submission logic here, e.g., send the selectedDate to the server
    console.log('Selected Date:', this.selectedDate);
    // You can implement your HTTP request or other logic here
  }
}