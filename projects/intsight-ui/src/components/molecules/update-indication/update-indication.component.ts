import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';



@Component({
  selector: 'ta9-update-indication',
  templateUrl: './update-indication.component.html',
  styleUrls: ['./update-indication.component.scss'],
})
export class UpdateIndicationComponent {
  updateText: string = 'Last Updated 02/06/2023 10:34:07';
}
