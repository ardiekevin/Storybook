import { Component } from '@angular/core';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class DatetimePickerComponent {
  selectedDate: Date | null = null;

  formatDate(date: Date | null): string {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const [day, month, year] = inputValue.split('.').map(Number);

    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      this.selectedDate = new Date(year, month - 1, day); 
    } else {
      this.selectedDate = null;
    }
  }
}
