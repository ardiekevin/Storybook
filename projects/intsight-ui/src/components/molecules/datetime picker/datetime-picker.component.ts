import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss']
})
export class DatetimePickerComponent implements OnInit {
  selectedDate: string = '';
  formattedDate: string = '';
  dateForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dateForm = this.fb.group({
      selectedDate: ['', [Validators.required, this.dateRangeValidator]]
    });
  }

  dateRangeValidator(control: FormGroup) {
    const selectedDate = new Date(control.value);

    const minDate = new Date('2023-01-01');
    const maxDate = new Date('2023-12-31');

    return selectedDate >= minDate && selectedDate <= maxDate
      ? null
      : { dateRangeError: true };
  }

  onDateChange() {
    const dateObj = new Date(this.selectedDate);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear();
    this.formattedDate = `${day}.${month}.${year}`;
  }
}
