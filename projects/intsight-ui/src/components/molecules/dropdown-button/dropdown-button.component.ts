import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ta9-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
})
export class DropdownButtonComponent {
  @ViewChild('dropdownContainer')
  dropdownContainer!: ElementRef;
  @Input() svgIcon = '';
  @Input() listTitle = '';
  @Input() listItems: { text: string; icon: string; }[] = [];
  @Input() showArrowIcon = true;
  @Output() itemClick = new EventEmitter<any>();
  @Input() pivotRight = false;
  @Input() customClass = '';
  
  showHideContent = false;

  constructor() {}

  toggleDropdownContent() {
    this.showHideContent = !this.showHideContent;
  }

  itemClicked(data: any) {
    this.itemClick.emit(data);
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: any) {
    const clickedInside = this.dropdownContainer.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.showHideContent = false;
    }
  }
}