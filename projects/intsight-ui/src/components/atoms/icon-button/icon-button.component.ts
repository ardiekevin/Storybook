import { Component, Input } from '@angular/core';

@Component({
  selector: 'ta9-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() svgIcon = '';
  @Input() ngClass = '';
  @Input() ngClass2 = '';
  @Input() height: number = 25;
  @Input () width: number = 25;
}