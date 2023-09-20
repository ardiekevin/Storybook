import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class DatetimePickerComponent {
  isDropdownOpen = false;
  selectedOption = 'dd.mm.yyyy';
  selectedDate: Date | null = null;
  bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-default', // You can customize the date picker appearance here
  };

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  onDateSelect(selectedDate: Date) {
    console.log(`Selected date: ${selectedDate}`);
    this.selectedDate = selectedDate;
  }
}
