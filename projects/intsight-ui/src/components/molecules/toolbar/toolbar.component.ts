import { Component, Input, OnInit, HostListener  } from '@angular/core';


@Component({
  selector: 'ta9-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  {
  isDropdownOpen = false;
  selectedOption = 'Last 30 Minutes'; // Initialize the property


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false; // Close the dropdown after selection
  }

  findText: string = 'Find...';
  defaultText: string = 'Find...';

  onFindTextFocus() {
    if (this.findText === this.defaultText) {
      // Clear the default text when the span is clicked (focused)
      this.findText = '';
    }
  }

  onFindTextBlur() {
    if (this.findText === '') {
      // Restore the default text if the span loses focus and is empty
      this.findText = this.defaultText;
    }
  }

}



