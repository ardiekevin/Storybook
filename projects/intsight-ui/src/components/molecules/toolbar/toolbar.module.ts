import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';
import { SearchBoxModule } from '../search-box/search-box.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DropdownButtonModule } from '../dropdown-button/dropdown-button.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    SearchBoxModule,
    AngularSvgIconModule,
    DropdownButtonModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }